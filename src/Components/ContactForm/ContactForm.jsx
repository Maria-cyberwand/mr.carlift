import React, { useState } from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { database, ref, push } from "../../Firebase.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    whatsappNumber: "",
    subject: "",
    contactmessage: "",
  });

  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    let error = "";
    const patterns = {
      firstname: /^[A-Za-z]{2,50}$/,
      lastname: /^[A-Za-z]{2,50}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      whatsappNumber: /^\+?[0-9]{10,15}$/,
      subject: /^.{5,100}$/,
      contactmessage: /^.{10,500}$/,
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
      const contactRef = ref(database, "contact-us");
      await push(contactRef, formData);
      toast.success("Form submitted successfully!");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        whatsappNumber: "",
        subject: "",
        contactmessage: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="ContactFormContainer">
      <div className="FormImage">
        <div className="FormImageContent">
          <div className="FormImageText">
            <h1>Contact Information</h1>
            <p>
              Stay connected with us! Follow Mr. Carlift on social media for the
              latest updates, special offers, and community news. Join our
              growing community and be part of our journey.
            </p>
          </div>
          <div className="FormImageButtons">
            <Link to="#">Facebook</Link>
            <Link to="#">Instagram</Link>
            <Link to="#">LinkedIn</Link>
            <Link to="#">Gmail</Link>
          </div>
        </div>
      </div>
      <div className="ContactFormContent">
        <form onSubmit={handleSubmit}>
          <div className="ContactFormHeading">
            <h1>
              Please Fill In The <span> Form Below</span>
            </h1>
            <p>
              Have a question or need assistance? Fill out the form below, and
              our team will get back to you as soon as possible. We value your
              feedback and are here to help!
            </p>
          </div>
          <div className="ContactFormMainSection">
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
            <div className="oneinput">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={errors.subject ? "error-input" : ""}
              />
              {errors.subject && (
                <small className="error-message">{errors.subject}</small>
              )}
            </div>
            <div className="oneinput">
              <textarea
                name="contactmessage"
                id="contactmessage"
                rows={5}
                placeholder="Enter Message"
                value={formData.contactmessage}
                onChange={handleInputChange}
                className={errors.contactmessage ? "error-input" : ""}
              ></textarea>
              {errors.contactmessage && (
                <small className="error-message">{errors.contactmessage}</small>
              )}
            </div>
            <div className="button">
              <ToastContainer />
              <Button
                type="button"
                variant="outlined"
                onClick={() =>
                  window.open(
                    `https://wa.me/${formData.whatsappNumber}`,
                    "_blank"
                  )
                }
              >
                Contact on Whatsapp
              </Button>
              <Button type="submit" variant="contained">
                Submit your response
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
