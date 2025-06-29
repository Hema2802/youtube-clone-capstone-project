import React, { useRef, useState } from "react";
import './SubTitleBar.css';

function SubTitleBar() {
    const scrollRef = useRef();
    const [activeIndex, setActiveIndex] = useState(0); // Track which subtitle is selected

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

    const titles = ["All", "Tamil Cinema", "Popular Songs", "Gaming", "News", "Comedy", "Movies", "Programming", "Television Dramas", "AI"];

    return (
        <div className="subBar">
            <button className="scroll-btn left" onClick={scrollLeft}>{'《'}</button>
            <div className="subtitles" ref={scrollRef}>
                {titles.map((title, index) => (
                    <div
                        className={`sub-btn ${activeIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => setActiveIndex(index)}
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
