import React, { useEffect, useRef } from "react";
import "./start.css";
import { Power0, Power1, Power2, TweenMax } from "gsap/gsap-core";
import gsap, { Power3 } from "gsap";
function Start() {
  const animationRef = useRef(null);
  const redBallRef = useRef(null);
  const blueBallRef = useRef(null);
  const orangeBallRef = useRef(null);
  
  useEffect(() => {
    gsap.to(animationRef.current, {
      css: { visibility: "visible" },
      duration: 0,
    });
    var tweening =  gsap.from(".ballContainer", {
        opacity: .5,
        x: 80,
        duration: 1,
        
        stagger:{
          each:0.4,
          // from:"random"
          repeat:-1,
        yoyo:true,
        },
        ease: Power3.easeIn,
      },"+=");
   
    //   TweenMax.staggerFrom([redBallRef.current,blueBallRef.current,orangeBallRef.current],1,{opacity:0,x:100,ease:Power1.easeIn},.2)
    //   gsap.from(redBallRef.current,{opacity:0,x:80,duration:1,ease:Power1.easeIn});
    //   gsap.from(blueBallRef.current,{opacity:0,x:80,duration:1,ease:Power1.easeIn,delay:.2});
    //   gsap.from(orangeBallRef.current,{opacity:0,x:80,duration:1,ease:Power1.easeIn,delay:.4});
  }, []);
  return (
    <div  ref={animationRef} className="startContainer">
      <div  ref={redBallRef} className="ballContainer redBG"></div>
      <div ref={blueBallRef} className="ballContainer blueBG"></div>
      <div ref={orangeBallRef} className="ballContainer orangeBG"></div>
      <div className="ballContainer orangeBG"></div>


    </div>
  );
}

export default Start;
