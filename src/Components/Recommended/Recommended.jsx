import React, { useEffect, useState } from "react";
import './Recommended.css';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Recommended() {
    const { videoId } = useParams(); // get current playing video ID
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/videos");
                setVideos(res.data);

                const current = await axios.get(`http://localhost:3000/api/videos/${videoId}`);
                setCurrentVideo(current.data);
            } catch (err) {
                console.error("Error fetching recommended videos", err);
            }
        };

        fetchVideos();
    }, [videoId]);

    const filteredVideos = videos.filter(
        (v) => v._id !== videoId && v.category === currentVideo?.category
    );

    const otherVideos = videos.filter(
        (v) => v._id !== videoId && v.category !== currentVideo?.category
    );

    return (
        <div className="recommended">
            <h3>Recommended Videos</h3>
            {filteredVideos.map((video) => (
                <Link to={`/video/${video.categoryId}/${video._id}`} className="side-video" key={video._id}>
                    <img src={video.thumbnailUrl} alt="side-video" />
                    <div className="video-info">
                        <h4>{video.title}</h4>
                        <p>{video.uploader}</p>
                        <p>{video.views} views &bull; {video.period}</p>
                    </div>
                </Link>
            ))}

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

export default Recommended;
