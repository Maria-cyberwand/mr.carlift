import React from "react";
import "./WhyChoose.css";
const WhyChoose = () => {
  return (
    <>
      <div className="WhyChooseContainer">
        <hr />
        <div className="WhyChooseText">
          <h1>
            Our <span>Mission</span> & <span> Values</span>
          </h1>
          <div className="TextContainer">
            <div className="TextBox">
              <h1>Mission</h1>
              <p>
                At Mr. Carlift, our mission is to provide a safe, reliable, and
                affordable commuting experience for passengers while offering
                drivers flexible earning.
              </p>
            </div>
            <div className="TextBox">
              <h1>Values</h1>
              <p>
                We prioritize safety, reliability, and transparency, ensuring
                exceptional experiences for our passengers and empowering our
                drivers to succeed on their terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoose;
