import React from "react";
import "./Services.css";
import qanda from "../pic/qanda.png";
import proddev from "../pic/product-dev.png";
import sourcing from "../pic/sourcing.png";
import order from "../pic/order-man.png";
import logistic from "../pic/logistic-man.png";
import iso from "../pic/iso.png";
import opex from "../pic/opex.png";
import GoToTop from "../GoToTop.js";
const Services = () => {
  return (
    <div id="service">
      <div className="service-section">
        <div className="services">
          <h1>Our Services</h1>
          <h3>AN INTEGRATED FLOW OF RESOURCES</h3>
          <div className="service-content">
            <div className="service-cards">
              <div className="service-card" data-aos="flip-left">
                <div className="sbox">
                  <img
                    src={sourcing}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <h3>Procurement And Sourcing</h3>
                </div>
              </div>
              <div className="service-card" data-aos="flip-right">
                <div className="sbox">
                  <img
                    src={proddev}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <h3>New Product Development (NPD's)</h3>
                </div>
              </div>
              <div className="service-card" data-aos="flip-left">
                <div className="sbox">
                  <img src={order} style={{ height: "100%", width: "100%" }} />
                  <h3>Order Management</h3>
                </div>
              </div>
              <div className="service-card" data-aos="flip-right">
                <div className="sbox">
                  <img src={qanda} style={{ height: "100%", width: "100%" }} />
                  <h3>Quality Control and Assurance</h3>
                </div>
              </div>
              <div className="service-card" data-aos="flip-left">
                <div className="sbox">
                  <img
                    src={logistic}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <h3>Logistics Management</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-content-2">
          <h3>
            Sourcing from India presents its share of challenges, but we're here
            to simplify the process for you. Our dedicated on-site team members
            seamlessly integrate with your operations. Whether it's vigilant
            oversight or fostering innovative concepts, we leverage cutting-edge
            technologies to ensure your projects remain on schedule and within
            budget.
          </h3>
        </div>
        <div className="service-section-2">
          <div className="service-detail-box">
            <h1 className="product-heading">OUR BACK-END TECHNOLOGIES</h1>
            <h4 className="product-content">
              All of our services meet ISO 9001:2015 standards, and are backed
              by a suite of the latest technologies
            </h4>
          </div>
          <div className="standards">
            <div className="std-1">
              <img src={iso} />
              <h4>
                An ISO certified Audit System that ensures vendors meet global
                standards.
              </h4>
            </div>
            <div className="std-2">
              <img src={opex} />
              <h4>An AQL based Quality Management System. </h4>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Services;
