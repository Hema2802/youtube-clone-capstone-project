import React, { useEffect, useState } from "react";
import './Recommended.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Recommended() {
    const { videoId } = useParams(); // Get the current video ID from the URL
    const [videos, setVideos] = useState([]);// All videos fetched from backend
    const [currentVideo, setCurrentVideo] = useState(null);  // The currently playing video

// the token is retrieved from local or session storage.
     useEffect(() => {
  const fetchVideos = async () => {
    try {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        console.warn("No token found. User might not be logged in.");
        return;
      }
// checked whether it starts with JWT
      const formattedToken = token.startsWith("JWT") ? token : `JWT ${token}`;
// Fetches all videos from the backend.
      const res = await axios.get("http://localhost:3000/api/videos", {
        headers: {
          Authorization: formattedToken,
        },
      });

      const current = await axios.get(`http://localhost:3000/api/videos/${videoId}`, {
        headers: {
          Authorization: formattedToken,
        },
      });

      setVideos(res.data);   // Stores all videos
      setCurrentVideo(current.data);  // Stores current video
    } catch (err) {
      console.error("Error fetching recommended videos", err);
    }
  };

  //  Call it here
  fetchVideos();  
}, [videoId]);


// Filters videos from the same category, excluding the current one
    const filteredVideos = videos.filter(
        (v) => v._id !== videoId && v.category === currentVideo?.category
    );
// Filters videos from different categories, also excluding the current one.
    const otherVideos = videos.filter(
        (v) => v._id !== videoId && v.category !== currentVideo?.category
    );

    return (
        <div className="recommended">
            <h3>Recommended Videos</h3>
            {/* Display Category-Matched Videos First */}
            {filteredVideos.map((video) => (
              // display side videos
                <Link to={`/video/${video.categoryId}/${video._id}`} className="side-video" key={video._id}>
                    <img src={video.thumbnailUrl} alt="side-video" />
                    <div className="video-info">
                        <h4>{video.title}</h4>
                        <p>{video.uploader}</p>
                        <p>{video.views} views &bull; {video.period}</p>
                    </div>
                </Link>
            ))}
{/* Then Display Videos from Other Categories */}
            {otherVideos.map((video) => (
                <Link to={`/video/${video.categoryId}/${video._id}`} className="side-video" key={video._id}>
                    <img src={video.thumbnailUrl} alt="side-video" />
                    <div className="video-info">
                        <h4>{video.title}</h4>
                        <p>{video.uploader}</p>
                        <p>{video.views} views &bull; {video.period}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
// final export
export default Recommended;
