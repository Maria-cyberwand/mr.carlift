import React from "react";
import "./CarliftForPassenger.css";

import CarIcon from "../../assets/CarIcon.svg";
import TransparentPricing from "../../assets/TransparentPricing.svg";
import SimpleBooking from "../../assets/SimpleBooking.svg";
import FlexiblePolicies from "../../assets/FlexiblePolicies.svg";

const CarliftForPassenger = () => {
  return (
    <>
      <div className="CarliftForPassenger">
        <div className="CarliftForPassengerContent">
          <div className="CarliftForPassengerText">
            <h1>
              <span>Mr. Carlift</span> For Passenger
            </h1>
            <p>
              Enjoy a stress-free commute with our reliable, affordable, and
              safe pick-and-drop services designed to fit your daily routine.
            </p>
          </div>
          <div className="CarliftForPassengerLists">
            <div className="List">
              <div className="CarliftForPassengerimgSection">
                <img src={CarIcon} alt="Car Icon" />
              </div>
              <div className="CarliftForPassengertextSection">
                <h1>Safe and Reliable Service</h1>
                <p>
                  Enjoy peace of mind with trusted drivers and secure rides.
                </p>
              </div>
            </div>

            <div className="List">
              <div className="CarliftForPassengerimgSection">
                <img src={TransparentPricing} alt="TransparentPricing Icon" />
              </div>
              <div className="CarliftForPassengertextSection">
                <h1>Transparent Pricing</h1>
                <p>Get clear, upfront estimates with no hidden fees.</p>
              </div>
            </div>

            <div className="List">
              <div className="CarliftForPassengerimgSection">
                <img src={SimpleBooking} alt="SimpleBooking Icon" />
              </div>
              <div className="CarliftForPassengertextSection">
                <h1>Simple Booking Process</h1>
                <p>
                  Book your ride effortlessly through our easy-to-use platform.
                </p>
              </div>
            </div>

            <div className="List">
              <div className="CarliftForPassengerimgSection">
                <img src={FlexiblePolicies} alt="FlexiblePolicies Icon" />
              </div>
              <div className="CarliftForPassengertextSection">
                <h1>Flexible Policies</h1>
                <p>Benefit from flexible cancellation and refund options.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="CarliftForPassengerImageSection">
          <div className="FloatingContainer">
            <div className="FloatingContainerIcon">
              <img src={CarIcon} alt="Floating Car Icon" />
            </div>
            <div className="FloatingContent">
              Contact Us <br /> Mr CarLift
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarliftForPassenger;
