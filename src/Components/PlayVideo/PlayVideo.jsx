import React, { useState } from "react";
import './PlayVideo.css';
import video1 from '../../assets/video1.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save_icon from '../../assets/save_icon.png';
import women_profile from '../../assets/women_profile.png';
import common_profile from '../../assets/common_profile.png';

function PlayVideo() {
    const [comments, setComments] = useState([
        { id: 1, name: "Jennifer", time: "1 day ago", text: "This video was super helpful!", likes: 233 },
    ]);
    const [newComment, setNewComment] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editedText, setEditedText] = useState("");

    const addComment = () => {
        if (!newComment.trim()) return;
        const newComm = {
            id: Date.now(),
            name: "User", // You can later make this dynamic
            time: "Just now",
            text: newComment,
            likes: 0
        };
        setComments([newComm, ...comments]);
        setNewComment("");
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

    return (
        <div className="playVideo">
            <video src={video1} controls autoPlay muted alt="video1" className="video" ></video>
            <h3>Playing with Tharun Kutty...</h3>

            <div className="play-video-info">
                <p>1522 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="like icon" /> 124 </span>
                    <span><img src={dislike} alt="dislike icon" /> 20 </span>
                    <span><img src={share} alt="share icon" /> Share </span>
                    <span><img src={save_icon} alt="save icon" /> Save </span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                <img src={women_profile} alt="channel" />
                <div>
                    <p>Little_Tharun</p>
                    <span className="subs_count">1M Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className="video-desc">
                <div className="disc-box">
                    <p>Channel that makes learning more!</p>
                    <p>Kindly watch and enjoy all my videos and do subscribe to watch more.</p>
                </div>
                <h4>{comments.length} comments</h4>
            </div>

            {/* Add new comment */}
            <div className="add-comment">
                <textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={addComment}>Post</button>
            </div>

            {/* Comments */}
            {comments.map((comment) => (
                <div className="comment" key={comment.id}>
                    <img src={common_profile} alt="user_profile" />
                    <div>
                        <h3>{comment.name} <span>{comment.time}</span></h3>
                        {editingId === comment.id ? (
                            <>
                                <textarea
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                                <button onClick={saveEditedComment}>Save</button>
                            </>
                        ) : (
                            <p>{comment.text}</p>
                        )}

                        <div className="comment_action">
                            <img src={like} alt="like icon" />
                            <span>{comment.likes}</span>
                            <img src={dislike} alt="dislike icon" />
                        </div>

                        <div className="comment-options">
                            <button onClick={() => editComment(comment.id)}>Edit</button>
                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PlayVideo;
