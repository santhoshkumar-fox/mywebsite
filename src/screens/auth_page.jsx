import React, { useEffect, useState } from 'react'
import Mybutton from '../components/button/myButton'
import {TailSpin} from "react-loader-spinner"
import {signInWithEmailAndPassword} from "firebase/auth"
import MyInputBox from '../components/inputbox/myInputBox'
import "./auth_page.css"
import { auth, db } from '../configs/firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { addDoc, collection, getDocs } from 'firebase/firestore'
function Auth_page() {
  const [userData,setUserData] = useState({});
  const [isloading,setisLoading] = useState(false);
  const navigation = useNavigate()

  const userDataChangeCallback = (title,value)=>{
    setUserData((e)=>{
      return({...e,[title]:value})
    })
  }
  const onSubmitCallback = async(userData)=>{
    try{
     
      setisLoading(true)
      const value =  await signInWithEmailAndPassword(auth,userData?.email,userData.password)
      console.log("🔽",value.operationType);
      if(value.operationType === "signIn"){
        setisLoading(false)
       navigation('/dashboard')
      }else{
      setisLoading(false)
       alert("login Failed");
      }
    }
    catch(e){
      setisLoading(false)
      alert("login Failed",e);
    }
  }
  


  // firestore user data

const getDatafromFireStore = async(db,collectrionName)=>{
    try {
      const data = await getDocs(collection(db,collectrionName))
      console.log("✅ data",data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      })));
    } catch (error) {
      console.log(error," ❌error")
    }
}

const postDataToFirebase = async(db,collectionName)=>{
  try {
    const postData = await addDoc(collection(db,collectionName),{movie_nam:'santhosh',movie_type:'sci-fi',movie_notes:"nothing to show"})
    console.log("🛳️POST DATA",postData);
  } catch (error) {
    console.log("❌ post",error)
  }
}
useEffect(()=>{
  getDatafromFireStore(db,'movies')
},[])


  return (
    <div className='PageContainer'>
    
     <div className='logincardCon'>
     <h1 style={{margin:"10px"}}>Login</h1>
     <div style={{margin:"10px"}}>
     <MyInputBox title={"Email"} placeholderText={"Email"} onchageCallback={(value)=>{userDataChangeCallback('email',value)}} type={"text"} containerStyle={{marginTop:'10px'}}/>
     <MyInputBox title={"Email"} placeholderText={"Password"} onchageCallback={(value)=>{userDataChangeCallback('password',value)}} type={"text"} containerStyle={{marginTop:'10px'}}/>
     </div>
     <Mybutton title={"LOGIN"} onclickCallback={()=>{onSubmitCallback(userData)}} containerStyle={{marginTop:'10px'}} loadingComponents={<TailSpin
    height="25"
    width="25"
    color="white"
    ariaLabel="tail-spin-loading"
    radius="1"
    visible={true}
/>} isLoading={isloading}/>
     </div>
    </div>
  )
}

export default Auth_page
