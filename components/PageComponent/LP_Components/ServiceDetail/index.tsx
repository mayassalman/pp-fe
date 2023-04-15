import React from "react";
import ServiceWrapper from "../Styles/ServiceStyle.js";
import { Row, Col, Card } from "antd";
import service1 from "assets/Images/service1.svg";
import service2 from "assets/Images/service2.svg";
import service3 from "assets/Images/service3.svg";
import service4 from "assets/Images/service4.svg";
import { CoverVideo } from "components/SharedComponent";

import Image from "next/image";

const ServiceDetail = () => {
  const LockVideo = require("assets/lock.mp4");
  const Zones = require("assets/zones.mp4");
  const Shield = require("assets/Shield.mp4");

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {/* <CoverVideo /> */}

      <ServiceWrapper>
        <div className="container">
          <h4 data-aos="fade-up" data-aos-duration="600" data-aos-offset="300">
            Advanced WEB3 Privacy
          </h4>
          <h3
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="400"
            data-aos-offset="300"
          >
            Start protecting your privacy
          </h3>
          <p
            data-aos="fade-in"
            data-aos-duration="600"
            data-aos-delay="600"
            data-aos-offset="300"
          >
            Panther features tools and solutions that span across the entire
            DeFi ecosystem.
          </p>

          <Row gutter={[30, 30]} className="service-section">
            <Col xs={24} sm={12} md={12} lg={12} xl={6}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="300"
                data-aos-offset="200"
              >
                <div className="img-container">
                  <div style={{ position: "relative", height: "70px" }}>
                    <video
                      className="video-container"
                      src={LockVideo}
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                  {/* <Image src={service1} alt='Panther Protocol' />  */}
                </div>
                <h5>Private Wallet</h5>
                <p>
                  Deposit, transact & swap assets privately. Built-in compliance
                  tools for disclosures & reports.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={6}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="450"
                data-aos-offset="200"
              >
                <div className="img-container">
                  <Image src={service2} alt="Panther Protocol" />
                </div>
                <h5> Cross-chain Bridges </h5>
                <p>
                  Bridge your assets across different blockchains privately to
                  find the best yields.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={6}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                <div className="img-container">
                  <div
                    style={{
                      position: "relative",
                      height: "70px",
                      marginTop: "7px",
                    }}
                  >
                    <video
                      className="video-container"
                      src={Shield}
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                  {/* <Image style={{marginTop:'7px'}} src={service3} alt='Panther Protocol' /> */}
                </div>
                <h5>DeFi Access </h5>
                <p>
                  Send assets to and from the most popular DeFi protocols
                  privately.
                </p>
              </Card>
            </Col>

            <Col xs={24} sm={12} md={12} lg={12} xl={6}>
              <Card
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="750"
                data-aos-offset="200"
              >
                <div className="img-container">
                  <div style={{ position: "relative", height: "80px" }}>
                    <video
                      className="video-container"
                      src={Zones}
                      autoPlay
                      muted
                      loop
                    />
                  </div>
                  {/* <Image src={service4} alt='Panther Protocol' /> */}
                </div>

                <h5>Trusted Zones </h5>
                <p>
                  Enter or manage a dedicated space to trade among trusted
                  counterparties.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </ServiceWrapper>
    </div>
  );
};

export default ServiceDetail;
