import React from 'react'
import './transformText.css'

const TransformText = ({texto, color, typeText}) => {
    return <p className='transform' style={{color: color ,textTransform: typeText}}>{texto}</p>
}

export default TransformText