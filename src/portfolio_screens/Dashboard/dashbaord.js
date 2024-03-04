import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import Profile from '../Profile/profile'
import LoadScreen from '../loadScreen/loadScreen'
import HeroScreen from '../heroScreen/heroScreen'
import AboutScreen from '../aboutScreen/aboutScreen'
import MountainScreen from '../mountainScreen/mountainScreen'
import Start from '../../animationTutorial/start/start'
import ImageRevel from '../../animationTutorial/imgRevel/imageRevel'
import Heropage from '../../animationTutorial/heroPage/heropage'
import Trailer from '../../animationTutorial/trailer/trailer'
function Dashbaord() {
  const [showLoading,setShowLoading] = useState(true);
  const [privousValue,setPriviousValue] = useState({x:0,y:0})
  useEffect(()=>{
    setTimeout(() => {
      setShowLoading(false)
    }, 3000);
  },[]);
  const calculateSkewX = (x1, y1, x2, y2,priviousRotateDegre) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const angleRadians = Math.atan2(deltaY, deltaX);
    const angleDegrees = angleRadians * (180 / Math.PI);
    return (angleDegrees);
  };
  const calculateDistance = (x1, y1, x2, y2) => {
    let value = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    if(value < 20){
      return({x:1,y:1})
    }
    const INITIAL_SCALEX = 1;
    const INITIAL_SCALEY = 1;
    const windoWidth =  window.screen.width * 5
    const avg_width_percentage = (100 / windoWidth)
    const scale_width = value * avg_width_percentage
    const finale_scaleX =  ((scale_width + 1 > 2) ? 2 : scale_width + 1)
    const finale_scaleY = (Math.abs(scale_width - 1) < .3 ? .4 : Math.abs(scale_width - 1))
    return({x:finale_scaleX,y:finale_scaleY,dis:value});
  };
  return (

    <div className='dashboardScreen' 
    >
       <LoadScreen/>
      <Profile/>
      {/* <AboutScreen/> */}
      {/* <MountainScreen/> */}
      {/* <Start/> */}
      {/* <ImageRevel/> */}
      {/* <Heropage/> */}
        <Trailer/>
    </div>
  )
}

export default Dashbaord
