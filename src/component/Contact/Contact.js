import React, { useState } from "react";
// import emailjs from "emailjs-com";
import "./Contact.css";
import GoToTop from "../GoToTop.js";
import Footer from "../Footer/Footer";
const Contact = () => {
  const [userInput, setUserInput] = useState({
    fullName: "",
    Email: "",
    Mobile: "",
    Message: "",
    Company: "",
  });
  const [inputerror, setinputerror] = useState({});

  const [isSubmit, setisSubmit] = useState(false);

  const InputValue = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };
  //   const SubmitInput = (e) => {
  //     e.preventDefault();

  //     setinputerror(validate(userInput));
  //     setisSubmit(true);
  //     if (Object.keys(inputerror).length === 0 && isSubmit) {
  //       console.log(inputerror);

  //       emailjs
  //         .send(
  //           "service_3tz85gm",
  //           "template_z45podj",
  //           userInput,
  //           "user_T8ehPSMAgvrbUkxc5XR90"
  //         )
  //         .then((res) => {
  //           console.log(res);
  //           setUserInput({
  //             fullName: "",
  //             Email: "",
  //             Mobile: "",
  //             Message: "",
  //             Company: "",
  //           });
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   };

  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full Name is Required";
    }
    if (!values.Email) {
      errors.Email = "Email is Required";
    }

    if (!values.Mobile) {
      errors.Mobile = "Mobile Number is Required";
    }

    if (!values.Company) {
      errors.Company = "Company is Required";
    }

    return errors;
  };

  return (
    <div>
      <div className="container-lg mt-4" id="contact">
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>
      </div>

      <div class="container mb-8">
        <div class="row align-items-stretch no-gutters contact-wrap ">
          <div class="col-md-7">
            <h4>Send us a message</h4>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter your name"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Contact Number
              </label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter your number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button class="btn btn-primary btn-color">Submit</button>
          </div>
          <div class="col-md-5 ">
            <h4>Contact us:</h4>
            <h6>feel free to contact us</h6>
            <hr className="colorhr" />
            <div class="mt-4">
              <div class="d-flex">
                <i class="bi bi-geo-alt-fill"></i>
                <p>Address:- New Delhi</p>
              </div>
              <hr className="colorhr" />
              <div class="d-flex">
                <i class="bi bi-telephone-fill"></i>
                <p>Contact :- 8888888888</p>
              </div>
              <hr className="colorhr" />
              <div class="d-flex">
                <i class="bi bi-envelope-fill"></i>
                <p>Email:- Contact@gmail.com</p>
              </div>
              <hr className="colorhr" />
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Contact;
