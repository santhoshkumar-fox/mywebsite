import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth_page from '../screens/auth_page'
import Home_page from '../screens/home_page'


function Page_routes() {
  return (
  <Routes>
    <Route path='/' element={<Auth_page/>}/>
    <Route path='/dashboard' element={<Home_page/>}/>
  </Routes>
  
  )
}

export default Page_routes
