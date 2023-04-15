import { Row, Col } from "antd";
import FooterWrapper from "./Styles/FooterStyles";
import pantherLogo from "assets/Images/PantherLogo.svg";
import Link from "next/link";
import { ROUTES } from "utils/constRoutes";
import fb from "assets/Images/fb.svg";
import tweet from "assets/Images/tweet.svg";
import github from "assets/Images/github.svg";
import instagram from "assets/Images/instagram.svg";
import linkedin from "assets/Images/linkedin.svg";
import PantherZKPVesting from "assets/resources/REP-Panther-ZKP-Vesting.pdf";
import PantherOnePager from "assets/resources/Panther-Protocol-One-Pager.png";
import PantherWhitePaper from "assets/resources/panther-protocol-v-1-0-1.pdf";
import PantherLitePaper from "assets/resources/Panther_Litepaper_v1_0.pdf";
import PantherZKPToken from "assets/resources/REP-Panther-ZKP-Token.pdf";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="wideContainer">
          <Row gutter={[30, 30]}>
            <Col xs={24} sm={24} md={14} lg={16} xl={16}>
              <div className="ft-about">
                <Link href={ROUTES.INDEX}>
                  <Image src={pantherLogo} alt="Panther Protocol" />
                </Link>
                <p>
                  {" "}
                  Panther is a decentralized chain-agnostic privacy layer.
                  Preserve your confidentiality while unlocking compliant DeFi
                  usage.
                </p>
              </div>

              <div className="social-media-links">
                <Image src={fb} alt="Panther Protocol on Facebook" />
                <Image src={linkedin} alt="Panther Protocol on LinkedIn" />
                <Image src={github} alt="Panther Protocol on GitHub" />
                <Image src={tweet} alt="Panther Protocol on Twitter" />
                <Image src={instagram} alt="Panther Protocol on Instagram" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} xl={4}>
              <h3> Resources </h3>
              <ul className="ft-links">
                <a href={ROUTES.ROADMAP}>
                  <li>Roadmap</li>
                </a>
                <a
                  className="dropdown-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.pantherprotocol.io"
                >
                  <li>Documentation</li>
                </a>
                <li>Media Kit</li>
                <a
                  href="https://blog.pantherprotocol.io/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <li>Panther Blog</li>
                </a>
                <a
                  href="https://forum.pantherprotocol.io/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                >
                  <li>Forum</li>
                </a>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={5} lg={4} xl={4}>
              <h3> Support </h3>
              <ul className="ft-links">
                <Link href={ROUTES.PRIVACY_POLICY}>
                  <li>Privacy Policy</li>
                </Link>
                <Link href={ROUTES.EMAIL_DISCLAIMER}>
                  <li>Disclaimers</li>
                </Link>
                <li>Support</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <p className="btm-footer">
              © 2022 Panther.org All Rights Reserved.
            </p>
          </Row>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
