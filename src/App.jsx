
import './App.css'
import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Video from './Videos/Video.jsx'
import { useState } from 'react';


function App() {
  
const [sideBar,setSideBar] = useState(true);
  return (
    <>
      <NavBar setSideBar={setSideBar}/>

      <Routes>
            <Route path="/" element={<Home sideBar={sideBar}/>}  />
            <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App;


