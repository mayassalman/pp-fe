import React from "react";
import HeroWrapper from "../Styles/HeroStyle";
import darkRight from "assets/Images/darkRight.svg";
import CoverVideo from "../../../SharedComponent/CoverVideo";
import LogoRolls from "../LogoRolls";
import { Navbar } from "../../../SharedComponent";

const HeroSection = () => {
  return (
    <div
      className="hero"
      style={{
        position: "relative",
      }}
    >
      <CoverVideo transformY={"-75px"} />
      <Navbar />
      <HeroWrapper>
        <div className="overlay"></div>
        <div className="wideContainer">
          <h1>
            <span data-aos="fade-up" data-aos-duration="600" className="span1">
              {" "}
              Your gateway to{" "}
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
              className="span2"
            >
              privacy in DeFi
            </span>
          </h1>
          <p data-aos="fade-in" data-aos-duration="600" data-aos-delay="700">
            {" "}
            Panther is a decentralized chain-agnostic privacy layer. Preserve
            your confidentiality while unlocking compliant DeFi usage.{" "}
          </p>
          <div
            className="glow-effects"
            data-aos="fade-in"
            data-aos-duration="600"
            data-aos-delay="700"
          >
            <button>
              Launch v0.5 <img src={darkRight} alt="Panther Protocol" />
            </button>
          </div>
        </div>
      </HeroWrapper>
      <LogoRolls />
    </div>
  );
};

export default HeroSection;
