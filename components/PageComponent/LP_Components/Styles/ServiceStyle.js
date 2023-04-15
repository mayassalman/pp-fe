import styled from "styled-components";
import bgserv2 from "assets/Images/bgserv2.png";

const ServiceWrapper = styled.section`
  // min-height:100vh;
  position: relative;
  z-index: 10;
  padding: 6rem 0;
  text-align: center;
  background: transparent;
  // background: url(${bgserv2});
  margin: 0rem auto 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: max-content;

  h4 {
    font-family: "Sora";
    font-weight: 600;
    font-size: 21px;
    line-height: 42px;
    text-align: center;
    letter-spacing: 0.255em;
    text-transform: uppercase;
    background: linear-gradient(90.51deg, #87f9c2 8.05%, #6bb1d9 92.6%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  h3 {
    font-family: "Sora";
    font-weight: 600;
    font-size: 54px;
    line-height: 1.2;
    text-align: center;
    letter-spacing: 1px;
    color: #fff;
    margin: 1rem auto 0rem !important;
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    width: 80%;
    margin: 1.5rem auto 5rem auto !important;
    color: #fff;
  }

  .service-section {
    margin-top: 5rem;
    margin-bottom: 1rem;
    width: 97%;
    margin-left: auto !important;
    margin-right: auto !important;

    .ant-card {
      background: rgba(73, 89, 113, 0.15);
      mix-blend-mode: normal;
      backdrop-filter: blur(100px);
      border-radius: 20px;
      height: 100%;
      border: none;

      margin: 0 auto;

      .ant-card-body {
        text-align: center;
        padding-top: 60px !important;
        padding-left: 20px !important;
        padding-right: 20px !important;
        padding-bottom: 40px !important;
      }

      .img-container {
        height: 80px;
        margin-bottom: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .img-container::before {
        content: "";
        position: absolute;
        display: inline-block;
        z-index: -1;
        background: #002130;
        width: 120px;
        height: 120px;
        border-radius: 100%;
      }

      img {
        // height:75%;
        // width:75%;
      }

      .video-container {
        height: 100%;
        mix-blend-mode: screen;
      }

      h5 {
        font-family: "Sora";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 113.5%;
        letter-spacing: -0.528045px;
        background: linear-gradient(93.63deg, #ffffff 1.55%, #a5a5a5 149.45%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-bottom: 0.5rem !important;
      }

      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        color: #fff;
        width: 100%;
        margin-bottom: 0 !important;
        letter-spacing: 0.2px;
        opacity: 0.9;
      }
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1450px) {
    .service-section {
      width: 100%;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
  }

  @media screen and (min-width: 451px) and (max-width: 767px) {
    .service-section {
      width: 100%;
    }

    h3 {
      font-size: 42px;
    }
    h4 {
      font-size: 21px;
    }
  }

  @media screen and (max-width: 451px) {
    .service-section {
      width: 100%;
    }
    h3 {
      font-size: 36px;
    }
    h4 {
      font-size: 21px;
    }
  }
`;

export default ServiceWrapper;
