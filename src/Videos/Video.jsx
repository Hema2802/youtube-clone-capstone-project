
import React from "react";
import "./Video.css"
import PlayVideo from "../Components/PlayVideo/PlayVideo.jsx";
import Recommended from "../Components/Recommended/Recommended.jsx";



function Video(){
    return(
        <>

        {/* when user clicks a video card that navigate to video page 
        - display playying video and recommended videos */}
           <div className="play-container">

                <PlayVideo/>
                <Recommended/>
           </div>
        
        
        </>
    )
}

// export the component
export default Video;