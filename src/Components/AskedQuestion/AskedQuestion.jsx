import React from "react";
import "./AskedQuestion.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AskedQuestion = () => {
  return (
    <>
      <div className="AskedQuestion">
        <div className="AskedTextSection">
          <h1>
            Frequently Asked <span>Question?</span>
          </h1>
          <p>
            Select the perfect plan based on your daily commute distance and the
            number of days you need a ride. Simple and transparent pricing to
            suit your needs.
          </p>
        </div>
        <div className="accordions">
          <Accordion className="accordion">
            <AccordionSummary
              className="accordionSummary"
              expandIcon={<ArrowDropDownIcon className="accordion-icon" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordionHeading">
                What is Mr. Carlift?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordionText">
                Mr. Carlift is a monthly pick-and-drop service that connects
                passengers with reliable drivers, providing safe and affordable
                commuting options tailored to your schedule.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion">
            <AccordionSummary
              className="accordionSummary"
              expandIcon={<ArrowDropDownIcon className="accordion-icon" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordionHeading">
                Where are we situated?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordionText">
                Mr. Carlift is a monthly pick-and-drop service that connects
                passengers with reliable drivers, providing safe and affordable
                commuting options tailored to your schedule.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion">
            <AccordionSummary
              className="accordionSummary"
              expandIcon={<ArrowDropDownIcon className="accordion-icon" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordionHeading">
                How do I book a ride?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordionText">
                Mr. Carlift is a monthly pick-and-drop service that connects
                passengers with reliable drivers, providing safe and affordable
                commuting options tailored to your schedule.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion">
            <AccordionSummary
              className="accordionSummary"
              expandIcon={<ArrowDropDownIcon className="accordion-icon" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordionHeading">
                Are the drivers trustable?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordionText">
                Mr. Carlift is a monthly pick-and-drop service that connects
                passengers with reliable drivers, providing safe and affordable
                commuting options tailored to your schedule.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className="accordion">
            <AccordionSummary
              className="accordionSummary"
              expandIcon={<ArrowDropDownIcon className="accordion-icon" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography className="accordionHeading">
                What are the payment options?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="accordionText">
                Mr. Carlift is a monthly pick-and-drop service that connects
                passengers with reliable drivers, providing safe and affordable
                commuting options tailored to your schedule.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default AskedQuestion;
