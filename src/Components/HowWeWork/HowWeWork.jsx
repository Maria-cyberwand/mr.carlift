import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import WorkCard from "./WorkCard";

import routeImg from "../../assets/route.svg";
import PriceNote from "../../assets/dollarIcon.png";
import Booking from "../../assets/Booking.svg";

import Calendar from "../../assets/Calendar.svg";
import Payments from "../../assets/Payments.svg";
import DriverPlatform from "../../assets/DriverPlatform.svg";
import Support from "../../assets/Support.svg";

import "./HowWeWork.css";

const HowWeWork = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="WorksContainer">
        <div className="WorkTextContainer">
          <div className="WorkText">
            <h1>
              How <span>Mr. CarLift</span> Works
            </h1>
            <p>
              Whether you're a passenger looking for reliable rides or a driver
              ready to earn, our simple process makes commuting hassle-free.
              Select your role to get started!
            </p>
          </div>
          <div className="WorkTabs">
            <TabContext value={value}>
              <TabList onChange={handleChange}>
                <Tab label="Passengers" value="1" />
                <Tab label="Drivers" value="2" />
              </TabList>

              <div className="TabsCards">
                <TabPanel value="1">
                  <WorkCard
                    img={routeImg}
                    title={"Select Your Route"}
                    description={
                      "Choose your starting point and destination for a seamless commute."
                    }
                  />
                  <WorkCard
                    img={Calendar}
                    title={"Choose Working Days"}
                    description={
                      "Pick the days of the week you need our service for your regular commute."
                    }
                  />
                  <WorkCard
                    img={PriceNote}
                    title={"Estimate Your Price"}
                    description={
                      "Get an instant fare estimate based on your route and selected days."
                    }
                  />
                  <WorkCard
                    img={Booking}
                    title={"Book Ride"}
                    description={
                      "Reach out to finalize your booking and secure your monthly pick & drop."
                    }
                  />
                </TabPanel>

                <TabPanel value="2">
                  <WorkCard
                    img={Calendar}
                    title={"Flexible Schedule"}
                    description={
                      "Work on your terms with hours that fit your lifestyle."
                    }
                  />
                  <WorkCard
                    img={Payments}
                    title={"Competitive Payouts"}
                    description={
                      "Earn more with our competitive rates and timely payments."
                    }
                  />
                  <WorkCard
                    img={DriverPlatform}
                    title={"Simple Driver Platform"}
                    description={
                      "Manage your rides easily with our intuitive driver app."
                    }
                  />
                  <WorkCard
                    img={Support}
                    title={"24/7 Driver Support"}
                    description={
                      "Get assistance whenever you need it with round-the-clock support."
                    }
                  />
                </TabPanel>
              </div>
            </TabContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeWork;
