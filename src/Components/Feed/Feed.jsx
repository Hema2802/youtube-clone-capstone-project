
import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Feed.css'
import {Link} from 'react-router-dom'
import SubTitleBar from "../SubTitleBar/SubTitleBar";


function Feed({category}){

            const [videos, setVideos] = useState([]);
            const [loading, setLoading] = useState(true);

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

    const filteredVideos = category === "All"
        ? videos
        : videos.filter(video => video.category === category);


    return(
        <>
        <SubTitleBar/>
         <div className="feed">
                {loading ? (
                    <p>Loading videos...</p>
                ) : (
                    filteredVideos.map(video => (
                        <Link
                            to={`/video/${video.category}/${video._id}`}
                            className="card"
                            key={video._id}
                        >
                            <img src={video.thumbnailUrl} alt={video.title} />
                            <h2>{video.title}</h2>
                            <h3>{video.uploader}</h3>
                            <p>{video.views} views &bull; {video.period}</p>
                        </Link>
                    ))
                )}
            </div>
           
        
        </>
    )
}

export default Feed;