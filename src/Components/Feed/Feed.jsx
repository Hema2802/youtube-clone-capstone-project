
import React from "react";
import './Feed.css'
import {Link} from 'react-router-dom'
import SubTitleBar from "../SubTitleBar/SubTitleBar";
function Feed(){
    return(
        <>
        <SubTitleBar/>
        <div className="feed">

             <Link to={`video/20/4532`} className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </Link>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

           <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk3clYhCCUWp4ssUtrUjSM55duLVbFaK_bg&s" alt="image1"/>
                <h2>World News: Brings breaking stories and exclusive International News</h2>
                <h3>BBC</h3>
                <p>15k view &bull; 2 days ago</p>
           </div>

        </div>
           
        
        </>
    )
}

export default Feed;