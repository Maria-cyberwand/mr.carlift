import React from "react";
import "./Hero.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const navigateBook = () => {
    navigate("/contact");
  };

  const navigateContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="HeroContainer">
        <div className="HeroContent">
          <div className="text">
            <h1>
              Monthly <span>Pick & Drop</span> Service You Can Count On!
            </h1>
            <p>
              Enjoy hassle-free, reliable pick and drop service every month with
              Mr. Carlift. Your commute made easy, safe, and affordable.
            </p>
          </div>
          <div className="buttons">
            <Button variant="contained" onClick={navigateBook}>
              Book Now
            </Button>
            <Button variant="contained" onClick={navigateContact}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
