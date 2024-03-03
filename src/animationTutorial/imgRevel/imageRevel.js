import React, { useEffect, useRef } from "react";
import "./imageRevel.css";
import gsap, { Power0, Power2, Power4 } from "gsap";

function ImageRevel() {
  const mainContainerRef = useRef(null);
  const imageAnimationRef = useRef(null);
  const shetterAnimationRef = useRef(null);
  const t1 = gsap.timeline()
  const t2 = gsap.timeline()
  useEffect(()=>{
    t1
    .to(".ImgShettercon",{xPercent:100,duration:1,ease:Power2.easeInOut})
    t2
    .to("#scaleImg",{scale:1.5,duration:1,ease:Power2.easeInOut})
  },[])


  return (
    <div className="ImageRevelContainer">
      <div className="ImageContainer">
        <img
          id={'scaleImg'}
          style={{ width: "100%", height: "100%" }}
          src="https://images.unsplash.com/photo-1622017697786-41bbccaf87e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        />
        <div className="ImgShettercon">

        </div>
      </div>

      {/* Text */}
      <p className="imagText label01">SEA VIEW WITH GIRL</p>
    </div>
  );
}

export default ImageRevel;
