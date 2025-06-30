
import React from "react";
import "./NavBar.css";
import menu from '../../assets/menu.png'
import search_icon from '../../assets/search_icon.png'
import mic_icon from '../../assets/mic_icon.png'
import bell_gif from '../../assets/bell_gif.gif'
import profile_icon from '../../assets/profile_icon.png'


function NavBar({setSideBar}){
    const notificationCount=24;
    return(
        <>
            <nav className="flex-div">
            {/* left side  */}
                <div className="nav-left flex-div">
                     <img src={menu} alt="menu-icon" className="menu-icon" onClick={()=>setSideBar(prev=>prev===false?true:false)}/>
                     <img className="yt_logo" src="https://logowik.com/content/uploads/images/youtube-premium8029.logowik.com.webp" alt="youtube-icon" />
                </div>
             
             {/* middle portion */}

             <div className="middle_part flex-div">
                <div className="search-box">
                     <input type="text" placeholder="Search"/>
                     <img className="search-icon" src={search_icon} alt="search icon"/>

                </div>
                
                <img className="mic-logo"  src={mic_icon} alt="mic icon" />
             </div>

             {/*right part  */}

             <div className="nav-right flex-div">
                  <button>╋ Create </button>
                  
                  <div className="notification-bell">
                       <img src={bell_gif} alt="notification bell" />
                       {notificationCount > 0 && (
                           <span className="notification-badge">{notificationCount}+</span>
                        )}
                  </div>
                  <button className="signin-btn">Sign In</button>
                  <img src={profile_icon} alt="profile logo"/>

             </div>


            </nav>

           
        
        </>
    )
}


export default NavBar;