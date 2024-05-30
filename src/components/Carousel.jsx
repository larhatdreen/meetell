import React, { useState } from "react";
import "../App.css";
import { default as rocket } from "../assets/rocketInSpace.svg";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slidesData = [
    {
      id: 0,
      content: (
        <>
          <img className="carouselSvg" src={rocket} alt="" />
          
          <h1 className="carouselTopText">Исследуй новые места</h1>
          <p className="carouselBotText">
            Узнавай новое о достопримечательностях своего города
          </p>
        </>
      ),
    },
    { id: 1, content: <h3>2</h3> },
    { id: 2, content: <h3>3</h3> },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  return (
    <div className="sliderBackground">
      <div className="slider">
        {slidesData.map((slide, index) => (
          <div
            key={slide.id}
            className={`carouselCard ${
              index === activeIndex ? "" : "nonactive-card"
            }`}
            onClick={handleNext}
          >
            <div className="navDots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active-dot" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3"
                cy="3"
                r="2"
                stroke="#523DD8"
                fill={index === activeIndex ? "#523DD8" : "none"}
              />
            </svg>
          </button>
        ))}
      </div>
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
}
{/* <div className="navDots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? "active-dot" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <svg
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="3"
                cy="3"
                r="2"
                stroke="#523DD8"
                fill={index === activeIndex ? "#523DD8" : "none"}
              />
            </svg>
          </button>
        ))}
      </div> */}
