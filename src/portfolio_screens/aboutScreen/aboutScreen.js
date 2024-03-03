import React from 'react'
import "./aboutScreen.css"
import RedTape from '../../components/redTape/RedTape'

function AboutScreen() {
const onMouseEnter = ()=>{
    const mouse_pointer_el = document.querySelectorAll('.mousePointer')
    mouse_pointer_el.forEach((el)=>{
        el.style.transform = `scale(3)`
        // el.style.transition = `all 300ms ease`
    })
}
const onMouseLeave = ()=>{
    const mouse_pointer_el = document.querySelectorAll('.mousePointer')
    mouse_pointer_el.forEach((el)=>{
        el.style.transform = `scale(1)`
        // el.style.transition = `all 300ms`
    })
}
  return (
    <div className='aboutScreenContainer'>

      <RedTape title='SKILLS'/> 
    </div>
  )
}

export default AboutScreen
