import React from 'react'
import "./trailer.css"
import gsap, { Power3 } from 'gsap'
function Trailer() {
   
    const mouseMoveCalllback = (e)=>{
        const mouseTraril_el = document.getElementById("trailerContainer");
        const isPlay = e.target.closest(".palyComponent") !== null
        const isButton = e.target.closest(".ButtonComponent") !== null
        gsap.to(".trailerContainer",{
            x:e.clientX - (mouseTraril_el.offsetWidth/2),
            y:e.clientY - (mouseTraril_el.offsetHeight/2),
            duration:.7,
            ease:Power3.easeOut,
        })
        if(isPlay){
            gsap.to(".trailerContainer",{
                scale:2,
                ease:Power3.easeOut,
            })
            gsap.to('.playIcon',{
                rotate:'360deg',
                opacity:1,
                duration:1,
                ease:Power3.easeOut,
            })
        }
        else{
            gsap.to(".trailerContainer",{
                scale:1,
                ease:Power3.easeOut,
            })
            gsap.to('.playIcon',{
                rotate:'0deg',
                duration:1,
                opacity:0,
                ease:Power3.easeOut,
            })
        }
        if(isButton){
            gsap.to(".trailerContainer",{
                opacity:0,
                duration:.5,
                ease:Power3.easeOut,
            })
        }
        else{
            gsap.to(".trailerContainer",{
                opacity:1,
                ease:Power3.easeOut,
            })
            
        }
        
        
    }

    window.onmousemove = (e)=>{
      mouseMoveCalllback(e)
    }
  return (
    <div className='trailerContainer' id={"trailerContainer"}>
        <i class="uil uil-play playIcon" style={{color:"white",position:"absolute",opacity:0}}></i>
    </div>
  )
}

export default Trailer