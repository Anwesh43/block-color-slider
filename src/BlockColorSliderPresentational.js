import React from 'react'
import {useStyle} from './hooks'
const BlockColorSliderPresentational = ({w, h, scale, onClick}) => {
    console.log(scale)
    const {blockStyle, barStyle} = useStyle(w, h, scale)
    return <div>
            <div style = {barStyle()}>
            </div>
            <div style = {blockStyle()} onClick = {onClick}>
            </div>

          </div>
}

export default BlockColorSliderPresentational
