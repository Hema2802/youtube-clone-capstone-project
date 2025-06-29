
import React from "react";
import './SideBar.css'
import home_icon from '../../assets/home_icon.png'
import yt_shorts from '../../assets/yt_shorts.png'
import subscription_icon from '../../assets/subscription_icon.png'
import youtube_music from '../../assets/youtube_music.png'
import download from '../../assets/download.png'
import yt_profile from '../../assets/yt_profile.png'
import yt_kids from '../../assets/yt_kids.png'
import yt_live from '../../assets/yt_live.png'


function SideBar({sideBar}){
    return(
        <>
          <div className={`sideBar ${sideBar? "": "small-sidebar"}`}>
            <div className="sortcut-links">
                <div className="side-links">
                    <img src={home_icon} alt="Home icon "/> <p>Home</p>
                </div>

                <div className="side-links">
                    <img src={yt_shorts} alt="Home icon "/> <p>Shorts</p>
                </div>

                <div className="side-links">
                    <img src={subscription_icon} alt="Home icon "/> <p>Subscription</p>
                </div>

                <div className="side-links">
                    <img src={youtube_music} alt="Home icon "/> <p>YT Music</p>
                </div>

                <div className="side-links">
                    <img src={yt_kids} alt="Home icon "/> <p>Kids</p>
                </div>

                <div className="side-links">
                    <img src={yt_live} alt="Home icon "/> <p>Live</p>
                </div>

                <div className="side-links">
                    <img src={yt_profile} alt="Home icon "/> <p>You</p>
                </div> 

                <div className="side-links">
                    <img src={download} alt="Home icon "/> <p>Downloads</p>
                </div>
            </div>
          </div>
        
        </>
    )
}

export default SideBar;