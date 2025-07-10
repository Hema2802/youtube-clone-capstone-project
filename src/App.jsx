
import './App.css'
import React from 'react'
import NavBar from './Components/NavBar/NavBar.jsx'
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx'
import Video from './Videos/Video.jsx'
import { useState } from 'react';
import CreateChannel from './Components/CreateChannel/CreateChannel.jsx';
import ChannelPage from './Components/ChannelPage/ChannelPage.jsx';




function App() {
  
const [sideBar,setSideBar] = useState(true);  //Controls the visibility of the sidebar (true = visible)
const [searchTerm, setSearchTerm] = useState("");   //Stores the current search input.
const [searchTriggered, setSearchTriggered] = useState(false); //whether a search was actually triggered
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


            <Route path="/video/:categoryId/:videoId" element={<Video  sideBar={sideBar} setSideBar={setSideBar}/>}/>

            <Route path="/create-channel" element={<CreateChannel />} />

            <Route path="/channel" element={<ChannelPage />} />
      </Routes>
    </>
  )
}
// export part
export default App;


