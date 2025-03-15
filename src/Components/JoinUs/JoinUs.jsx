import React from "react";
import "./JoinUs.css";
import Button from "@mui/material/Button";
import Pessanger from "../../assets/PessangerJoin.svg";
import Driver from "../../assets/DriverJoin.svg";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();

  const navigatePessanger = () => {
    navigate("/join-as-passenger");
  };
  const navigateDriver = () => {
    navigate("/join-as-driver");
  };
  return (
    <>
      <div className="JoinUsContainer">
        <div className="JoinUsText">
          <h1>
            Join <span>Mr. Carlift</span> as a Passenger or Driver
          </h1>
          <p>
            Whether you're looking for a hassle-free commute or a flexible way
            to earn, Mr. Carlift is the perfect fit. Choose your role and start
            today!
          </p>
        </div>
        <div className="JoinUsCards">
          <div className="card">
            <div className="img">
              <img src={Pessanger} alt="Pessanger Icon Img" />
            </div>
            <div className="JoinText">
              <p>For Passengers:</p>
              <li> Get peace of mind with scheduled pick-and-drop services.</li>
              <li>Tailor your ride days and routes to match your needs.</li>
              <li>Sign up in minutes and secure your ride!</li>
            </div>
            <Button variant="contained" onClick={navigatePessanger}>
              Join As Passenger
            </Button>
          </div>

          <div className="card">
            <div className="img">
              <img src={Driver} alt="Driver Icon Img" />
            </div>
            <div className="JoinText">
              <p>For Drivers:</p>
              <li> Consistent rides mean consistent pay.</li>
              <li>
                Set your availability and choose the routes that suit you.
              </li>
              <li>Simple registration to get on the road fast.</li>
            </div>
            <Button variant="contained" onClick={navigateDriver}>
              Join as Driver
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
