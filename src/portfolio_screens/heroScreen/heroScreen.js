import React, { useEffect, useState } from 'react'
import "./heroScreen.css"
import assets from '../../assets'

import Appbar2 from '../../components/Appbar2/appbar2'
import IconButton from '../../components/iconButton/IconButton'
import OutlineButton from '../../components/outlineButton/OutlineButton'

function HeroScreen() {
  
  
  return (
    <div onMouseMove={(e)=>{

      const px = e.clientX - window.innerWidth/2
      const py = e.clientY - window.innerHeight/2
      
      document.querySelectorAll(".paralex").forEach((el)=>{
        let speedX  = el.getAttribute('data-scrollX')
        el.style.transform = `translateX( ${-px * speedX}px) translateY(${-py * speedX}px)`
      })
 
    }} className='heroPageContainer '>
        <img
        data-scrollX="0.2"
        className='paralex'
        src={assets.images.profile_background_image} alt={'profileImage'}/>
       
        {/* Header */}
        <Appbar2/>

        {/* title */}
        <div  data-scrollX="0.1"  className='heroTitleContainer paralex'>
        
        </div>
    </div>
  )
}

export default HeroScreen
