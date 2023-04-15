import { Col, Row } from "antd";
import React, { useState, useRef } from "react";
import BlogWrapper from "../Styles/BlogStyle.js";
import { BlogCard } from "components/SharedComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, Navigation } from "swiper";
import arrowGreen from "assets/Images/arrowGreen.svg";
import BlogData from "utils/BlogData";
import Image from "next/image";
import "swiper/swiper-bundle.css";

const BlogSection = () => {
  const swiperRef = useRef<any>();

  const [reachEnd, setReachEnd] = useState(false);
  const [reachBegin, setReachBegin] = useState(true);

  return (
    <BlogWrapper>
      <div className="container">
        <Row className="blog-head">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <h4
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-offset="300"
            >
              Latest news from Panther
            </h4>
          </Col>
        </Row>

        <Row style={{ position: "relative" }}>
          <Swiper
            slidesPerGroup={3}
            slidesPerView={3}
            spaceBetween={30}
            onReachEnd={() => {
              setReachEnd(true);
            }}
            onRealIndexChange={() => {
              if (swiperRef.current.activeIndex > 0) {
                setReachBegin(false);
              }

              if (window.screen.availWidth > 995) {
                if (swiperRef.current.activeIndex < 6) {
                  setReachEnd(false);
                }
              } else if (
                window.screen.availWidth <= 995 &&
                window.screen.availWidth >= 700
              ) {
                if (swiperRef.current.activeIndex < 7) {
                  setReachEnd(false);
                }
              } else if (window.screen.availWidth < 700) {
                if (swiperRef.current.activeIndex < 8) {
                  setReachEnd(false);
                }
              }
            }}
            onReachBeginning={() => {
              setReachBegin(true);
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{
              clickable: true,
            }}
            keyboard={{
              enabled: true,
            }}
            modules={[Pagination, Keyboard, Navigation]}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },

              421: {
                slidesPerView: 1,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },

              450: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                slidesPerGroup: 1,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerGroup: 2,
              },
              996: {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
              },

              1191: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
              },
            }}
            className="mySwiper"
          >
            {BlogData?.map((item: any) => {
              return (
                <SwiperSlide style={{ width: "300px" }} key={item.id}>
                  <BlogCard item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <a
            className="read_more"
            target="_blank"
            rel="nofollow noopener"
            href="https://blog.pantherprotocol.io/"
          >
            <p>
              <span>Visit our blog</span>{" "}
              <Image src={arrowGreen} alt="Arrow Right - Panther Protocol" />
            </p>
          </a>
        </Row>

        <div className="slider-btn">
          <div>
            <Image
              style={{ opacity: reachBegin ? "0.2" : "1" }}
              className=" slide-left"
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
              src={arrowGreen}
              alt="Left Arrow"
            />
            <Image
              style={{ opacity: reachEnd ? "0.2" : "1" }}
              className=" slide-right"
              onClick={() => {
                swiperRef.current?.slideNext();
              }}
              src={arrowGreen}
              alt="Right Arrow"
            />
          </div>
        </div>
      </div>
    </BlogWrapper>
  );
};

export default BlogSection;
