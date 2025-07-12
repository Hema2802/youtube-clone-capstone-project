// State initialization for channel, videos, UI control

import React, { useEffect, useState } from "react";
import "./ChannelPage.css";
import { useNavigate } from "react-router-dom";
import bannerChannel from '../../assets/bannerChannel.jpg'

function ChannelPage() {
  const navigate = useNavigate();

  const [channel, setChannel] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [videos, setVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  // Retrieve persisted channel and videos from localStorage
  
  useEffect(() => {
    const storedChannel = localStorage.getItem("myChannel");
    const savedVideos = localStorage.getItem("myVideos");

    if (storedChannel) {
      setChannel(JSON.parse(storedChannel));
    }

    if (savedVideos) {
      setVideos(JSON.parse(savedVideos));
    }
  }, []);

  if (!channel) {
    return <p>No channel found. Please create one.</p>;
  }

  const handleUpload = (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const file = e.target.video.files[0];

  if (!file) {
    alert("No file selected!");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
    // Convert video to base64 and store
    const newVideo = { title, url: reader.result };
    const updatedVideos = [...videos, newVideo];
    setVideos(updatedVideos);
    localStorage.setItem("myVideos", JSON.stringify(updatedVideos));
    setShowUploadForm(false);
    setShowVideos(true);
  };

  reader.onerror = () => {
    console.error("FileReader error", reader.error);
    alert("Failed to read the video file.");
  };
// Encode video
  reader.readAsDataURL(file); // Converts to Base64
};

// delete option

const handleDelete = (index) => {
  const updated = videos.filter((_, i) => i !== index);
  setVideos(updated);
  localStorage.setItem("myVideos", JSON.stringify(updated));
};
// edit option
const handleEdit = (index) => {
  setEditingIndex(index);
  setEditedTitle(videos[index].title);
};
// if make any edit -to perform save
const handleSaveEdit = () => {
  const updated = [...videos];
  updated[editingIndex].title = editedTitle;
  setVideos(updated);
  localStorage.setItem("myVideos", JSON.stringify(updated));
  setEditingIndex(null);
  setEditedTitle("");
};
// cancel option
const handleCancelEdit = () => {
  setEditingIndex(null);
  setEditedTitle("");
};



  return (
    <>
      <div className="channel-page">
        {/* banner for channel page */}
        <img className="banner" src={bannerChannel} alt="banner" />

        <div className="channel_details">
          <img className="channel-banner" src={channel.image} alt="" />
{/* details about channel */}
          <div className="about_channel">
            <h2>
              {channel.name} <span style={{ fontSize: "16px" }}>✪</span>
            </h2>

            <p>{channel.handle}</p>
            <p>
              Welcome to official {channel.name} – your one-stop destination
              for everything tech, coding, and creativity!
            </p>
            <p>New videos every Tuesday and Friday 🎯</p>
            <p>6.00pm - 7.00pm</p>
{/* subscribe button -static */}
            <button className="subs-btn">Subscribe</button>
            {/* workable upload button-upload your videos */}
            <button
              className="subs-btn"
              onClick={() => setShowUploadForm(true)}
            >
              Upload Content
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="channel-navbar">
          {/* Home button - navigate to home page */}
          <p onClick={() => navigate("/")}>Home</p>
          {/* display uploaded content */}
          <p onClick={() => setShowVideos(true)}>Videos</p>
          {/* static buttons */}
          <p>Sports</p>
          <p>Live</p>
          <p>PlayLists</p>
          <p>Community</p>
        </div>
        <hr />
      </div>

      {/* Upload Form Popup */}
      {showUploadForm && (
        <div className="upload-form">
          
          <form onSubmit={handleUpload}>
            <h3>Upload Your Video Content</h3>
            {/* input */}
            <input
              type="text"
              name="title"
              placeholder="Video Title"
              required
            />
            {/* upload options */}
            <input type="file" name="video" accept="video/*" required />
            {/* upload files with small size */}
            <button type="submit">Upload</button>
            <button type="button" onClick={() => setShowUploadForm(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Videos Section */}
      {showVideos && (
        <div className="uploaded-videos">
          <h3>Uploaded Videos</h3>
          <div className="video-grid">
            {videos.map((video, index) => (
              // video card visibility
  <div key={index} className="video-card">
    <video src={video.url} controls width="300" height="200" />

    {editingIndex === index ? (
      <div className="edit-part">
        {/* if make any edit */}
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
        {/* save and cancel option */}
        <button onClick={handleSaveEdit}>✅</button>
        <button onClick={handleCancelEdit}>❌</button>
      </div>
    ) : (
      <>
      {/* edit and delete options-workable */}
        <p>{video.title}</p>
        <div className="video-actions">
          <button onClick={() => handleEdit(index)}>Edit ✏️</button>
          <button onClick={() => handleDelete(index)}>Delete 🗑️</button>
        </div>
      </>
    )}
  </div>
))}

          </div>
        </div>
      )}
    </>
  );
}

export default ChannelPage;

