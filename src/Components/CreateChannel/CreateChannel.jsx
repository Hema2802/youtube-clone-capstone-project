import React, { useState } from "react";
import "./CreateChannel.css";
import { useNavigate } from "react-router-dom";  //Hook for navigation

function CreateChannel() {
  const [channelImage, setChannelImage] = useState(null); //Stores the image URL (preview)
  const [channelName, setChannelName] = useState("");        //Stores entered channel name
  const [channelHandle, setChannelHandle] = useState(""); //Stores entered channel handle

const navigate = useNavigate();   //Hook to navigate programmatically

  const handleImageChange = (e) => {
    const file = e.target.files[0];   //Get first selected file
    if (file) {
      setChannelImage(URL.createObjectURL(file));   //Create preview URL
    }
  };

  

  const handleSubmit = (e) => {
  e.preventDefault();   //Prevent form from reloading the page
// form data into a single object.
  const channelData = {
    name: channelName,
    handle: channelHandle,
    image: channelImage,
  };

  // Save to localStorage
  localStorage.setItem("myChannel", JSON.stringify(channelData));

  alert("Channel created successfully!");
  navigate("/channel");
};


  const removeImage = () => {
  setChannelImage(null);   //Reset the image preview
};

  return (
    <div className="create-channel-container">
      <h2>Create Your Channel</h2>
      <img  className="channel-user"
      // Displays selected image or a default profile icon.
            src={channelImage ||  "https://img.icons8.com/?size=100&id=492ILERveW8G&format=png&color=000000"}
            alt="user"
              />

        {/* remove option */}
          {channelImage && (
        <button type="button" className="remove-img-btn" onClick={removeImage}>
         Remove Image
        </button>
         )}
         {/* form section */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Upload Channel Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {channelImage && (
            <img src={channelImage} alt="Preview" className="preview-img" />
          )}
        </div>

        <div className="form-group">
          <label>Channel Name:</label>
          <input
            type="text"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Handle:</label>
          <input
            type="text"
            placeholder="@yourhandle"
            value={channelHandle}
            onChange={(e) => setChannelHandle(e.target.value)}
            required
          />
        </div>

        <div>
            <p className="terms-para">You accept and will comply with all the terms outlined in YouTube's official Terms of Service, including policies on content ownership, usage rights, and legal responsibilities.</p>
        </div>

        <button type="submit">Create Channel</button>
        {/* cancel button */}
        <button
               type="button"
               className="cancel-btn"
               onClick={() => navigate("/")}  // Redirect to homepage
         >
             Cancel
        </button>
      </form>
    </div>
  );
}
// export created channel
export default CreateChannel;