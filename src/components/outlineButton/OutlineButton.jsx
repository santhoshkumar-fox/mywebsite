import React, { useState } from 'react'
import './OutlineButton.css'
function OutlineButton({containerStyle,textStyle,title,onClickCallback}) {
  const [onHover,setOnHover] = useState(false);
  return (
    <div onMouseEnter={(e)=>{setOnHover(true)}} onMouseLeave={()=>{setOnHover(false)}} onClick={()=>{onClickCallback(title)}} className='flexCenter outlineButtonContainer' style={containerStyle}>
      <p style={{...textStyle,...{ color:onHover ? 'var(--primaryColor)' :'white'}}}  className='label01 outlineText'>{title}</p>
    </div>
  )
}

export default OutlineButton
