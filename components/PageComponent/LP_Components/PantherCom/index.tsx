import React from "react";
import CommunityWrapper from "../Styles/PantherCom.js";
import { Row, Col, Card } from "antd";
import twitterLogo from "assets/Images/twitter.svg";
import telegramLogo from "assets/Images/telegram.svg";
import discordLogo from "assets/Images/discord.svg";
import { motion } from "framer-motion";
import Image from "next/image";

const PantherCom = () => {
  return (
    <CommunityWrapper>
      <div className="container">
        <h4>Join The Panther Community</h4>
        <p>
          Over 120,000 privacy enthusiasts integrate our community and govern
          Panther.
        </p>

        <Row gutter={[20, 20]} className="community-stats">
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <motion.div
                  className="ant-body"
                  initial={{ opacity: 0, scale: 5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 1.3, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image src={twitterLogo} alt="Panther Protocol" />

                  <div>
                    <h5>35,981 </h5>
                    <p>Twitter Followers</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", ease: "easeOut", duration: 1 }}
              viewport={{ once: true }}
            >
              <Card>
                <motion.div
                  className="ant-body"
                  initial={{ opacity: 0, scale: 5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 1.4, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image src={telegramLogo} alt="Panther Protocol" />

                  <div>
                    <h5>45,981 </h5>
                    <p>Telegram members</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", ease: "easeOut", duration: 1.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <motion.div
                  className="ant-body"
                  initial={{ opacity: 0, scale: 5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 1.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Image src={discordLogo} alt="Panther Protocol" />

                  <div>
                    <h5>10,981 </h5>
                    <p>Discord members</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </CommunityWrapper>
  );
};

export default PantherCom;
