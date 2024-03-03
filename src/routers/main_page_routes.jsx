import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth_page from '../screens/auth_page'
import Home_page from '../screens/home_page'
import Dashbaord from '../portfolio_screens/Dashboard/dashbaord'


function Page_routes() {
  return (
  // <Routes>
  //   <Route path='/' element={<Auth_page/>}/>
  //   <Route path='/dashboard' element={<Home_page/>}/>
  // </Routes>
  <Routes>
    <Route path='/' element={<Dashbaord/>}/>
  </Routes>
  
  )
}

export default Page_routes
