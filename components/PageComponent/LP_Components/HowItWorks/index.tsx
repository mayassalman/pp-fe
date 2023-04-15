import { Col, Row } from "antd";
import React, { useEffect, useState, useRef } from "react";
import Wrapper from "../Styles/HowItWorksStyle.js";
import hiw_01 from "assets/Images/hiw_01.svg";
import hiw_02 from "assets/Images/hiw_02.svg";
import hiw_03 from "assets/Images/hiw_03.svg";
import hiw_04 from "assets/Images/hiw_04.svg";
import hiw_05 from "assets/Images/hiw_05.svg";
import step0 from "assets/Images/step0.svg";
import step1 from "assets/Images/step1.svg";
import step2 from "assets/Images/step2.svg";
import step3 from "assets/Images/step3.svg";
import step4 from "assets/Images/step4.svg";
import step5 from "assets/Images/step5.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Mousewheel, Autoplay } from "swiper";
import Image from "next/image";

const HowItWorks = () => {
  const ref = useRef<any>(null);
  const [slide, setSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    if (scrollPosition >= ref.current.offsetTop) {
      // console.log('arrived')
      // setDisplay('block')
    }

    // console.log(scrollPosition, '  console.log(ref.current.offsetTop)');
  };

  useEffect(() => {
    setSlide(0);
    // console.log(activeIndex)
    // console.log(ref.current.offsetTop)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex, handleScroll]);

  return (
    <Wrapper ref={ref}>
      <div className="container">
        <h4 data-aos="fade-up" data-aos-duration="600" data-aos-offset="300">
          Get started
        </h4>
        <h3
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="300"
        >
          How it works
        </h3>
      </div>
      <Swiper
        onRealIndexChange={(element: any) => {
          setActiveIndex(element.activeIndex);
        }}
        direction={"horizontal"}
        slidesPerView={1}
        speed={1000}
        spaceBetween={50}
        effect="fade"
        touchReleaseOnEdges={true}
        mousewheel={{
          releaseOnEdges: true,
          // enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        modules={[Pagination, Keyboard, Mousewheel, Autoplay]}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          421: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          700: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          996: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1191: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Row className="works_container container">
            <Col
              className="box_container"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
            >
              <div className="works_box">
                <div>
                  <h3>Mint zAssets</h3>
                  <p>
                    Deposit your assets into Panther to mint 1:1 collateralized
                    private assets called <strong>zAssets</strong>.
                  </p>
                  <ul>
                    <li>Store multiple asset types in Panther Pools.</li>
                    <li>Protect your privacy with zero-knowledge proofs</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col className="works_img " xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="img1">
                <Image src={hiw_01} alt="Panther Protocol" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row className="works_container container">
            <Col
              className="box_container"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
            >
              <div className="works_box">
                <div>
                  <div className="steps-container">
                    <Image
                      onClick={() => setSlide(0)}
                      src={slide === 0 ? step2 : step3}
                      alt="Panther Protocol"
                    />
                    <Image
                      onClick={() => setSlide(1)}
                      src={slide === 1 ? step4 : step0}
                      alt="Panther Protocol"
                    />
                    <Image
                      onClick={() => setSlide(2)}
                      src={slide === 2 ? step5 : step1}
                      alt="Panther Protocol"
                    />
                  </div>

                  <h3>Use DeFi Adaptors</h3>
                  <>
                    <p>
                      Interact with the most popular DeFi dApps and protocols
                      directly from Panther.
                    </p>
                    <ul>
                      <li>One-click private swaps</li>
                      <li>Private interaction with NFT marketplaces</li>
                      <li>Lending/borrowing markets</li>
                    </ul>
                  </>
                </div>
              </div>
            </Col>

            <Col className="works_img " xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="img1 img2">
                <Image src={hiw_02} alt="Panther Protocol" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row className="works_container container">
            <Col
              className="box_container"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
            >
              <div className="works_box">
                <div>
                  <div className="steps-container">
                    <Image
                      onClick={() => setSlide(0)}
                      src={slide === 0 ? step2 : step3}
                      alt="Panther Protocol"
                    />
                    <Image
                      onClick={() => setSlide(1)}
                      src={slide === 1 ? step4 : step0}
                      alt="Panther Protocol"
                    />
                    <Image
                      onClick={() => setSlide(2)}
                      src={slide === 2 ? step5 : step1}
                      alt="Panther Protocol"
                    />
                  </div>

                  <h3>zTrade with others</h3>
                  <>
                    <p>
                      Swap your zAssets to build a private wallet within
                      Panther.
                    </p>
                    <ul>
                      <li>OTC-style trading</li>
                    </ul>
                  </>
                </div>
              </div>
            </Col>

            <Col className="works_img" xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="img1 img2">
                <Image src={hiw_03} alt="Panther Protocol" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row className="works_container container">
            <Col
              className="box_container"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
            >
              <div className="works_box">
                <div>
                  <div className="steps-container">
                    <Image
                      onClick={() => setSlide(0)}
                      src={slide === 0 ? step2 : step3}
                      alt="Panther Protocol"
                    />
                    <Image
                      onClick={() => setSlide(1)}
                      src={slide === 1 ? step4 : step0}
                      alt="Panther Protocol"
                    />
                    <Image
                      onClick={() => setSlide(2)}
                      src={slide === 2 ? step5 : step1}
                      alt="Panther Protocol"
                    />
                  </div>

                  <h3>Transact privately</h3>
                  <>
                    <p>
                      Execute private transactions within Panther and withdraw
                      to any address.
                    </p>
                    <ul>
                      <li>Transact with regular tokens and NFTs</li>
                      <li>Confidential payments </li>
                      <li>Private staking</li>
                      <li>Private vesting & token distributions</li>
                    </ul>
                  </>
                </div>
              </div>
            </Col>

            <Col className="works_img" xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="img1 img2">
                <Image src={hiw_04} alt="Panther Protocol" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>

        <SwiperSlide>
          <Row className="works_container container">
            <Col
              className="box_container"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
            >
              <div className="works_box">
                <div>
                  <h3>Earn Rewards</h3>
                  <p>
                    By using Panther, you’re providing others with privacy.
                    Panther rewards you in $ZKP for your private activity!
                  </p>
                  <ul>
                    <li>
                      Earn Rewards for depositing and transacting within Panther
                    </li>
                    <li>Pay for relayer fees in $ZKP</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col className="works_img " xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className="img1">
                <Image src={hiw_05} alt="Panther Protocol" />
              </div>
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default HowItWorks;
