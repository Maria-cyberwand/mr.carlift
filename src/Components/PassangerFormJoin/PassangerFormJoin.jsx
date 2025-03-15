import React, { useState } from "react";
import "./PassangerFormJoin.css";
import Button from "@mui/material/Button";
import { database, ref, push } from "../../Firebase.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PassangerFormJoin = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    whatsappNumber: "",
    pickuppoint: "",
    dropoffpoint: "",
    pickuptime: "",
    dropofftime: "",
    routedetails: "",
  });

  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let error = "";
    const patterns = {
      firstname: /^[A-Za-z]{2,50}$/,
      lastname: /^[A-Za-z]{2,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      whatsappNumber: /^\+?[0-9]{10,15}$/,
      pickuppoint: /^.{2,100}$/,
      dropoffpoint: /^.{2,100}$/,
      pickuptime: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, // HH:mm format
      dropofftime: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, // HH:mm format
      routedetails: /^.{0,500}$/,
    };

    if (!value.trim()) {
      error = `${name} is required.`;
    } else if (patterns[name] && !patterns[name].test(value)) {
      error = `Invalid ${name}. Please check the input.`;
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validateInput(key, formData[key]);
    });

    if (Object.values(newErrors).some((err) => err)) {
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    try {
      const passengerRef = ref(database, "join-as-passenger");
      await push(passengerRef, formData);
      toast.success("Form submitted successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        whatsappNumber: "",
        pickuppoint: "",
        dropoffpoint: "",
        pickuptime: "",
        dropofftime: "",
        routedetails: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="PassangerFormJoin">
      <div className="FormSection">
        <div className="FormText">
          <h1>
            Fill the <span>form below</span> to join us
          </h1>
          <p>
            Have a question or need assistance? Fill out the form below, and our
            team will get back to you as soon as possible. We value your
            feedback and are here to help!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="FormContentSection">
            <div className="twoinputs">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className={errors.firstname ? "error-input" : ""}
                />
                {errors.firstname && (
                  <small className="error-message">{errors.firstname}</small>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className={errors.lastname ? "error-input" : ""}
                />
                {errors.lastname && (
                  <small className="error-message">{errors.lastname}</small>
                )}
              </div>
            </div>
            <div className="twoinputs">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? "error-input" : ""}
                />
                {errors.email && (
                  <small className="error-message">{errors.email}</small>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="whatsappNumber"
                  id="whatsappNumber"
                  placeholder="WhatsApp Number"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  className={errors.whatsappNumber ? "error-input" : ""}
                />
                {errors.whatsappNumber && (
                  <small className="error-message">
                    {errors.whatsappNumber}
                  </small>
                )}
              </div>
            </div>
            <div className="twoinputs">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="pickuppoint"
                  id="pickuppoint"
                  placeholder="Pick-Up Point"
                  value={formData.pickuppoint}
                  onChange={handleInputChange}
                  className={errors.pickuppoint ? "error-input" : ""}
                />
                {errors.pickuppoint && (
                  <small className="error-message">{errors.pickuppoint}</small>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="dropoffpoint"
                  id="dropoffpoint"
                  placeholder="Drop-Off Point"
                  value={formData.dropoffpoint}
                  onChange={handleInputChange}
                  className={errors.dropoffpoint ? "error-input" : ""}
                />
                {errors.dropoffpoint && (
                  <small className="error-message">{errors.dropoffpoint}</small>
                )}
              </div>
            </div>
            <div className="twoinputs">
              <div className="input-wrapper">
                <input
                  type="time"
                  name="pickuptime"
                  id="pickuptime"
                  placeholder="Pick-Up Time"
                  value={formData.pickuptime}
                  onChange={handleInputChange}
                  className={errors.pickuptime ? "error-input" : ""}
                />
                {errors.pickuptime && (
                  <small className="error-message">{errors.pickuptime}</small>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="time"
                  name="dropofftime"
                  id="dropofftime"
                  placeholder="Drop-Off Time"
                  value={formData.dropofftime}
                  onChange={handleInputChange}
                  className={errors.dropofftime ? "error-input" : ""}
                />
                {errors.dropofftime && (
                  <small className="error-message">{errors.dropofftime}</small>
                )}
              </div>
            </div>
            <div className="oneinput">
              <textarea
                name="routedetails"
                id="routedetails"
                rows={5}
                placeholder="Route Details"
                value={formData.routedetails}
                onChange={handleInputChange}
                className={errors.routedetails ? "error-input" : ""}
              ></textarea>
              {errors.routedetails && (
                <small className="error-message">{errors.routedetails}</small>
              )}
            </div>
            <div className="button">
              <ToastContainer />
              <Button type="submit" variant="contained">
                Submit your response
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="ImageSection">
        <div className="ImageContentSection">
          <h1>
            Join Mr.Carlift as a <span>Passenger</span>
          </h1>
          <p>
            Enjoy safe, reliable and affordable pick-and-drop services tailored
            to your schedule. Become a part of our growing community of
            satisfied passengers today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PassangerFormJoin;
