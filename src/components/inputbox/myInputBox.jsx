import React from 'react'
import "./myInputBpx.css"
function MyInputBox({type,placeholderText,onchageCallback,title,isSecure,containerStyle}) {
  return (
    <input className='myInputBoxCon' type={type} placeholder={placeholderText} title={title} style={{...containerStyle}} onChange={(e)=>{onchageCallback(e.target.value)}}/>
  )
}

export default MyInputBox
