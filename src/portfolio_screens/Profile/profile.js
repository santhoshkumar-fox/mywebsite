import React, { useEffect, useState } from 'react'
import "./profile.css"
import assets from '../../assets'

import Appbar2 from '../../components/Appbar2/appbar2'
import IconButton from '../../components/iconButton/IconButton'
import OutlineButton from '../../components/outlineButton/OutlineButton'
import gsap, { Power3 } from 'gsap'

function Profile() {
  
  
  return (
    <div onMouseEnter={()=>{
      gsap.to(".trailerContainer",{
        background:"white",
        ease:Power3.easeOut,
    })
    }}
    onMouseLeave={()=>{
      gsap.to(".trailerContainer",{
        background:"red",
        ease:Power3.easeOut,
    })

    }}
    
    onMouseMove={(e)=>{

      const px = e.clientX - window.innerWidth/2
      const py = e.clientY - window.innerHeight/2
      
      document.querySelectorAll(".paralex").forEach((el)=>{
        let speedX  = el.getAttribute('data-scrollX')
        el.style.transform = `translateX( ${-px * speedX}px) translateY(${-py * speedX}px)`
      })
 
    }} className='profilePage'>
        <img
        data-scrollX="0.1"
        className='paralex'
        src={assets.images.profile_background_image} alt={'profileImage'}/>
        {/*Image backdrop */}
        <div className='backdropContainer'/>

        {/* Header */}
        <Appbar2/>

        {/* title */}
        <div  data-scrollX="0.05"  className='titleContainer paralex'>
         <h2 className='body01 whiteColor '>Hello, I'm <h2 className='body01 primaryColor'> Santhosh kumar</h2>,</h2>
        {/* cotes */}
         <div className='cotesContainer'>
            <p className='headline01 whiteColor'>
                Identity Specialist in
                App,WebSite Developer,
                UI/UX Design
            </p>
            <div style={{display:'flex',flexDirection:"row",margin:'var(--padding40) 0px'}}>
            <OutlineButton title={"Resume"} onClickCallback={(e)=>{console.log(e)}} containerStyle={{width:"150px",height:'50px',borderRadius:'5px'}} textStyle={{fontSize:"14px"}} />
            <OutlineButton title={"Hire-Me"} onClickCallback={(e)=>{console.log(e)}} containerStyle={{width:"150px",height:'50px',borderRadius:'5px',marginLeft:'10px'}} textStyle={{fontSize:"14px"}} />
            </div>
            {/* Social Media Icon Button */}
            <div style={{display:"flex",flexDirection:"row"}}>
            <IconButton  icon={(color)=>(<i style={{color:color}} className="uil iconButtonIcon uil-facebook-f "></i>)} color={'red'} onClickCallback={()=>{}} style={{width:'30px',height:'30px',borderRadius:'10px',backgroundColor:'var(--primaryColor)',marginRight:"10px"}}/>
            <IconButton icon={(color)=>(<i style={{color:color}} className="uil iconButtonIcon uil-linkedin"></i>)} color={'red'} onClickCallback={()=>{}} style={{width:'30px',height:'30px',borderRadius:'10px',backgroundColor:'var(--primaryColor)',marginRight:"10px"}}/>
            <IconButton icon={(color)=>(<i style={{color:color}} className="uil iconButtonIcon uil-instagram"></i>)} color={'red'} onClickCallback={()=>{}} style={{width:'30px',height:'30px',borderRadius:'10px',backgroundColor:'var(--primaryColor)',marginRight:"10px"}}/>
            </div>
            
         </div>
        </div>
    </div>
  )
}

export default Profile
