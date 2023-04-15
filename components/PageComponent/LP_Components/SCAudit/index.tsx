import React from "react";
import SCWrapper from "../Styles/SCStyle.js";
import logo11 from "assets/Images/certik.svg";
import logo12 from "assets/Images/analytics.svg";
import arrowRight from "assets/Images/ar-right.svg";
import { Row, Col } from "antd";
import Image from "next/image";

const SCAudit = () => {
  const PantherZKPVesting = require("assets/resources/REP-Panther-ZKP-Vesting.pdf");
  const PantherZKPToken = require("assets/resources/REP-Panther-ZKP-Token.pdf");
  return (
    <SCWrapper>
      <div className="container">
        <h4 data-aos="fade-up" data-aos-duration="600" data-aos-offset="300">
          Smart Contract Audits
        </h4>

        <Row gutter={[20, 20]} className="audit-sec">
          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div
              className="sec-card"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <div className="sec-overlay">
                <div className="sec-layer">
                  <Image src={logo11} alt="Panther Protocol" />
                  <h5>
                    <span> Panther ZKP MASP Audit </span>{" "}
                    <Image src={arrowRight} alt="Panther Protocol" />
                  </h5>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div
              className="sec-card"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <div className="sec-overlay">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={PantherZKPVesting}
                >
                  <div className="sec-layer">
                    <Image src={logo12} alt="Panther Protocol" />
                    <h5>
                      <span>Panther ZKP Vesting Audit</span>{" "}
                      <Image src={arrowRight} alt="Panther Protocol" />{" "}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div
              className="sec-card"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <div className="sec-overlay">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={PantherZKPVesting}
                >
                  <div className="sec-layer">
                    <Image src={logo11} alt="Panther Protocol" />
                    <h5>
                      <span>Panther ZKP Token Audit </span>{" "}
                      <Image src={arrowRight} alt="Panther Protocol" />{" "}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={12} md={12} lg={6} xl={6}>
            <div
              className="sec-card"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="300"
              data-aos-offset="200"
            >
              <div className="sec-overlay">
                <div className="sec-layer">
                  <Image src={logo11} alt="Panther Protocol" />
                  <h5>
                    <span>Panther v0.5 Audit </span>{" "}
                    <Image src={arrowRight} alt="Panther Protocol" />{" "}
                  </h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </SCWrapper>
  );
};

export default SCAudit;
