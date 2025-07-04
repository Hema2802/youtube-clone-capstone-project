
import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Feed.css'
import {Link} from 'react-router-dom'
import SubTitleBar from "../SubTitleBar/SubTitleBar";
import SideBar from "../SideBar/SideBar";


function Feed({sideBar}){

            const [videos, setVideos] = useState([]);
            const [loading, setLoading] = useState(true);
            const [category, setCategory] = useState("All"); 

            useEffect(() => {
                const fetchVideos = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/videos");
                setVideos(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch videos:", err);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    // Filter videos based on selected category

    const filteredVideos = category === "All"
        ? videos
        : videos.filter(video => video.category === category);


    return(
        <>
        {/* ✅ Pass props to SubTitleBar */}
        <SubTitleBar category={category} setCategory={setCategory}/>
         <div className="feed" >
                {loading ? (
                    <p>Loading videos...</p>
                ) : (
                    filteredVideos.map(video => (
                        <Link
                            to={`/video/${video.categoryId}/${video._id}`}
                           
                            className={`card ${sideBar ? "wide-card" : "narrow-card"}`}
                            key={video._id}
                        >

                            <img src={video.thumbnailUrl} alt={video.title} />
                            <div className="align_card">
                               <div className="channel_logo">
                                <img src={video.logoUrl} alt="channel logo"/>
                               </div>

                              <div>
                               <h2>{video.title}</h2>
                               <h3>{video.uploader}<span className="tick-mark"> √ </span></h3>
                              <p>{video.views} views &bull; {video.period}</p>
                            </div>

                            </div>
                            
                            
                        </Link>
                    ))
                )}
            </div>
           
        
        </>
    )
}

export default Feed;
