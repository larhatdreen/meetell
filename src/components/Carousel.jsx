import React, {useState} from "react";
import "../App.css";
import { default as rocket } from "../assets/rocketInSpace.svg";

export default function Carousel() {
  return (
    <div className="sliderBackground">
      <div className="slider">
        <div onClick={0} className={0}>
          <img className="carouselSvg" src={rocket} alt="" />
          <div className="navDots">
            <button className="dot active-dot">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="active-dot"
                  cx="3"
                  cy="3"
                  r="2"
                  stroke="#523DD8"
                />
              </svg>
            </button>
            <button className="dot">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="2" stroke="#523DD8" />
              </svg>
            </button>
            <button className="dot">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="2" stroke="#523DD8" />
              </svg>
            </button>
          </div>
          <h1 className="carouselTopText">Исследуй новые места</h1>
          <p className="carouselBotText">
            Узнавай новое о достопримечательностях своего города
          </p>
        </div>
        <div onClick={0} className={0}>
          <h3>2</h3>
        </div>

        <div onClick={0} className={0}>
          <h3>3</h3>
        </div>
      </div>
    </div>
  );
}
