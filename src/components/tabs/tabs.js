import React from 'react'
import "./tabs.css"
function Tabs({filterDataList,setFilterDataList,selectedDataData,setSelectedData}) {

 const removeItemOnce = (arr, value)=>{
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }
  const onSubmitCallback = (title,index)=>{
     
     setSelectedData(title);
  }
  const onCancelCallback = (title,index)=>{
    const array_result = removeItemOnce(filterDataList,title);
    setFilterDataList(()=>{return[...array_result]});
  }

  return (
    <div className='tabscon'>
     {filterDataList.map((e,i)=>{
        return(
            <TabCards title={e} index={i} choosed={selectedDataData == e} onSubmitCallback={onSubmitCallback} onCancelCallback={onCancelCallback}/>
        )
     })}
    </div>
  )
}

function TabCards({title,index,onCancelCallback,onSubmitCallback,choosed}){
    return(
        <div onClick={()=>{onSubmitCallback(title,index)}} className={`tabCardCon ${choosed ? "tabchoosed" : ''}`}>
          <p className='cardTitleCon'>{title}</p>
          <i onClick={(e)=>{e.stopPropagation();onCancelCallback(title,index)}} class="uil uil-times"></i>
        </div>
    )
}

export default Tabs
