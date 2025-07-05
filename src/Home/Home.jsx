import React, { useState } from "react";
import "./Home.css";
import SideBar from "../Components/SideBar/SideBar";
import Feed from "../Components/Feed/Feed";

function Home({sideBar, searchTerm, setSearchTerm, searchTriggered, setSearchTriggered }){

    const [category,setCategory] = useState("All");

     
    return (
        <>
            <SideBar 
                    sideBar={sideBar} 
                    category={category} 
                    setCategory={setCategory} 
                    setSearchTerm={setSearchTerm}
                    setSearchTriggered={setSearchTriggered}
                    
                    />
            {/* dynamic className */}
            <div className={`container ${sideBar? "" : "large-container"}`}>
                 {/* mounted feed component */}
                 <Feed 
                      category={category} 
                      setCategory={setCategory}
                      sideBar={sideBar} 
                      searchTerm={searchTerm}
                      searchTriggered={searchTriggered} 
                />
            </div>
        
        </>
    )
}


export default Home;
