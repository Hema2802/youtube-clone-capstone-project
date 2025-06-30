
import React, { useState } from "react";
import "./Home.css";
import SideBar from "../Components/SideBar/SideBar";
import Feed from "../Components/Feed/Feed";

function Home({sideBar}){
    const [category,setCategory] = useState("All");
    return (
        <>
            <SideBar sideBar={sideBar} category={category} setCategory={setCategory}/>
            {/* dynamic className */}
            <div className={`container ${sideBar?"" : "large-container"}`}>
                 {/* mounted feed component */}
                 <Feed category={category}/>
            </div>
        
        </>
    )
}


export default Home;