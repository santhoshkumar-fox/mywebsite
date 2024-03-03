import React, { useState } from 'react'
import "./IconButton.css"
function IconButton({color,icon,onClickCallback,style}) {
  const [onHover,setOnHover] = useState(false);
  return (
    <div onMouseEnter={()=>{setOnHover(true);
    let mousePointer_el = document.querySelectorAll('.mousePointer');
    mousePointer_el.forEach((el)=>{
      el.style.width = '50px'
      el.style.height = '50px'
      el.style.borderRadius = "25px"
      el.style.background = 'rgba(255,255,255,.8)'
    })
      
    }} onMouseLeave={()=>{setOnHover(false);
      let mousePointer_el = document.querySelectorAll('.mousePointer');
    mousePointer_el.forEach((el)=>{
      el.style.width = '20px'
      el.style.height = '20px'
      el.style.background = 'rgba(255,255,255,1)'
    })
    }} onClick={()=>{onClickCallback()}} className='flexCenter IconButtonContainer' style={style} >
        {icon(onHover ?'white':'var(--secondaryColor)')}
    </div>
  )
}

export default IconButton
