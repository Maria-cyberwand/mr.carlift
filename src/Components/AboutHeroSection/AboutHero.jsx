import React, { useEffect, useState, useRef } from "react";
import "./AboutHero.css";
import AboutCar from "../../assets/AboutCar.svg";

const AboutHero = () => {
  return (
    <>
      <div className="AboutHeroContainer">
        <div className="AboutHeroContent">
          <div className="text">
            <h1>
              About <span>Mr.CarLift</span>
            </h1>
            <p>
              "At Mr. Carlift, we make your daily commute easy, safe, and
              affordable. Whether you're a passenger or driver, we provide
              reliable rides and flexible earning opportunities."
            </p>
          </div>
        </div>
      </div>

      <div className="AnimatedText">
        <p>
          <span>Mr. Carlift </span>
          <span>
            <img src={AboutCar} alt="About Car Image" />
          </span>
          offers reliable, safe, and affordable pick-and-drop services for daily
          commuters. We connect passengers with trusted drivers and provide
          flexible plans to suit any schedule. Our goal is to make commuting
          hassle-free while offering drivers a chance to earn flexibly.
        </p>
      </div>
    </>
  );
};

export default AboutHero;
