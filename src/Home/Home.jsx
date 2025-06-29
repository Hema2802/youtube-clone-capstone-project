
import React from "react";
import "./Home.css";
import SideBar from "../Components/SideBar/SideBar";
import Feed from "../Components/Feed/Feed";

function Home({sideBar}){
    return (
        <>
            <SideBar sideBar={sideBar}/>
            {/* dynamic className */}
            <div className={`container ${sideBar?"" : "large-container"}`}>
                 {/* mounted feed component */}
                 <Feed/>
            </div>
        
        </>
    )
}


export default Home;