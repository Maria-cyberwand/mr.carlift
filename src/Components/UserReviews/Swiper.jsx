import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./UserReviews.css";
import { EffectCards } from "swiper/modules";

import thumbs from "../../assets/swiperthumbs.png";
import img1 from "../../assets/UserReview1.jfif";
import img2 from "../../assets/UserReview2.jfif";
import img3 from "../../assets/UserReview3.jfif";
import img4 from "../../assets/UserReview4.jfif";
import img5 from "../../assets/UserReview5.jfif";
import img6 from "../../assets/UserReview6.jfif";

const SwiperComponent = ({ setActiveSlide }) => {
  const reviews = [
    { img: img1, name: "Millon Zahino", role: "Passenger" },
    { img: img2, name: "User 2", role: "Passenger" },
    { img: img3, name: "User 3", role: "Passenger" },
    { img: img4, name: "User 4", role: "Passenger" },
    { img: img5, name: "User 5", role: "Passenger" },
    { img: img6, name: "User 6", role: "Passenger" },
  ];

  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Update parent on change
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="numbertab">{`${index + 1} of ${reviews.length}`}</div>
          <img src={thumbs} alt="Thumbs" className="thumbImage" />
          <p>
            Mr. Carlift has made my daily commute so much easier! I never worry
            about missing a ride, and the drivers are always friendly and
            professional.Mr. Carlift has made my daily commute so much easier! I
            never worry about missing a ride, and the drivers are always
            friendly and professional.
          </p>
          <hr />
          <div className="imgNameSection">
            <img src={review.img} alt={`Review ${index + 1}`} />
            <div className="name">
              <p className="nameP">{review.name}</p>
              <small>{review.role}</small>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
