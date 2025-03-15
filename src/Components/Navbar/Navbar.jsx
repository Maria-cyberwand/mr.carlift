// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../assets/logoImg.png";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const navigateBook = () => {
    navigate("/contact");
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join-as-passenger"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Join as Passenger
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/join-as-driver"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Join as Driver
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="navbar-button">
          <Button variant="contained" onClick={navigateBook}>
            Book Now
          </Button>
        </div>

        {/* Hamburger Menu */}
        <div className="navbar-hamburger" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </div>

        {/* Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          className="drawer"
        >
          <div
            className="drawer-content"
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <div className="drawer-close">
              <CloseIcon />
            </div>

            {/* Drawer Navigation Links */}
            <ul className="drawer-menu">
              <li>
                <NavLink
                  exact
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join-as-passenger"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Join as Passenger
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join-as-driver"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Join as Driver
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {/* Drawer Button */}
            <Button
              variant="contained"
              className="drawer-button"
              onClick={navigateBook}
            >
              Book Now
            </Button>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
