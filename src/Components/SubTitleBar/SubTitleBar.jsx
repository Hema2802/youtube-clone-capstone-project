import React, { useRef, useState } from "react"; //To reference the scrollable container and To track the currently selected (active) category.
import './SubTitleBar.css';

function SubTitleBar({category,setCategory}) {
    const scrollRef = useRef(); //: Reference to the scrolling
    const [activeIndex, setActiveIndex] = useState(0);  //Keeps track of which title is active


    // scroll to left and right with a smooth animation.
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
// Static array of category titles used for filtering videos
    const titles = ["All", "Songs", "Gaming", "News","Awards" ,"Trending", "Movies", "Programming", "Education", "AI"];

    return (
        <div className="subBar">
            <button className="scroll-btn left" onClick={scrollLeft}>{'《'}</button>
            
            {/* Scrollable List of Categories */}
            <div className="subtitles" ref={scrollRef}>
                {/* Dynamically renders each category button. */}
                {titles.map((title, index) => (
                    // the selected category.
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
            {/* scroll right */}
            <button className="scroll-btn right" onClick={scrollRight}>{'》'}</button>
        </div>
    );
}
// final export
export default SubTitleBar;
