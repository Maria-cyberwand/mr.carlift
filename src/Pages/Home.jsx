import React from "react";
import Hero from "../Components/Hero/Hero";
import HowWeWork from "../Components/HowWeWork/HowWeWork";
import WhyUs from "../Components/WhyUs/WhyUs";
import PricingEstimate from "../Components/PricingEstimate/PricingEstimate";
import UserReviews from "../Components/UserReviews/UserReviews";
import JoinUs from "../Components/JoinUs/JoinUs";

const Home = () => {
  return (
    <>
      <Hero />
      <HowWeWork />
      <WhyUs />
      <PricingEstimate />
      <UserReviews />
      <JoinUs />
    </>
  );
};

export default Home;
