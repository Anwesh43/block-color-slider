import React from 'react'
import BlockColorSliderPresentational from './BlockColorSliderPresentational'
import {useDimension, useAnimatedScale} from './hooks'

const BlockColorSliderContainer = ({}) => {
    const {w, h} = useDimension()
    const {scale, start} = useAnimatedScale(0.02, 30)
    return <BlockColorSliderPresentational w = {w} h = {h} scale = {scale} onClick = {() => {
        //alert("started")
        start()
    }}>
          </BlockColorSliderPresentational>
}

export default BlockColorSliderContainer
