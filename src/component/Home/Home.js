import React, { useEffect } from "react";
import "./Home.css";
import img1 from "../pic/home-banner-new-1.png";
import img2 from "../pic/new-home-banner-2.jpg";
import img3 from "../pic/new-home-banner-3.jpg";
import img4 from "../pic/new-home-banner-4.jpg";
import logo from "../pic/logo-2.png";
import vendor from "../pic/vendor.png";
import client from "../pic/client.png";
import deliver from "../pic/deliver.png";
import design from "../pic/design.png";
import develop from "../pic/develop.png";
import discover from "../pic/discover.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import GoToTop from "../GoToTop.js";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const Home = () => {
  const tableData = [
    ["200+", "AUDITED VENDORS"],
    ["5", "GLOBALLY LOCAL RETAIL EXPERTS"],
    ["30+", "EMPLOYEES"],
  ];
  const tableData2 = [
    ["10+", "YEARS OF TRUST, EST. 2011"],
    ["7", "SOURCING HUBS"],
    ["1", "DEDICATED ACCOUNT HANDLER    "],
  ];
  return (
    <>
      <section className="home">
        <div className="box-1">
          <OwlCarousel
            className="owl-theme"
            loop
            items={1}
            margin={10}
            mergeFit={true}
            autoplay={true}
            autoplaySpeed={2}
            animateIn={true}
          >
            <div class="item">
              <img
                className="carosuel-img"
                style={{ objectFit: "contain" }}
                src={img1}
              />
            </div>
            <div class="item">
              <img
                className="carosuel-img"
                style={{ objectFit: "contain" }}
                src={img2}
              />
            </div>
            <div class="item">
              <img
                className="carosuel-img"
                style={{ objectFit: "contain" }}
                src={img3}
              />
            </div>
            <div class="item">
              <img
                className="carosuel-img"
                style={{ objectFit: "contain" }}
                src={img4}
              />
            </div>
          </OwlCarousel>
        </div>

        <div className="box-2">
          <div>
            <h2>WHAT WE DO</h2>
            <h4>
              We enable global brands to harness the capabilities of adept
              Indian manufacturers. Our network comprises more than 200
              meticulously vetted factory partners, and we employ advanced
              technologies to facilitate forward-thinking approaches to product
              sourcing, design, development, and timely delivery. Our team
              consists of over 60 on-site experts deployed across seven
              locations, complemented by international consultants spanning five
              different countries.
            </h4>
          </div>
        </div>
        <div className="box-5 wrapper ">
          <div className="box-5-upper" data-aos="fade-up">
            <h1>Why Choose Us?</h1>
            <h5>
              Reywell is a dedicated company specializing in delivering enduring
              Business Solutions. Our clients have witnessed significant and
              unique cost enhancements across their operational workflows. Be it
              policy development or cost-saving endeavors, Reywell offers a
              versatile suite of services tailored to meet our clients' specific
              requirements.
            </h5>
          </div>
        </div>
        <div className="box-3">
          <h1
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            END-TO-END
          </h1>
          <div className="box-3-section">
            <div className="box-3-section-icon">
              <img src={discover} />
              <h2 style={{ paddingLeft: "30px" }}>Discover</h2>
              <h5>Leverage our extensive vendor network.</h5>
            </div>
            <div className="box-3-section-icon">
              <img src={design} />
              <h2 style={{ paddingLeft: "30px" }}>Design</h2>
              <h5>In-person research and development assistance</h5>
            </div>
            <div className="box-3-section-icon">
              <img src={develop} />
              <h2 style={{ paddingLeft: "30px" }}>Develop</h2>
              <h5>Negotiate MOQ's, costs and margins</h5>
            </div>
            <div className="box-3-section-icon">
              <img src={deliver} />
              <h2 style={{ paddingLeft: "30px" }}>Deliver</h2>
              <h5>Q&A before shipping</h5>
            </div>
          </div>
        </div>
        <div className="box-4">
          <div class="flex-dir">
            <div className="box-4-table">
              <table style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="box-4-table">
              <table style={{ borderCollapse: "collapse" }}>
                <tbody>
                  {tableData2.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="box-6">
          <div className="box-6-flex-dir">
            <div className="box-6-map">
              <h3>Our Clients Across The World </h3>
              <img src={client} />
            </div>
            <div className="box-6-map">
              <h3>Our Suppliers Location</h3>
              <img src={vendor} />
            </div>
          </div>
        </div>
      </section>
      <GoToTop />
    </>
  );
};

export default Home;
