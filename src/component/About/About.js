import React from "react";
import "./About.css";
import GoToTop from "../GoToTop.js";
const About = () => {
  return (
    <div id="about">
      <div className="about-box">
        <div className="about-detail-box">
          <h1 className="about-heading">ABOUT US</h1>

          <h4 className="about-content">
            Established in 2011 under the guidance of Mr. Sunil Sharma, Reywell
            stands as an eminent Indian sourcing and buying agency, recognized
            for its swift, efficient, secure, and dependable services catering
            to global clients. Situated in the heart of New Delhi, our sourcing
            agency embarked on its journey years ago when our founders embarked
            on a mission to fulfill the requisites of international buyers
            seeking exquisite and unique furniture and home furnishing products.
            Our primary mission is to fulfill your requirements, extending
            flexibility, expertise, and a warm demeanor. Most importantly, we
            act as your vigilant on-ground partners. We're perpetually at your
            service, keeping you well-informed and updated, elucidating the true
            happenings, and, when necessary, connecting the dots with a
            discerning eye. Our buying agency upholds unwavering principles of
            integrity, transparency, and ethical conduct. Our clientele
            encompasses a diverse range, from renowned global conglomerates to
            artisanal creators and online shops.
          </h4>
        </div>
        <div className="about-image"></div>
      </div>
      <GoToTop />
    </div>
  );
};

export default About;
