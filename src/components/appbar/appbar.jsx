import React from 'react'
import "./appbar.css"
function Appbar() {
  return (
    <div className='appbarCon'>
      <p className='appTitle'>Title</p>
      <div className='appbarRightCon'>
      <StatusCard title={"Advances"} value={0} style={"cardActive"}/>
      <StatusCard title={"Declines"} value={0} style={"cardDeactive"}/>
      <StatusCard title={"Unchanged"} value={0} style={"cardUnchaned"}/>
      </div>
    </div>
  )
}
function StatusCard ({title,value,style}){
  return(
    <div className='statusCardCon'>
        <p className={`cardKey ${style}`}>{title}</p>
        <p className='cardvalue'>{value}</p>
    </div>
  )
}
export default Appbar
