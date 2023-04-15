import React from "react";
import { Row, Col, Card } from "antd";
import ServiceWrapper from "../Styles/ServiceDetail.js";
import ser1 from "assets/Images/ser1.svg";
import ser2 from "assets/Images/ser2.svg";
import ser3 from "assets/Images/ser3.svg";
import ser4 from "assets/Images/ser4.svg";
import arrowRight from "assets/Images/arrowRightW.svg";
import { CoverVideo } from "@components/SharedComponent";
import Image from "next/image";

const ServicesList = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <CoverVideo transformY={"0px"} />
      <ServiceWrapper>
        <div className="container">
          <h4 data-aos="fade-up" data-aos-duration="600" data-aos-offset="300">
            Compliant Privacy Solutions
          </h4>
          <h3
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            data-aos-offset="300"
          >
            Customizable solutions for institutions
          </h3>

          <Row gutter={[30, 30]} className="service-section">
            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="300"
                data-aos-offset="200"
                className="service-card"
              >
                <h5>
                  {" "}
                  <Image src={ser1} alt="Panther Protocol" /> Permissioned
                  environments{" "}
                </h5>
                <p>
                  Operate a Panther Zone and whitelist users for maximum
                  security and control.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="300"
                data-aos-offset="200"
                className="service-card"
              >
                <h5>
                  <Image src={ser2} alt="Panther Protocol" /> OTC Desks{" "}
                </h5>
                <p>
                  Conduct private transactions within an on-chain Dark Pool.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="450"
                data-aos-offset="200"
                className="service-card"
              >
                <h5>
                  {" "}
                  <Image src={ser3} alt="Panther Protocol" /> On-chain
                  compliance support{" "}
                </h5>
                <p>
                  Custom rules for Zone operators. KYB support to onboard crypto
                  asset managers.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={12}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="450"
                data-aos-offset="200"
                className="service-card"
              >
                <h5>
                  {" "}
                  <Image src={ser4} alt="Panther Protocol" /> DeFi access{" "}
                </h5>
                <p>
                  Deploy assets to the most popular DeFi dApps and protocols for
                  NFTs, lending, swapping, and more.
                </p>
              </Card>
            </Col>
          </Row>
          <div
            className="glow-effects"
            data-aos="fade-in"
            data-aos-duration="600"
            data-aos-delay="700"
          >
            <button>
              <div className="btn-overlay">
                {" "}
                <i className="i-overlay"></i>
              </div>
              <span>Panther for Institutions</span>
              <Image src={arrowRight} alt="Panther Protocol" />
            </button>
          </div>
        </div>
      </ServiceWrapper>
    </div>
  );
};

export default ServicesList;
