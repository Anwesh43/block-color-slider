import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                setAnimated(false)
                const interval = setInterval(() => {
                    currScale += scGap * dir
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
     }
}

export const useStyle = (w, h, scale) =>{
    const blockBackground = "#4CAF50"
    const barBackground = "#3F51B5"
    const blockSize = Math.min(w, h) / 5
    const sf = Math.sin(scale * Math.PI)
    const x = w * sf
    const blockW = w - x
    const y = h / 2 - blockSize / 2
    return {
        blockStyle() {
            const width = `${blockSize}px`
            const height = `${blockSize}px`
            const background = blockBackground
            const position = 'absolute'
            const top = `${y}px`
            const left = `${x}px`
            return {position, top, left, width, height, background}
        },
        barStyle() {
            const width = `${blockW}px`
            const height = `${blockSize}px`
            const position = 'absolute'
            const left = `${x}px`
            const top = `${y}px`
            const background = barBackground
            return {width, height, position, top, left, background}
        }
    }
}
