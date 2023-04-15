import React from "react";
import PartnerWrapper from "../Styles/PartnerStyle.js";
import { Row, Col } from "antd";
import { motion } from "framer-motion";
import logo1 from "assets/Images/logo-1.svg";
import logo2 from "assets/Images/logo-2.svg";
import logo3 from "assets/Images/logo-3.svg";
import logo4 from "assets/Images/logo-4.svg";
import logo5 from "assets/Images/logo-5.svg";
import logo6 from "assets/Images/logo-6.svg";
import logo7 from "assets/Images/logo-7.svg";
import logo8 from "assets/Images/logo-8.svg";
import logo9 from "assets/Images/logo-9.svg";
import logo10 from "assets/Images/logo-10.svg";
import Image from "next/image";

const Partners = () => {
  return (
    <PartnerWrapper>
      <div className="container">
        <h4 data-aos="fade-up" data-aos-duration="600" data-aos-offset="300">
          {" "}
          Strategic Partners{" "}
        </h4>
        <Row
          gutter={[20, 60]}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <a
                href="https://elrond.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {" "}
                <Image
                  className="partners_logo elrond"
                  src={logo1}
                  alt="Panther Protocol"
                />{" "}
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <a
                href="https://polygon.technology"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {" "}
                <Image
                  className="partners_logo polygon"
                  src={logo2}
                  alt="Panther Protocol"
                />{" "}
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={4} xl={4}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <a
                href="https://flare.xyz"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="partners_logo flare"
                  src={logo3}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <a
                href="https://near.org"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {" "}
                <Image
                  className=" partners_logo near"
                  src={logo4}
                  alt="Panther Protocol"
                />{" "}
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <a
                href="https://www.bumper.fi"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {" "}
                <Image
                  className="partners_logo bumper"
                  src={logo5}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="450"
              data-aos-offset="200"
            >
              <a
                href="https://skynettrading.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {" "}
                <Image
                  className=" partners_logo net-trading"
                  src={logo6}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="450"
              data-aos-offset="200"
            >
              <a
                href="https://supraoracles.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="partners_logo supra-oracles"
                  src={logo7}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={4} xl={4}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="450"
              data-aos-offset="200"
            >
              <a
                href="https://shyft.network/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="partners_logo shyft"
                  src={logo8}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="450"
              data-aos-offset="200"
            >
              <a
                href="https://firo.org"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Image
                  className="partners_logo firo"
                  src={logo9}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={8} lg={5} xl={5}>
            <div
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="450"
              data-aos-offset="200"
            >
              <a
                href="https://sentinel.co"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                {" "}
                <Image
                  className="partners_logo sentinel"
                  src={logo10}
                  alt="Panther Protocol"
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </PartnerWrapper>
  );
};

export default Partners;
