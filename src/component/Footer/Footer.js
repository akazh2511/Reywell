import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div class="footer-distributed">
        <div class="footer-left">
          <h3>
            <span>Reywell</span>
          </h3>

          <p class="footer-links">
            <a href="/">Home</a>|<a href="/about">About</a>|
            <a href="/services">Services</a>|<a href="/contact">Contact</a>|
            <a href="/careers">Careers</a>
          </p>

          <p class="footer-company-name">
            Copyright © 2023 <strong>Reywell</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>Delhi</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 74**9**258</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>At
            <strong> Reywell</strong>, we specialize in optimizing procurement
            processes through innovative technologies, ensuring cost-efficiency
            and sustainability for businesses worldwide.
          </p>
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
