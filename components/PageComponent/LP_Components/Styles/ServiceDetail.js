import styled from "styled-components";
import bgserv2 from "assets/Images/bgserv2.png";

const ServiceWrapper = styled.section`
  padding: 6rem 0;
  text-align: center;
  // background: url(${bgserv2});
  margin: 0rem auto 0;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: max-content;
  position: relative;
  z-index: 10;

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
    width: 55%;
  }

  button {
    border-radius: 60px;
    background: #3669e6;
    color: #fff;
    padding: 1.4rem 2.8rem;
    line-height: 25px;
    font-weight: 600;
    font-size: 18px;
    border: 2px solid transparent;
    cursor: pointer;
    background: linear-gradient(#090222, #090222) padding-box,
      linear-gradient(90.51deg, #87f9c2 8.05%, #6bb1d9 92.6%) border-box;
    position: relative;

    img {
      display: inline-block;
      width: 10px;
      margin-left: 0.5rem;
      position: relative;
    }

    span {
      position: relative;
    }
    .btn-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #090222;
      border-radius: 60px;
      height: 100%;

      .i-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(217, 217, 217, 0.05);
        border-radius: 60px;
        height: 100%;
        z-index: 1;
      }
    }
  }

  button:hover {
    transform: scale(0.95) !important;
  }

  .service-section {
    margin-top: 5rem;
    margin-bottom: 6rem;
    width: 80%;
    margin-left: auto !important;
    margin-right: auto !important;
    align-items: stretch;

    .ant-card {
      background: rgba(73, 89, 113, 0.15);
      backdrop-filter: blur(100px);
      border-radius: 20px;
      height: 100%;
      border: none;

      .ant-card-body {
        text-align: left;
        padding: 40px;
      }

      .first {
        height: 80%;
      }

      h5 {
        font-family: "Sora";
        font-style: normal;
        font-weight: 600;
        font-size: 21px;
        line-height: 113.5%;
        text-align: left;
        letter-spacing: -0.528045px;
        color: #fff;
        margin-bottom: 1.2rem !important;

        img {
          display: inline-block;
          margin-right: 1rem;
        }
      }

      p {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        mix-blend-mode: normal;
        letter-spacing: 0.5px;
        text-align: left;
        color: #d1e9ff;
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 1199px) and (max-width: 1450px) {
    .service-section {
      .ant-card .ant-card-body {
        padding: 36px;
      }
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    h3 {
      width: 80%;
    }

    .service-section {
      width: 90%;

      .ant-card .ant-card-body {
        padding: 32px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    h3 {
      width: 100%;
    }

    .service-section {
      width: 100%;

      .ant-card .ant-card-body {
        padding: 32px;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 768px) {
    h3 {
      font-size: 42px;
      width: 100%;
    }
    h4 {
      font-size: 21px;
    }

    .service-section {
      width: 100%;

      .ant-card .ant-card-body {
        padding: 32px;
      }
    }
  }

  @media screen and (min-width: 451px) and (max-width: 600px) {
    h3 {
      font-size: 42px;
      width: 100%;
    }
    h4 {
      font-size: 21px;
    }

    .service-section {
      width: 100%;

      .ant-card .ant-card-body {
        padding: 32px;
      }

      .ant-card h5 img {
        width: 25px;
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 451px) {
    h3 {
      font-size: 36px;
      width: 100%;
    }
    h4 {
      font-size: 21px;
    }

    .service-section {
      width: 100%;

      .ant-card .ant-card-body {
        padding: 32px;
      }

      .ant-card h5 img {
        width: 25px;
        margin-right: 0.5rem;
      }
    }

    button {
      padding: 1rem 2rem;
    }
  }
`;

export default ServiceWrapper;
