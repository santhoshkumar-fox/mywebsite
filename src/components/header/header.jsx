import React, { useEffect, useState } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
function Header() {
  const [path,setPath] = useState("");
  useEffect(()=>{
  // path = 
  setPath(window.location.pathname)
  },[window])
  return (
   <div className="headerContainer">
    <a href="/" className="headerLeft headline01">Santhosh Kumar Vellingiri</a>
    <nav className="menulist">
      
      <a href="/" className={path === "/" ?"navButton label01 active" : "navButton label01"}>Home</a>
     
      <a href="/about" className={path === "/about" ?"navButton label01 active" : "navButton label01"}>About</a>
      
      <a href="/profile" className={path === "/profile" ?"navButton label01 active" : "navButton label01"}>Profile</a>
      
      <a href="/works" className={path === "/works" ?"navButton label01 active" : "navButton label01"}>Works</a>
    </nav>
   </div>
  )
}

export default Header
