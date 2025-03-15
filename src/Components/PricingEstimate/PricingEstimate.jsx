import React, { useState } from "react";
import "./PricingEstimate.css";

import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import EstimateImg from "../../assets/EstimateImg.jfif";
import shock from "../../assets/shocking.svg";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const PricingEstimate = () => {
  const [value, setValue] = useState(10); // Distance in km
  const [rideType, setRideType] = useState("Ride Sharing");
  const [travelMode, setTravelMode] = useState("One Way");
  const [selectedDays, setSelectedDays] = useState([]);
  const [weeklyEstimate, setWeeklyEstimate] = useState(0);
  const [monthlyEstimate, setMonthlyEstimate] = useState(0);

  const [rideTypeDropdown, setRideTypeDropdown] = useState("");
  const rideTypeOptions = ["Ride Sharing", "Private Ride"];

  const [travelModeDropdown, setTravelModedropdown] = useState("");
  const travelModeOptions = ["One Way", "Two Way"];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleCheckboxChange = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selected) => selected !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const handleDistanceChange = (event, newValue) => {
    setValue(newValue);
  };

  const calculateEstimate = () => {
    let rate = 0;

    // Determine rate based on distance
    if (value <= 100) {
      rate = 100;
    } else if (value <= 200) {
      rate = 250;
    } else if (value <= 300) {
      rate = 400;
    } else if (value <= 400) {
      rate = 600;
    } else if (value <= 500) {
      rate = 800;
    } else {
      rate = 1000;
    }

    // Calculate weekly and monthly estimates
    const workingDays = selectedDays.length;
    const weeklyRate = rate * workingDays;
    const monthlyRate = weeklyRate * 4; // Assume 4 weeks in a month

    setWeeklyEstimate(weeklyRate);
    setMonthlyEstimate(monthlyRate);
  };

  return (
    <>
      <div className="EstimateContainer">
        <div className="EstimateText">
          <h1>
            Pricing <span>Estimates</span>
          </h1>
          <p>
            Select the perfect plan based on your daily commute distance and the
            number of days you need a ride. Simple and transparent pricing to
            suit your needs.
          </p>
        </div>
        <div className="EstimateForm">
          <div className="formSection">
            <h1>Please fill the form below to get the initial estimates</h1>

            <div className="dropDownContainer">
              <label htmlFor="rideTypedropdown">Ride Type</label>
              <CustomDropdown
                options={rideTypeOptions}
                value={rideTypeDropdown}
                onChange={(value) => setRideTypeDropdown(value)}
              />
            </div>

            <div className="dropDownContainer">
              <label htmlFor="travelModedropdown">Travel Mode</label>
              <CustomDropdown
                options={travelModeOptions}
                value={travelModeDropdown}
                onChange={(value) => setTravelModedropdown(value)}
              />
            </div>

            <div className="dropDownContainer">
              <label htmlFor="distanceSlider">Distance</label>
              <Slider
                size="small"
                value={value}
                onChange={handleDistanceChange}
                min={10}
                max={600}
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => `${value}km`}
                sx={{
                  height: 40,
                  "& .MuiSlider-thumb": {
                    width: 24,
                    height: 24,
                    backgroundColor: "#fff",
                    border: "2px solid var(--primary-color)",
                    "&:hover": {
                      boxShadow: "0px 0px 0px 8px rgba(0,123,255,0.16)",
                    },
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#e0e0e0",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "var(--primary-color)",
                  },
                }}
              />
            </div>

            <div className="dropDownContainer">
              <label>No of Days</label>
              <div className="checkbox-container">
                {days.map((day) => (
                  <div
                    key={day}
                    className={`day-checkbox ${
                      selectedDays.includes(day) ? "checked" : ""
                    }`}
                    onClick={() => handleCheckboxChange(day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <div className="dropDownContainer">
              <Button
                variant="contained"
                className="drawer-button"
                onClick={calculateEstimate}
              >
                Get Estimate
              </Button>
            </div>

            <div className="EstimationResult">
              <div className="ResultWeekly dropDownContainer">
                <label htmlFor="">Weekly Estimate</label>
                <div className="EstimateResultBox">
                  <p id="weeklyestimationResult">AED {weeklyEstimate}</p>
                </div>
              </div>
              <div className="ResultMonthly dropDownContainer">
                <label htmlFor="">Monthly Estimate</label>
                <div className="EstimateResultBox">
                  <p id="monthlyestimationResult">AED {monthlyEstimate}</p>
                </div>
              </div>
            </div>

            <div className="importantNote">
              <img src={shock} alt="Shock Img" />
              <p>
                These are initial estimates; pricing can fluctuate depending on
                market availability.
              </p>
            </div>
          </div>

          <div className="imgSection">
            <img src={EstimateImg} alt="Estimate Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingEstimate;
