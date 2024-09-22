import React from "react"
import Navbar from "./components/Navbar"
import NewsPanel from "./components/NewsPanel"
import Subscribe from "./components/Subscribe"
import {Route, BrowserRouter, Routes} from 'react-router-dom'

function App() {

  return (
    <>
      {/* <Navbar />
      <NewsPanel /> */}

      <Routes>
        <Route path = '/' element = {<NewsPanel/>}/>
        <Route path = '/subscribe' element = {<Subscribe/>}/>
      </Routes>
    </>
  )
}

export default App
