import React, { useState } from "react";
import "./UserReviews.css";

import img1 from "../../assets/UserReview1.jfif";
import img2 from "../../assets/UserReview2.jfif";
import img3 from "../../assets/UserReview3.jfif";
import img4 from "../../assets/UserReview4.jfif";
import img5 from "../../assets/UserReview5.jfif";
import img6 from "../../assets/UserReview6.jfif";
import Swiper from "./Swiper";

const UserReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="UserReviewsContainer">
      <div className="UserReviewsTextContainer">
        <h1>
          Why They Say <span>About Us?</span>
        </h1>
        <p>
          See how Mr. Carlift is making a difference for both passengers and
          drivers with reliable rides and rewarding work
        </p>
      </div>
      <div className="UserReviewSection">
        <div className="UserReviewImg">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`UserReview${index + 1}`}
              className={index === activeIndex ? "blinking-heart" : ""}
            />
          ))}
        </div>
        <div className="UserReviewSwiper">
          <Swiper setActiveSlide={setActiveIndex} /> {/* Pass handler */}
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
