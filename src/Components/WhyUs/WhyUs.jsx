import React from "react";
import "./WhyUs.css";

import WhyUsImg from "../../assets/WhyUsImg.jfif";
const WhyUs = () => {
  return (
    <>
      <div className="WhyUsContainer">
        <div className="headingContainer">
          <h1>
            Why Choose <span>Mr. CarLift</span>?
          </h1>
          <p>
            Discover the key benefits that make Mr. Carlift the preferred choice
            for passengers and drivers alike.
          </p>
        </div>
        <div className="benefitsContainer">
          <div className="passengerBenefits">
            <div className="BenefitsPassengerText">
              <h1>
                Benefits for <span>Passengers</span>
              </h1>
              <p>Convenient, Affordable, and Safe Monthly Rides</p>
            </div>
            <div className="PassengerBenefitsBox">
              <div className="BenefitBox">Reliable Monthly Commute</div>
              <div className="BenefitBox">Affordable & Transparent Pricing</div>
              <div className="BenefitBox">Safe & Comfortable Rides</div>
              <div className="BenefitBox">Customizable Plans</div>
            </div>
          </div>
          <hr />
          <div className="passengerBenefits">
            <div className="BenefitsPassengerText">
              <h1>
                Benefits for <span>Driver</span>
              </h1>
              <p>Earn Consistently with Flexible Driving Options</p>
            </div>
            <div className="PassengerBenefitsBox">
              <div className="BenefitBox">Consistent Monthly Income</div>
              <div className="BenefitBox">Flexible Working Hours</div>
              <div className="BenefitBox">Support & Assistance</div>
              <div className="BenefitBox">Secure Payments</div>
            </div>
          </div>
        </div>
        <div className="ImgContainer">
          <img src={WhyUsImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default WhyUs;
