import React, { useEffect } from 'react'
import './loadScreen.css'
import { gsap } from 'gsap'
import SplitTextJS from 'split-text-js';
function LoadScreen() {


    

    useEffect(()=>{
        const titles = gsap.utils.toArray('.loaderText')
        const t1 = gsap.timeline({repeat:-1})
        titles.forEach((title)=>{
            
            const splitTitle = new SplitTextJS(title)
            title.style = {opacity:1}
            t1
            .from(splitTitle.chars,{
                opacity:0,
                y:20,
                rotateX:-90,
                stagger:.02,
                
            },"<")
            .to(title,{
                opacity:0,
                y:-20,
                rotateX:90,
                stagger:.02,
            },"<1")
            
            
        })
        setTimeout(() => {
            changeLoadingAnimation();
        }, 5500);
    },[])

    const changeLoadingAnimation = ()=>{
        const loadingContainer_el = document.querySelector('.loadScreenContainer');
        console.log("value",loadingContainer_el)
        loadingContainer_el.style.height = "0px";
        loadingContainer_el.style.transition = "1s all";
    }
  return (
    <div className='loadScreenContainer' >
      {/* <h1 className='label01 text'>Santhosh Kumar &reg;</h1> */}
      <div className='animatedTextLoaderContainer'>
        <div className='textWrapper'>
            <p className='headline01 loaderText'>SANTHOSH KUMAR &reg;</p>
            <p className='headline01 loaderText'>WEB DEVELOPER</p>
            <p className='headline01 loaderText'>APP DEVELOPER</p>
            <p className='headline01 loaderText' >DESIGNER</p>
            <p className='headline01 loaderText'>ANIMATOR</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoadScreen
