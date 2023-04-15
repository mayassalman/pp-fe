import React from "react";
import { Row, Col } from "antd";
import RollsWrapper from "../Styles/LogoRolls.js";
import ethereum from "assets/Images/ethereum.svg";
import polygon from "assets/Images/polygon.svg";
import flare from "assets/Images/flare.svg";
import avalanche from "assets/Images/avalanche.svg";
import near from "assets/Images/near.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoRolls = () => {
  return (
    <RollsWrapper>
      <div className="container">
        <Row gutter={[20, 20]} style={{ alignItems: "center" }}>
          <Col xs={12} sm={8} md={8} lg={5} xl={5}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.6,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className=" partners_logo ethereum"
                src={ethereum}
                alt="Panther Protocol"
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={5} xl={5}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.7,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className=" partners_logo polygon"
                src={polygon}
                alt="Panther Protocol"
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={5} xl={5}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.8,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className="partners_logo flare"
                src={flare}
                alt="Panther Protocol"
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={5} xl={5}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.9,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className="partners_logo avalanche"
                src={avalanche}
                alt="Panther Protocol"
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={8} md={8} lg={4} xl={4}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <Image
                className="partners_logo near"
                src={near}
                alt="Panther Protocol"
              />
            </motion.div>
          </Col>
        </Row>
      </div>
      {/* <div className='bottom-gradient'></div> */}
    </RollsWrapper>
  );
};

export default LogoRolls;
