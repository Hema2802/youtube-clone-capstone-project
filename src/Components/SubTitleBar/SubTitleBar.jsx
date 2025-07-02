import React, { useRef, useState } from "react";
import './SubTitleBar.css';

function SubTitleBar({category,setCategory}) {
    const scrollRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0); 

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    };

    const titles = ["All", "Songs", "Gaming", "News","Awards" ,"Trending", "Movies", "Programming", "Education", "AI"];

    return (
        <div className="subBar">
            <button className="scroll-btn left" onClick={scrollLeft}>{'《'}</button>
            <div className="subtitles" ref={scrollRef}>
                {titles.map((title, index) => (
                    <div
                        className={`sub-btn ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => {
                            setActiveIndex(index);
                            setCategory(title)
                        }}
                    >
                        <p>{title}</p>
                    </div>
                ))}
            </div>
            <button className="scroll-btn right" onClick={scrollRight}>{'》'}</button>
        </div>
    );
}

export default SubTitleBar;
