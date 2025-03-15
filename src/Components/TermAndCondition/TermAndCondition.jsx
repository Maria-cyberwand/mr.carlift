import React, { useState } from "react";
import "./TermAndCondition.css";

const TabsWithContent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      label: "Introduction",
      content: (
        <div>
          <h2>Welcome to Mr.Carlift</h2>
          <p>
            These Terms and Conditions govern your use of our platform, which
            connects drivers offering carlift services with passengers seeking
            reliable transportation in the UAE. By accessing or using our
            services, you agree to abide by these terms.
          </p>
        </div>
      ),
    },
    {
      id: "tab2",
      label: "Driver Eligibility",
      content: (
        <div>
          <h2>Driver Eligibility</h2>
          <p>
            To join our platform as a Driver, you must be at least 18 years old
            and hold a valid UAE ID. Drivers must possess a valid UAE driving
            license, vehicle registration, and car insurance.
          </p>
        </div>
      ),
    },
    {
      id: "tab3",
      label: "Driver Obligations",
      content: (
        <div>
          <h2>Driver Obligations</h2>
          <ul>
            <li>
              <strong>For Drivers:</strong>
              <ul>
                <li>Provide accurate vehicle information.</li>
                <li>
                  Hold valid documentation (license, registration, insurance).
                </li>
                <li>Adhere to UAE traffic laws and regulations.</li>
                <li>Ensure vehicle safety and hygiene.</li>
                <li>Be punctual and reliable in fulfilling agreed rides.</li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "tab4",
      label: "Passenger Obligations",
      content: (
        <div>
          <h2>Passengers Obligations</h2>
          <ul>
            <li>
              <strong>For Passengers:</strong>
              <ul>
                <li>Provide accurate pickup and drop-off details.</li>
                <li>Respect the Driver’s vehicle and personal boundaries.</li>
                <li>Adhere to the agreed-upon payment method and schedule.</li>
                <li>
                  Avoid carrying prohibited items or engaging in illegal
                  activities.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "tab5",
      label: "Booking and Payment",
      content: (
        <div>
          <h2>Booking and Payment</h2>
          <p>
            Passengers must submit ride requests through the platform, providing
            accurate details. Drivers have the right to accept or decline
            requests. Payments must be completed as agreed between Drivers and
            Passengers.
          </p>
          <p>
            <strong>Payment Disputes:</strong> Disputes over payments must be
            reported to the company within 24 hours of the trip's completion.
          </p>
        </div>
      ),
    },
    {
      id: "tab6",
      label: "Cancellation Policy",
      content: (
        <div>
          <h2>Cancellation Policy</h2>
          <p>
            Both Drivers and Passengers may cancel bookings, but repeated
            cancellations may result in account suspension. If a Passenger
            cancels less than 30 minutes before the scheduled pickup, a
            cancellation fee may apply.
          </p>
        </div>
      ),
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="TermAndConditionContainer">
      <div className="headingContainer">
        <h1>
          <span>Our </span>Terms & Conditions
        </h1>
        <p>
          Your Journey, Our Commitment – Terms to Ensure a Safe and Reliable
          Experience
        </p>
      </div>

      <div className="TermAndConditionWrapper">
        <div className="TermAndConditionTabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              data-text={`#${tab.id}`}
              className={`pills ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabsText">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={tab.id}
              className="tab-content"
              style={{ display: activeTab === tab.id ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TabsWithContent;
