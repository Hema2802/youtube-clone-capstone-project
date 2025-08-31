import React, { useEffect, useState } from "react"; // React & Hooks
import axios from "axios"; // For API requests
import './Feed.css';
import { Link } from "react-router-dom"; // For routing to video pages
import SubTitleBar from "../SubTitleBar/SubTitleBar"; // Category navigation bar

function Feed({ sideBar, searchTerm, searchTriggered }) {
    const [videos, setVideos] = useState([]); // All videos fetched from API
    const [loading, setLoading] = useState(true);  // UI loading state
    const [category, setCategory] = useState("All");  // Selected category
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Login status

    //  Check login status once when component mounts
    useEffect(() => {
  const checkLogin = () => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  };
 // Listen to changes in login status
  window.addEventListener("storage", checkLogin);
  checkLogin();

  return () => window.removeEventListener("storage", checkLogin);
}, []);


    //  Fetch videos only when user is logged in
    useEffect(() => {
        const fetchVideos = async () => {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");

            console.log(" token:", token); // Check if token exists
    console.log("isLoggedIn:", isLoggedIn); //  Confirm login state


            if (!token) {
                console.warn("No token found in storage");
                return;
            }

            try {
                const res = await axios.get("http://localhost:5000/api/videos", {
                    headers: {
                        Authorization: `JWT ${token}` // match your backend
                    }
                });
                setVideos(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch videos:", err);
                setLoading(false);
            }
        };

        if (isLoggedIn) {
            fetchVideos();
        }
    }, [isLoggedIn]); // Re-run only if login state changes

    // Filter videos by search or category
    const filteredVideos = videos.filter((video) => {
        if (searchTriggered && searchTerm.trim() !== "") {
            const lowerSearch = searchTerm.toLowerCase();
            return (
                video.title.toLowerCase().includes(lowerSearch) ||
                video.uploader.toLowerCase().includes(lowerSearch)
            );
        }

        return category === "All" || video.category === category;
    });

    return (
        <>

        {/* Handles both search and category filter */}
            {/* Pass category props to SubTitleBar */}
            <SubTitleBar category={category} setCategory={setCategory} />

            <div className="feed">
                {!isLoggedIn ? (
                    <div className="login-warning">
                        <h2>Welcome To My Youtube</h2>
                        <p>🔒 To access our exclusive video content, please sign in to your account.</p>
                    </div>

                    // Displays while waiting for data
                ) : loading ? (
                    <p>Loading videos...</p>
                ) : (
                    filteredVideos.map((video) => (
                        <Link
                            to={`/video/${video.categoryId}/${video._id}`}
                            className={`card ${sideBar ? "wide-card" : "narrow-card"}`}
                            key={video._id}
                        >
                            <img src={video.thumbnailUrl} alt={video.title} />
                            <div className="align_card">
                                <div className="channel_logo">
                                    <img src={video.logoUrl} alt="channel logo" />
                                </div>
                                <div>
                                    <h2>{video.title}</h2>
                                    <h3>
                                        {video.uploader}
                                        <span className="tick-mark"> √ </span>
                                    </h3>
                                    <p>{video.views} views &bull; {video.period}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
// final export
export default Feed;
