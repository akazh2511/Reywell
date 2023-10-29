import React from "react";
import "./Products.css";
import furniture from "../pic/Untitled design/furniture.png";
import garden from "../pic/gardning.png";
import cooking from "../pic/Untitled design/cooking.png";
import flooring from "../pic/Untitled design/floor.png";
import homeaccent from "../pic/Untitled design/homeaccents.png";
import bedbath from "../pic/Untitled design/bedbath.png";
import gift from "../pic/holiday-gift.png";
import kids from "../pic/Untitled design/kids.png";
import lifestyle from "../pic/life-style.png";
import pets from "../pic/Untitled design/pets.png";
import GoToTop from "../GoToTop.js";
const Products = () => {
  return (
    <div id="product">
      <div className="product-box">
        <div className="product-detail-box">
          <h1 className="product-heading">OUR PRODUCT CATEGORIES</h1>
          <h4 className="product-content">
            Elevating homes and lifestyles, we excel in a diverse range of 10
            categories with 50+ subcategories each.
          </h4>
        </div>
        <div className="product-cards">
          <div class="product-card">
            <div className="flex-prop">
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={flooring}
              />
              <div className="show-div">
                <h6>Floor Covering</h6>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={furniture}
              />
              <div className="show-div">
                <h5>Furniture</h5>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={garden}
              />
              <div className="show-div">
                <h5>Gardening</h5>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={homeaccent}
              />
              <div className="show-div">
                <h5>Home Accents</h5>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={cooking}
              />
              <div className="show-div">
                <h5>Cook & Dine</h5>
              </div>
            </div>
          </div>
          <div class="product-card">
            {" "}
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={bedbath}
              />
              <div className="show-div">
                <h5>BED & BATH</h5>
              </div>
            </div>
          </div>
          {/* <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={kids}
              />
              <div className="show-div">
                <h5>KIDS</h5>
              </div>
            </div>
          </div> */}
          <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={pets}
              />
              <div className="show-div">
                <h5>PETS</h5>
              </div>
            </div>
          </div>
          <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={lifestyle}
              />
              <div className="show-div">
                <h5>LIFESTYLE</h5>
              </div>
            </div>
          </div>
          {/* <div class="product-card">
            <div>
              <img
                className="product-img"
                style={{ height: "100%", width: "100%" }}
                src={gift}
              />
              <div className="show-div hide">
                <h5>GIFTS</h5>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Products;
