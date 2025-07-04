
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
import history from '../../assets/history.png'
import playlist from '../../assets/playlist.png'
import play from '../../assets/play.png'
import like from '../../assets/like.png'
import shopping from '../../assets/shopping.png'
import trophy from '../../assets/trophy.png'
import podcast from '../../assets/podcast.png'
import trending from '../../assets/trending.png'
import shop from '../../assets/shop.png'
import settings from '../../assets/settings.png'



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

            </div>
                <hr/>
            
            
            <div className="sortcut-links"><br/>
               <h3>You ≫</h3><br/>

               <div className="side-links">
                    <img src={history} alt="clock icon "/> <p>History</p>
                </div>

                <div className="side-links">
                    <img src={playlist} alt="playlist icon "/> <p>Playlists</p>
                </div>

                <div className="side-links">
                    <img src={play} alt="play icon "/> <p>Your Videos</p>
                </div>

                <div className="side-links">
                    <img src={like} alt="like icon "/> <p>Liked Videos</p>
                </div>
                
                <div className="side-links">
                    <img src={download} alt="download icon "/> <p>Downloads</p>
                </div>

               
            </div>

            <hr/>

            <div className="sortcut-links"><br/>
                <h3>Explore ≫</h3><br/>
                <div className="side-links">
                    <img src={trending} alt="trend icon "/> <p>Trending</p>
                </div>

                <div className="side-links">
                    <img src={yt_kids} alt="kids icon "/> <p>Kids</p>
                </div>

                <div className="side-links">
                    <img src={yt_live} alt="live icon "/> <p>Live</p>
                </div>

                <div className="side-links">
                    <img src={shopping} alt="shopping icon "/> <p>Shopping</p>
                </div> 

                <div className="side-links">
                    <img src={trophy} alt="trophy icon "/> <p>Sports</p>
                </div>
                
                <div className="side-links">
                    <img src={shop} alt="shop icon "/> <p> Fashion</p>
                </div> 

                 <div className="side-links">
                    <img src={podcast} alt="podcast icon "/> <p>Podcast</p>
                </div>


            </div>

            <hr/>
            <br/>

            <div className="sortcut-links">
                <h3>Subscriptions ≫ </h3><br/>

                <div className="side-links">
                    <img style={{width:" 35px ", height:"35px"   ,borderRadius:"50%"}}  src="https://clothsvilla.com/cdn/shop/files/ElegantWomen_sSoftKotaSilkPrintedSareewithWeavingPattuBorder_3_1024x1024.jpg?v=1693809841" alt="women "/> <p>AJ Vlogs</p>
                </div>

                <div className="side-links">
                    <img style={{width:" 35px ", height:"35px"   ,borderRadius:"50%"}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BEjhIV-Kg6OHM-Er5DTAwJJqPJz8yVcktg&s" alt="men "/> <p>Balachandra</p>
                </div>

                 <div className="side-links">
                    <img style={{width:" 35px ", height:"35px"   ,borderRadius:"50%"}}  src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg" alt="men "/> <p>TN Govt</p>
                </div>

                <div className="side-links">
                    <img style={{width:" 35px ", height:"35px"   ,borderRadius:"50%"}}  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPC9UReXsKTofc9n7aBUiVy--OFRzs74z1pQ&s" alt="code "/> <p>Coding Lab</p>
                </div>


            </div>

            <hr/>
            <br/>

            <div className="sortcut-links">
                <div className="side-links">
                    <img src={settings}   alt="settings"/> <p>Settings</p>
                </div>

                <div className="side-links">
                    <img src="https://img.icons8.com/?size=100&id=2754&format=png&color=000000"   alt="flag"/> <p>Report</p>
                </div>

                <div className="side-links">
                    <img src="https://img.icons8.com/?size=100&id=m6LOI6xyPr4s&format=png&color=000000"   alt="help"/> <p>Help</p>
                </div>

                <div className="side-links">
                    <img src="https://img.icons8.com/?size=100&id=vHx1vWgU6OQc&format=png&color=000000"   alt="feedback"/> <p>Feedback</p>
                </div>
            </div>
       
        
          </div>
        
        </>
    )
}

export default SideBar;