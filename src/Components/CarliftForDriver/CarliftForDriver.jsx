import React from "react";
import "./CarliftForDriver.css";

import CarIcon from "../../assets/CarIcon.svg";
import Calendar from "../../assets/Calendar.svg";
import Payments from "../../assets/Payments.svg";
import DriverPlatform from "../../assets/DriverPlatform.svg";
import Support from "../../assets/Support.svg";

const CarliftForDriver = () => {
  return (
    <>
      <div className="CarliftForDriver">
        <div className="CarliftForDriverImageSection">
          <div className="FloatingContainer">
            <div className="FloatingContainerIcon">
              <img src={CarIcon} alt="Floating Car Icon" />
            </div>
            <div className="FloatingContent">
              Contact Us <br /> Mr CarLift
            </div>
          </div>
        </div>

        <div className="CarliftForDriverContent">
          <div className="CarliftForDriverText">
            <h1>
              <span>Mr. Carlift</span> For Driver
            </h1>
            <p>
              Enjoy a stress-free commute with our reliable, affordable, and
              safe pick-and-drop services designed to fit your daily routine.
            </p>
          </div>
          <div className="CarliftForDriverLists">
            <div className="List">
              <div className="CarliftForDriverimgSection">
                <img src={Calendar} alt="Calendar Icon" />
              </div>
              <div className="CarliftForDrivertextSection">
                <h1>Flexible Schedule</h1>
                <p>Work on your terms with hours that fit your lifestyle.</p>
              </div>
            </div>

            <div className="List">
              <div className="CarliftForDriverimgSection">
                <img src={Payments} alt="Payments Icon" />
              </div>
              <div className="CarliftForDrivertextSection">
                <h1>Competitive Payouts</h1>
                <p>Earn more with our competitive rates and timely payments.</p>
              </div>
            </div>

            <div className="List">
              <div className="CarliftForDriverimgSection">
                <img src={DriverPlatform} alt="DriverPlatform Icon" />
              </div>
              <div className="CarliftForDrivertextSection">
                <h1>Simple Driver Platform</h1>
                <p>Manage your rides easily with our intuitive driver app.</p>
              </div>
            </div>

            <div className="List">
              <div className="CarliftForDriverimgSection">
                <img src={Support} alt="Support Icon" />
              </div>
              <div className="CarliftForDrivertextSection">
                <h1>24/7 Driver Support</h1>
                <p>
                  Get assistance when you need with round-the-clock support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarliftForDriver;
