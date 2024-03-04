import React from 'react'
import "./App.css"
import Home_page from "./screens/home_page"
import Screens from './screens'
import { BrowserRouter } from 'react-router-dom'
import Dashbord from './routers/main_page_routes'
import Page_routes from './routers/main_page_routes'
import Dashbaord from './portfolio_screens/Dashboard/dashbaord'
function App() {
  return (
  //  <BrowserRouter>
  //  <Page_routes/>
  //  </BrowserRouter>
  <Dashbaord/>
  )
}

export default App
