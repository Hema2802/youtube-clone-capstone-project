import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // for detect id
import './PlayVideo.css';
import axios from "axios"; // securely fetch video data from your backend
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save_icon from '../../assets/save_icon.png';
import women_profile from '../../assets/women_profile.png';
import common_profile from '../../assets/common_profile.png';
import edit_icon from '../../assets/edit_icon.png';
import delete_icon from '../../assets/delete_icon.png';
import Recommended from "../Recommended/Recommended.jsx";
import SideBar from "../SideBar/SideBar.jsx";

function PlayVideo({ sideBar, setSideBar }) {
    const { videoId } = useParams();  // Get videoId from URL
    const [video, setVideo] = useState(null);   // Holds video details
    const [comments, setComments] = useState([]); // Comments array
    const [newComment, setNewComment] = useState(""); // New comment text
    const [newName, setNewName] = useState(""); // New commenter name
    const [editingId, setEditingId] = useState(null); // Currently editing comment ID
    const [editedText, setEditedText] = useState(""); // Updated comment text

//    token-based authorization to protect the video route
useEffect(() => {
  const fetchVideo = async () => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");


    if (!token) {
      console.warn("No token found.");
      return;
    }

    if (!videoId) {
      console.warn("No videoId in URL.");
      return;
    }

    try {
      const res = await axios.get(`https://youtube-clone-capstone-project-backend-14.onrender.com/api/videos/${videoId}`, {
        headers: {
          Authorization: `JWT ${token}`, // ✅ FIXED
        },
      });

      setVideo(res.data);
      setComments(res.data.comments || []);
    } catch (err) {
      console.error("Failed to load video", err);
    }
  };

  fetchVideo();
}, [videoId]);


if (!video) {
    return <div style={{ padding: "20px", color: "red" }}>Video not found or still loading...</div>;
}

// Adds a comment at the top of the list, with a dummy timestamp and ID
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
// Enables inline editing of comments. Cancels automatically if save is pressed.
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
// loading visibility
    if (!video) {
        return <div>Loading video...</div>;
    }
    
    return (
<>
        {sideBar && (
        <SideBar sideBar={sideBar} setSideBar={setSideBar}  category={"All"} setCategory={() => {}} />
      )}
        <div className="playVideo">
           
            {/* playing video */}
            <video src={video.videoUrl} controls autoPlay muted className="video" />
            <h3>{video.title}</h3>

            <div className="play-video-info">
                <p>{video.views} Views &bull; {video.period}</p>
                <div>
                    {/* like,dislike,share and save icons */}
                    <span><img src={like} alt="like icon" /> {video.likes} </span>
                    <span><img src={dislike} alt="dislike icon" /> {video.dislikes} </span>
                    <span><img src={share} alt="share icon" /> Share </span>
                    <span><img src={save_icon} alt="save icon" /> Save </span>
                </div>
            </div>

            <hr/>
{/* channel details */}
            <div className="publisher">
                <img src={video.logoUrl} alt="channel" />
                <div>
                    <p>{video.uploader}</p>
                    <span className="subs_count">{video.subscription} Subscribers</span>
                </div>
                {/* subscribe button */}
                <button>Subscribe</button>
            </div>

            <div className="video-desc">
                <div className="disc-box">
                    <p>{video.description}</p>
                    <p> Kindly do subscribe to watch more.</p>
                </div>
                <h4>{comments.length} comments</h4>
            </div>
{/* comment section */}
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
{/* display all comments */}
            {comments.map((comment,index) => (
                <div className="comment" key={`comment-${comment.id || index}`}>
                    <img src={common_profile} alt="user_profile" />
                    <div>
                        <h3>{comment.username || comment.name} <span>{comment.timestamp || comment.time}</span></h3>
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
        </>
    );
}
// final export
export default PlayVideo;

