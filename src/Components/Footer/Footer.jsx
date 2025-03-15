import React, { useState } from "react";
import { Link } from "react-router-dom";
import { database, ref, push } from "../../Firebase.js";
import "./Footer.css";
import Button from "@mui/material/Button";
import Logo from "../../assets/WhiteLogoFooter.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    footername: "",
    footeremail: "",
  });
  const [errors, setErrors] = useState({
    footername: "",
    footeremail: "",
  });

  // Regex patterns for validation
  const nameRegex = /^[a-zA-Z\s]+$/; // Allow letters and spaces
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate form fields before submitting
  const validateForm = () => {
    let isValid = true;
    let newErrors = { footername: "", footeremail: "" };

    // Validate Name
    if (!formData.footername || !nameRegex.test(formData.footername)) {
      newErrors.footername = "Please enter a valid name (letters only).";
      isValid = false;
    }

    // Validate Email
    if (!formData.footeremail || !emailRegex.test(formData.footeremail)) {
      newErrors.footeremail = "Please enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data before submission
    if (validateForm()) {
      try {
        // Save data to Firebase under "ForUpdates" schema
        const forUpdatesRef = ref(database, "for-updates");
        await push(forUpdatesRef, formData);
        // Clear form and show success
        setFormData({ footername: "", footeremail: "" });

        toast.success("Thanks for subscribing to our updates!");
      } catch (error) {
        console.error("Error saving data to Firebase:", error);
        toast.error("Failed to subscribe. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="FooterContainer">
        <div className="LeftBox">
          <div className="LeftBoxContent">
            <div className="logoContent">
              <img src={Logo} alt="Footer-Logo" />
              <li>
                <p>Monthly Pick & Drop Service You Can Count On!</p>
              </li>
            </div>

            <form action="#" className="formContent" onSubmit={handleSubmit}>
              <input
                type="text"
                name="footername"
                id="footername"
                placeholder="Name"
                value={formData.footername}
                onChange={handleChange}
              />
              {errors.footername && (
                <p className="error-message">{errors.footername}</p>
              )}

              <input
                type="email"
                name="footeremail"
                id="footeremail"
                placeholder="E-mail"
                value={formData.footeremail}
                onChange={handleChange}
              />
              {errors.footeremail && (
                <p className="error-message">{errors.footeremail}</p>
              )}

              <Button type="submit" variant="contained">
                Get Our Updates
              </Button>
            </form>

            <div className="copyrights">
              <hr className="divider" />
              <small>© 2024 Mr. CarLIFT. All rights reserved.</small>
            </div>
          </div>
        </div>

        <div className="RightBox">
          <div className="TopBox">
            <div className="TopBoxContent">
              <ul className="links">
                <p>Links</p>
                <li>
                  <Link>Passenger</Link>
                </li>
                <li>
                  <Link>Driver</Link>
                </li>
                <li>
                  <Link>Estimates</Link>
                </li>
              </ul>

              <ul className="company">
                <p>Company</p>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>

              <ul className="legals">
                <p>Legal</p>
                <li>
                  <Link
                    to="https://www.termsfeed.com/live/81413c3a-0db3-4738-8949-0cf11c705852"
                    target="_blank"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link>Term of Services</Link>
                </li>
              </ul>
            </div>
            <div className="FooterLinks">
              <Link>Whatsapp</Link>
              <Link>Facebook</Link>
              <Link>Instagram</Link>
              <Link>LinkedIn</Link>
              <Link>Gmail</Link>
            </div>
          </div>
          <div className="BottomBox">
            {/* <div className="privacypolicy">
              <hr className="divider" />
              <Link>Privacy Policy</Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* ToastContainer component to display notifications */}
      <ToastContainer />
    </>
  );
};

export default Footer;
