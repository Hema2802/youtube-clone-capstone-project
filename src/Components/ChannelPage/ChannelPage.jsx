import React, { useEffect, useState } from "react";
import "./ChannelPage.css";
import channel_page_banner from "../../assets/channel_page_banner.png";
import { useNavigate } from "react-router-dom";

function ChannelPage() {
  const navigate = useNavigate();

  const [channel, setChannel] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [videos, setVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false);

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

  const reader = new FileReader();
  reader.onloadend = () => {
    const newVideo = { title, url: reader.result };
    const updatedVideos = [...videos, newVideo];
    setVideos(updatedVideos);
    localStorage.setItem("myVideos", JSON.stringify(updatedVideos));
    setShowUploadForm(false);
    setShowVideos(true);
  };

  reader.readAsDataURL(file); // Converts to Base64
};


  return (
    <>
      <div className="channel-page">
        <img className="banner" src={channel_page_banner} alt="banner" />

        <div className="channel_details">
          <img className="channel-banner" src={channel.image} alt="" />

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

            <button className="subs-btn">Subscribe</button>
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
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => setShowVideos(true)}>Videos</p>
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
            <input
              type="text"
              name="title"
              placeholder="Video Title"
              required
            />
            <input type="file" name="video" accept="video/*" required />
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
              <div key={index} className="video-card">
                <video src={video.url} controls width="300" height="200" />
                <p>{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ChannelPage;

