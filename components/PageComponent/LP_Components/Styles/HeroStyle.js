import styled from "styled-components";
import { keyframes } from "styled-components";
import bgHero from "assets/Images/bgHero.png";

const gradient = keyframes`
{
0% {
  background-position: 0 50%;
}
50% {
  background-position: 50% 50%;
}
100% {
  background-position: 0 100%;
}}
`;

const HeroWrapper = styled.main`
  min-height: calc(100vh - 21vh);
  text-align: center;
  display: flex;
  align-items: center;
  margin: 1rem auto 0;
  transform: translateY(-5px);
  // background: url(${bgHero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  // border-radius: 40%;
  width: max-content;
  position: relative;
  z-index: 10;

  // .overlay{
  //   top:0;
  //   position:absolute;
  //   top:0;
  //   left:0;
  //   right:0;
  //   bottom:0;
  //   z-index:1;
  //   background-color:rgba(9, 2, 34, 0.5);
  //   // border-radius: 50%;
  // }

  .wideContainer {
    position: relative;
    z-index: 2;
  }

  h1 {
    z-index: 100;
    font-family: "Sora";
    width: 100%;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto;
    font-size: 80px;
    line-height: 115%;
    text-align: center;
    letter-spacing: -1.21359px;
    margin-bottom: 1.5rem !important;

    .span1 {
      display: block;
      color: #fff;
    }

    .span2 {
      background: linear-gradient(90.51deg, #87f9c2 8.05%, #6bb1d9 92.6%);
      position: relative;
      z-index: 2;
      background-size: 400%;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      -webkit-background-clip: text;
      animation: ${gradient} 5s linear infinite;
      text-fill-color: transparent;
      display: inline-block;
    }
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 21px;
    line-height: 34px;
    text-align: center;
    width: 50%;
    margin: 0 auto 3.5rem auto !important;
    color: #fff;
    position: relative;
    z-index: 100;
  }

  button {
    padding: 1.1rem 2.5rem;
    border: 0;
    border-radius: 60px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #06081e;
    position: relative;
    cursor: pointer;
    background: linear-gradient(90.51deg, #87f9c2 8.05%, #6bb1d9 92.6%);
    mix-blend-mode: normal;

    :hover {
      transform: scale(0.95);
    }

    img {
      margin-top: -0.3rem;
      margin-left: 0.3rem;
    }
  }

  @media screen and (min-width: 2000px) {
  }

  @media screen and (min-width: 1600px) {
    min-height: calc(100vh - 20vh);

    button {
      padding: 1.25rem 2.75rem;
      font-size: 22px;
    }

    h1 {
      font-size: 105px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1450px) {
    p {
      width: 60%;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    h1 {
      font-size: 80px;
      width: 100%;
    }

    p {
      width: 75%;
    }

    .overlay {
      // border-radius: 30%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    h1 {
      font-size: 72px;
      width: 100%;
    }

    p {
      width: 85%;
    }

    .overlay {
      // border-radius: 25%;
    }
  }
  @media screen and (min-width: 501px) and (max-width: 768px) {
    min-height: calc(100vh - 18vh);

    h1 {
      font-size: 60px;
      width: 100%;
      // margin-top: 6rem;
    }

    .overlay {
      // border-radius: 10%;
    }

    p {
      width: 85%;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 500px) {
    min-height: calc(100vh - 18vh);

    .overlay {
      // border-radius: 0%;
    }

    h1 {
      font-size: 45px;
      width: 100%;
    }

    p {
      width: 100%;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 380px) {
    min-height: calc(100vh - 18vh);

    .overlay {
      // border-radius: 0%;
    }
    h1 {
      font-size: 42px;
      width: 100%;

      .span1 {
        display: inline;
      }
    }

    p {
      width: 100%;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 355px) {
    min-height: calc(100vh - 18vh);
    h1 {
      font-size: 40px;
      width: 100%;

      .span1 {
        display: inline;
      }
    }

    p {
      width: 100%;
      font-size: 18px;
    }
  }
`;

export default HeroWrapper;
