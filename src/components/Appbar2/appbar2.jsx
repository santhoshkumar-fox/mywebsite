import React from 'react'
import './appbar2css.css'
function Appbar2() {
  return (
    <div className='appbar2con'>
      <div className='flexCenter app_left_container'>
        <h1 className='headline02 headCon'>SK</h1>
      </div>
      <div className='flexCenter app_right_container'>
        <h3 className='label01 labelCon'>{new Date().getFullYear()}</h3>
      </div>
    </div>
  )
}

export default Appbar2
