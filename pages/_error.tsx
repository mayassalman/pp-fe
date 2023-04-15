import OGImg from "assets/Images/og.jpg";
import { Navbar } from "components/SharedComponent";
import Link from "next/link";
import { Helmet } from "react-helmet";
import { ROUTES } from "utils/constRoutes";
import Wrapper from "./Styles/ErrorPage.js";

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
