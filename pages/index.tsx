import React from "react";
import OGImg from "assets/Images/og.jpg";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/SharedComponent";
import {
  NewsletterSec,
  PantherCom,
  Partners,
  SCAudit,
  HeroSection,
  LogoRolls,
  ServiceDetail,
  ServicesList,
  BlogSection,
  HowItWorks,
} from "../components/PageComponent/LP_Components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title> Panther Protocol </title>
        <meta property="og:image" content={OGImg.src} />
        <meta property="og:title" content="Home - Panther Protocol" />
        <meta
          property="og:description"
          content="Panther Protocol is an end-to-end solution that restores privacy in Web3 and DeFi while providing financial institutions with full ownership of their data as they participate in decentralized finance."
        />
      </Helmet>

      <HeroSection />
      <ServiceDetail />
      <HowItWorks />
      <ServicesList />
      <SCAudit />
      <Partners />
      <BlogSection />
      <NewsletterSec />
    </>
  );
};

export default Home;
