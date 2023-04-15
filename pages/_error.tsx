import React from "react";
import Wrapper from "./Styles/ErrorPage.js";
import { Helmet } from "react-helmet";
import Link from "next/link";
import OGImg from "assets/Images/og.jpg";
import { ROUTES } from "utils/constRoutes";
import { Navbar } from "../components/SharedComponent";

const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Helmet>
          <title> Error Page </title>
          <meta property="og:image" content={OGImg.src} />
          <meta
            property="og:title"
            content="Email Disclaimer - Panther Protocol"
          />
          <meta property="og:description" content=" No Page Found" />
        </Helmet>
        <div className="container">
          <h4> 404 - No Page Found </h4>
          <Link href={ROUTES.INDEX}> Go to Homepage </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
