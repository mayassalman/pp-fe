import React, { useState } from "react";
import NewsWrapper from "../Styles/NewsletterStyle.js";
import arrowRight from "assets/Images/arrowRightW.svg";
import axios from "axios";
import Image from "next/image";

const NewsletterSec = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setValidEmail] = useState<any>(null);
  const [validText, setValidText] = useState("l");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const user = { userEmail: email };

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
      setValidEmail(true);
      const submitForm = async () => {
        try {
          const res = await axios.post("/subscribe", user);
          if (res.status === 200) {
            setValidEmail(true);
            setValidText(
              "Thank You for Subscribing, Successfully Subscribed !"
            );
            setEmail("");

            setTimeout(() => {
              setValidEmail(null);
              setValidText("l");
            }, 5000);
          } else {
            console.log("False False");
            setValidEmail(false);
            setValidText("Some Error Occured, Please Try Again !");
            setTimeout(() => {
              setValidEmail(null);
              setValidText("l");
            }, 5000);
          }
        } catch (e) {
          setValidEmail(false);
          setValidText("Some Error Occured, Please Try Again !");
          setTimeout(() => {
            setValidEmail(null);
            setValidText("l");
          }, 5000);
        }
      };
      submitForm();
    } else {
      setValidEmail(false);
      setValidText("Please Enter Valid Email Address !");
      setTimeout(() => {
        setValidEmail(null);
        setValidText("l");
      }, 5000);
    }
  };

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <NewsWrapper>
      <div className="container">
        <h4
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="300"
        >
          Stay in the loop
        </h4>
        <p
          data-aos="fade-in"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-offset="300"
        >
          Sign up for our newsletter to be the first to learn about product
          development, blog posts, and other updates.
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="300"
          data-aos-offset="200"
          className="form-cta"
        >
          <input
            type="email"
            onChange={handleChange}
            value={email}
            name="EMAIL"
            placeholder="Your email address"
          />
          {/* <div className='glow-effects'> */}
          <button onClick={handleSubmit}>
            <div className="btn-overlay">
              <i className="i-overlay"></i>
            </div>
            <span> Sign Up </span>{" "}
            <Image src={arrowRight} alt="Panther Protocol" />
          </button>
          {/* </div> */}
        </div>

        {emailValid === true ? (
          <h6 style={{ color: "#7AD8CD" }}> {validText} </h6>
        ) : emailValid === false ? (
          <h6 style={{ color: "red" }}> {validText} </h6>
        ) : (
          <h6 style={{ color: "transparent", opacity: "0" }}>{validText}</h6>
        )}
      </div>
    </NewsWrapper>
  );
};

export default NewsletterSec;
