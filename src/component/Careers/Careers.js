import React from "react";
import careers from "../pic/careers.png";
import "./Careers.css";
import GoToTop from "../GoToTop.js";
const Careers = () => {
  return (
    <div id="career">
      <div className="parent">
        <div className="child1">
          <div className="container-sm mt-4">
            <div className="section-header-career">
              <h2>Grow your career with us</h2>
            </div>
          </div>

          <div className="container-career mb-8">
            <div className="row-career align-items-stretch no-gutters contact-wrap ">
              <div className="col-md-6">
                <div className="mb-3">
                  <label for="formGroupExampleInput" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control-career inp-size "
                    id="formGroupExampleInput"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control-career inp-size"
                    id="formGroupExampleInput2"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    className="form-control-career inp-size"
                    id="formGroupExampleInput2"
                    placeholder="Enter your number"
                  />
                </div>
                <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">
                    LinkedIn Link
                  </label>
                  <input
                    type="text"
                    className="form-control-career inp-size"
                    id="formGroupExampleInput2"
                    placeholder="Enter your profile link"
                  />
                </div>
                <div className="mb-3">
                  <label for="formGroupExampleInput2" className="form-label">
                    Resume
                  </label>
                  <input
                    type="file"
                    className="form-control-career inp-size"
                    id="formGroupExampleInput2"
                    placeholder="Enter your number"
                  />
                </div>

                <button className="btn btn-primary btn-color">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="child2">
          <div className="career-img"></div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Careers;
