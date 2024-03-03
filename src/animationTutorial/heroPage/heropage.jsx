import React, { useEffect } from 'react'
import "./heropage.css"
import { TimelineLite } from 'gsap/gsap-core'
import { Timeline } from 'gsap/gsap-core'
import gsap, { Power3 } from 'gsap'
import Trailer from '../trailer/trailer'
function Heropage() {
const t1 = gsap.timeline()
 useEffect(()=>{
    // Initial Animation
    t1.from('.heroPageImageContainer',{
        y:100,
        opacity:0,
        stagger:.01,
        duration:.6,
        ease:Power3.easeIn
    })
    gsap.to('.heroPageImageContainerImage',{
        scale:1.4,
        duration:1,
        ease:Power3.easeOut,
        delay:.6
        
    })
    gsap.from('.header_content_text',{
        y:100,
        duration:.4,
        stagger:.3,
        ease:Power3.easeOut
        
    })
    gsap.from('.herpageButtonContainer',{
        y:100,
        duration:.4,
        opacity:0,
        delay:.6,
        ease:Power3.easeOut
    })
    
    // // heroPageImageContainerImage
    // gsap.from('.heroPageImageContainer',{
    //     y:200,opacity:1,stagger:.2,
    // })
   

 },[])
  return (
    <div className='HeroPageContainer'>
        <div className='heroPage_container1'>
          <h1>
          <div className='header_content'>
            <p className='header_content_text'> HI Santhosh HI Santhosh</p>
           </div>
           <div className='header_content'>
           <p className='header_content_text'> How Are You</p>
           </div>
           <div className='header_content'>
             <p className='header_content_text'>I am Fine </p>
           </div>
          </h1>
          <div className='header_subcontent'>
            <p className='header_content_text'>Officia qui voluptate non commodo irure aute nostrud magna duis aliqua pariatur enim sunt.</p>
          </div>

          {/* Button */}
          <HeroPageButton/>
        </div>
        <div className='heroPage_container2'>
          <HeroPageImageContainer containerStyle={{position:'absolute',top:'30px',right:'100px'}} uri={"https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
          <HeroPageImageContainer containerStyle={{position:'absolute',bottom:'30px',left:'-100px'}} uri={"https://images.pexels.com/photos/8479804/pexels-photo-8479804.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"}/>
        </div>
        {/* Trailer mouse */}
    </div>
  )
}

const HeroPageButton = ({containerStyle})=>{
    return(
        <div className="herpageButtonContainer ButtonComponent ">
            <p className='label01 herpageButtonContainerText' style={{fontSize:"13px"}}>
                Explore
            </p>
            <i style={{marginLeft:'10px'}} class="uil uil-angle-right-b icon"></i>
        </div>
    )
}
const HeroPageImageContainer = ({containerStyle,uri})=>{
  return(
    <div className='heroPageImageContainer palyComponent' style={{...containerStyle}}>
        <img className='heroPageImageContainerImage' style={{width:'100%',height:"100%"}} src={uri}>
        </img>
    </div>
  )
}

export default Heropage