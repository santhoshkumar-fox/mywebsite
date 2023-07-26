import React from 'react'
import "./Search.css"
import Dropdown from '../dropdown/dropdown'
function Search({value,setValue,addCalback}) {
  return (
    <div className="serachROwContainer">
       <Dropdown addCalback={addCalback}/>
      <input className='searchBox' placeholder='Search here' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
      <input style={{marginLeft:"20px"}} type="file" accept=".csv" onChange={()=>{}} />
    </div>
  )
}

export default Search
