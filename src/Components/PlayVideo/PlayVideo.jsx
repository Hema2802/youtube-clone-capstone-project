
import React from "react";
import './PlayVideo.css'
import video1 from '../../assets/video1.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save_icon from '../../assets/save_icon.png'
import women_profile from '../../assets/women_profile.png'
import common_profile from '../../assets/common_profile.png'


function PlayVideo(){
    return(
        <>
          <div className="playVideo">
            <video src={video1} controls autoPlay muted  alt="video1" className="video" ></video>
            <h3>Playing with Tharun Kutty...</h3>

            <div className="play-video-info">
                <p>1522 Views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="like icon"  /> 124 </span>
                    <span><img src={dislike} alt="dislike icon"  /> 20 </span>
                    <span><img src={share} alt="share icon"  /> Share </span>
                    <span><img src={save_icon} alt="save icon"  /> Save </span>
                </div>
            </div>

            <hr></hr>
{/* channel details */}
            <div className="publisher">
                <img src={women_profile} alt="channal"/>
                <div>
                    <p>Little_Tharun</p>
                    <span className="subs_count">1M Subscribers</span>
                </div>

                <button>Subcribe</button>
            </div>
{/* video description */}
              
              <div className="video-desc">
                <div className="disc-box">
                 <p>Channel that makes learning more!</p>
                 <p>Kindly watch and enjoy all my videos and do subscribe to watch more.</p>
                </div>
                 

                 <hr/>

                 <h4>140 comments</h4>
              </div>

              {/* comments part */}

              <div className="comment">
                    <img src={common_profile} alt="user_profile"/>
                    <div>
                        <h3>Jennifer <span>1 day ago</span></h3>
                        <p>This video was super helpful! I finally understood the concept clearly. Thanks a lot for sharing!</p>

                        <div className="comment_action">
                            <img src={like} alt="like icon"/>
                            <span>233</span>

                            <img src={dislike} alt="dislike icon"/>
                        </div>
                    </div>
              </div>

          </div>
        
        </>
    )
}

export default PlayVideo;