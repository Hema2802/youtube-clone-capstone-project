import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PlayVideo.css';
import axios from "axios";

import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save_icon from '../../assets/save_icon.png';
import women_profile from '../../assets/women_profile.png';
import common_profile from '../../assets/common_profile.png';
import edit_icon from '../../assets/edit_icon.png';
import delete_icon from '../../assets/delete_icon.png';

function PlayVideo() {
    const { videoId } = useParams();  // Get videoId from URL
    const [video, setVideo] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [newName, setNewName] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState("");

    useEffect(() => {
        // Fetch video details
        const fetchVideo = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/videos/${videoId}`);
                setVideo(res.data);
                setComments(res.data.comments || []); // assuming your video has a 'comments' array
            } catch (err) {
                console.error("Failed to load video", err);
            }
        };
        fetchVideo();
    }, [videoId]);

    const addComment = () => {
        if (!newName.trim() || !newComment.trim()) return;
        const newComm = {
            id: Date.now(),
            name: newName,
            time: "Just now",
            text: newComment,
            likes: 0
        };
        setComments([newComm, ...comments]);
        setNewComment("");
        setNewName("");
    };

    const deleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    const editComment = (id) => {
        const toEdit = comments.find(c => c.id === id);
        setEditingId(id);
        setEditedText(toEdit.text);
    };

    const saveEditedComment = () => {
        setComments(comments.map(comment => {
            if (comment.id === editingId) {
                return { ...comment, text: editedText };
            }
            return comment;
        }));
        setEditingId(null);
        setEditedText("");
    };

    if (!video) return <div>Loading video...</div>;

    return (
        <div className="playVideo">
            <video src={video.videoUrl} controls autoPlay muted className="video" />
            <h3>{video.title}</h3>

            <div className="play-video-info">
                <p>{video.views} Views &bull; {video.period}</p>
                <div>
                    <span><img src={like} alt="like icon" /> {video.likes} </span>
                    <span><img src={dislike} alt="dislike icon" /> {video.dislikes} </span>
                    <span><img src={share} alt="share icon" /> Share </span>
                    <span><img src={save_icon} alt="save icon" /> Save </span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={video.logoUrl} alt="channel" />
                <div>
                    <p>{video.uploader}</p>
                    <span className="subs_count">{video.subscription} Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="video-desc">
                <div className="disc-box">
                    <p>{video.description}</p>
                    <p> Kindly do subscribe to watch more.</p>
                </div>
                <h4>{comments.length} comments</h4>
            </div>

            <div className="add-comment">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={addComment}>Post</button>
            </div><br />
            <hr />

            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={common_profile} alt="user_profile" />
                    <div>
                        <h3>{comment.username} <span>{comment.timestamp}</span></h3>
                        {editingId === comment.id ? (
                            <div className="textarea">
                                <textarea className="editText"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                                <button className="editedTextSave" onClick={saveEditedComment}>Save ✔</button>
                            </div>
                        ) : (
                            <p>{comment.text}</p>
                        )}

                        <div className="comment_action">
                            <img src={like} alt="like icon" />
                            <span>{comment.likes}</span>
                            <img src={dislike} alt="dislike icon" />
                        </div>

                        <div className="comment-options">
                            <button onClick={() => editComment(comment.id)}>
                                <img src={edit_icon} alt="Edit" />
                            </button>
                            <button onClick={() => deleteComment(comment.id)}>
                                <img src={delete_icon} alt="Delete" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlayVideo;

