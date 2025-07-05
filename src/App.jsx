
import './App.css'
import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Video from './Videos/Video.jsx'
import { useState } from 'react';


function App() {
  
const [sideBar,setSideBar] = useState(true);
const [searchTerm, setSearchTerm] = useState("");
const [searchTriggered, setSearchTriggered] = useState(false);
  return (
    <>
      <NavBar 
            setSideBar={setSideBar}  
            setSearchTerm={setSearchTerm}
            setSearchTriggered={setSearchTriggered}
      />

      <Routes>
            <Route path="/" element={
                <Home 
                     sideBar={sideBar} 
                     searchTerm={searchTerm} 
                     setSearchTerm={setSearchTerm}
                     searchTriggered={searchTriggered}
                     setSearchTriggered={setSearchTriggered}
                     
                     
                     />}  />


            <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App;


