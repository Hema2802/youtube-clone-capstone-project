import React, { useState, useEffect } from "react";
import "./NavBar.css";
import menu from "../../assets/menu.png";
import search_icon from "../../assets/search_icon.png";
import mic_icon from "../../assets/mic_icon.png";
import bell_gif from "../../assets/bell_gif.gif";
import profile_icon from "../../assets/profile_icon.png";
import SignIn from "../SignIn/SignIn";
import CreateAccount from "../CreateAccount/CreateAccount";
import { useNavigate} from 'react-router-dom'

function NavBar({ setSideBar, setSearchTerm, setSearchTriggered }) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [searchInput, setSearchInput] = useState("");
   const navigate = useNavigate();

  // Function to update initials
  const updateUserInitial = () => {
    const fullName = localStorage.getItem("userFullName");
    const email = localStorage.getItem("userEmail");

    if (fullName && fullName.trim().length > 0) {
      const parts = fullName.trim().split(" ");
      let initials = parts[0].charAt(0).toUpperCase();
      if (parts.length > 1) initials += parts[1].charAt(0).toUpperCase();
      setUserInitial(initials);
    } else if (email && email.trim().length > 0) {
      setUserInitial(email.charAt(0).toUpperCase());
    } else {
      setUserInitial("");
    }
  };

  //  On load or after login modal
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    updateUserInitial();
  }, [showSignIn]);

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserInitial("");
  };

  const notificationCount = 24;

  return (
    <>
      <nav className="flex-div">
        {/* Left */}
        <div className="nav-left flex-div">
          <img
            src={menu}
            alt="menu-icon"
            className="menu-icon"
            onClick={() => setSideBar((prev) => !prev)}
          />
          <img
            className="yt_logo"
            src="https://logowik.com/content/uploads/images/youtube-premium8029.logowik.com.webp"
            alt="youtube-icon"
          />
        </div>

        {/* Middle */}
        <div className="middle_part flex-div">
          <div className="search-box">

            <input 
                   type="text" 
                   placeholder="Search" 
                   value={searchInput}
                   onChange={(e) => setSearchInput(e.target.value)}
            />

            <img 
                 className="search-icon" 
                 src={search_icon} 
                 alt="search" 
                 onClick={() => {
                                setSearchTerm(searchInput);
                                setSearchTriggered(true);
               }} />

          </div>
          <img className="mic-logo" src={mic_icon} alt="mic" />
        </div>

        {/* Right */}
        <div className="nav-right flex-div">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}

            onClick={() => navigate("/create-channel")}
          >
            ╋ Create
            <img
              style={{ width: "20px", height: "20px" }}
              src="https://img.icons8.com/?size=100&id=11402&format=png&color=000000"
              alt="plus"
            />
          </button>

          <div className="notification-bell">
            <img src={bell_gif} alt="notification bell" />
            {notificationCount > 0 && (
              <span className="notification-badge">{notificationCount}+</span>
            )}
          </div>

          {/* SignIn / SignOut Toggle */}
          {isLoggedIn ? (
            <button className="signin-btn" onClick={handleLogout}>
              Sign Out
            </button>
          ) : (
            <button className="signin-btn" onClick={() => setShowSignIn(true)}>
              Sign In
            </button>
          )}

          {/* User Initials or Default Icon */}
          {userInitial ? (
            <div className="user-initial-circle">{userInitial}</div>
          ) : (
            <div >
              <img style={{width:"35px",height:"35px"}}
                src="https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000"
                alt="user"
              />
            </div>
          )}
        </div>
      </nav>

      {/* SignIn Modal */}
      {showSignIn && (
        <SignIn
          onClose={() => {
            setShowSignIn(false);
            setIsLoggedIn(true);
            updateUserInitial();
          }}
          onRegister={() => {
            setShowSignIn(false);
            setShowCreateAccount(true);
          }}
        />
      )}

      {/* Create Account Modal */}
      {showCreateAccount && (
        <CreateAccount
          onClose={() => setShowCreateAccount(false)}
          onLogin={() => {
            setShowCreateAccount(false);
            setShowSignIn(true);
          }}
        />
      )}
    </>
  );
}

export default NavBar;
