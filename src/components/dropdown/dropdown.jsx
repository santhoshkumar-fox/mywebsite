import React, { useState } from 'react'
import Dropdowncom from 'react-dropdown';
import "./dropdown.css"
function Dropdown({addCalback}) {
    const options = [
        'one', 'two', 'three'
      ];
const defaultOption = options[0];
 const [selectedValue,setSelectedValue] = useState(null);

  return (

      <>
        <select className='selectorcon' value={selectedValue} placeholder='Choose something' onChange={(e)=>{setSelectedValue(null);addCalback(e.target.value)}}>
            <option className='optioncon'>hello</option>
            <option className='optioncon'>hi</option>
            <option className='optioncon'>val</option>
        </select>
      </>

  )
}

export default Dropdown
