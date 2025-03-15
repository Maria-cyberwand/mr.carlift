import React from "react";
import "./AboutReviews.css";

import AboutReviewImg from "../../assets/AboutReviewCar.svg";
import AboutReviewImgLeft from "../../assets/AboutReviewImgLeft.svg";
const AboutReviews = () => {
  return (
    <>
      <div className="AboutReviewsContainer">
        <div className="ContentSection">
          <div className="reviewSection">
            <div className="ReviewSectionText">
              <p>
                "Safety is our top priority at Mr. Carlift. We ensure all
                drivers undergo thorough background checks and training, and our
                vehicles are regularly inspected to guarantee a secure ride for
                every passenger. Additionally, our support team is available
                24/7 to address any concerns and ensure peace of mind during
                your journey."
              </p>
            </div>
            <div className="AboutImgSection">
              <img src={AboutReviewImg} alt="AboutReviewImg" />
            </div>
          </div>

          <div className="reviewSection">
            <div className="AboutImgSection">
              <img src={AboutReviewImgLeft} alt="AboutReviewImg" />
            </div>

            <div className="ReviewSectionText">
              <p>
                “At Mr. Carlift, passenger satisfaction is at the heart of our
                operations. We are dedicated to providing a seamless commuting
                experience, from the moment you book a ride to your arrival at
                your destination. Our focus on reliability, comfort, and
                excellent customer service ensures that every passenger feels
                valued and cared for.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutReviews;
