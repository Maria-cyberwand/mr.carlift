import React, { useState } from "react";
import "./CustomDropdown.css";

const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown">
      <div
        className="custom-select"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
      >
        {value || "Select an option"}
        <span className="dropdown-arrow"></span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              onClick={() => handleOptionClick(option)}
              role="button"
              tabIndex={0}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
