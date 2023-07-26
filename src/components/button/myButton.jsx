import React from 'react'
import "./myButton.css"
function Mybutton({title,onclickCallback,containerStyle,loadingComponents,isLoading}) {
  return (
    <div onClick={onclickCallback} className='myButtonCon' style={{...containerStyle}}>
      {isLoading ? loadingComponents : <p>{title}</p>}
    </div>
  )
}

export default Mybutton
