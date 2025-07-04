
import React from "react";
import "./NavBar.css";
import menu from '../../assets/menu.png'
import search_icon from '../../assets/search_icon.png'
import mic_icon from '../../assets/mic_icon.png'
import bell_gif from '../../assets/bell_gif.gif'
import profile_icon from '../../assets/profile_icon.png'
import SignIn from "../SignIn/SignIn";
import { useState } from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import { useEffect } from "react";


function NavBar({setSideBar}){
    const [showSignIn, setShowSignIn] = useState(false);
     const [showCreateAccount, setShowCreateAccount] = useState(false);
     const [userInitial, setUserInitial] = useState("");
    
     useEffect(() => {
  const fullName = localStorage.getItem("userFullName");
  const email = localStorage.getItem("userEmail");

  if (fullName && fullName.trim().length > 0) {
    const nameParts = fullName.trim().split(" ");
    let initials = nameParts[0].charAt(0).toUpperCase();

    if (nameParts.length > 1) {
      initials += nameParts[1].charAt(0).toUpperCase();
    }

    setUserInitial(initials);
  } else if (email && email.trim().length > 0) {
    setUserInitial(email.trim().charAt(0).toUpperCase());
  }
}, []);

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
                  <button style={{ display: "flex",justifyContent:"center" , gap: "5px", }}> ╋ Create <img style={{ width: "20px", height: "20px" }} src='https://img.icons8.com/?size=100&id=9V80N2KhEcOh&format=png&color=000000'/> </button>
                  
                  <div className="notification-bell">
                       <img src={bell_gif} alt="notification bell" />
                       {notificationCount > 0 && (
                           <span className="notification-badge">{notificationCount}+</span>
                        )}
                  </div>
                  

                  {userInitial ? (
                    <div className="user-initial-circle">{userInitial}</div> 
                ) : (
                    // 
                    <button className="signin-btn" onClick={() => setShowSignIn(true)}>Sign In</button>
                )}
                  

             </div>


            </nav>

                  {showSignIn && (
        <SignIn
          onClose={() => setShowSignIn(false)}
          onRegister={() => {
            setShowSignIn(false);        // hide SignIn
            setShowCreateAccount(true);  // show CreateAccount
          }}
        />
      )}

      {showCreateAccount && (
        <CreateAccount onClose={() => setShowCreateAccount(false)} 
        onLogin={() => {
            setShowCreateAccount(false);  // Close CreateAccount
            setShowSignIn(true);         // Show SignIn again
          }}
          
          />
      )}
        
        </>
    )
}


export default NavBar;