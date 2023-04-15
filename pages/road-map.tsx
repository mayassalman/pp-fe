import React from "react";
import { Helmet } from "react-helmet";
import { TopSection, RoadmapSection } from "../components/RoadMapPageComponent";
import OGImg from "assets/Images/og.jpg";
import { Navbar } from "../components/SharedComponent";

const RoadMap = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title> Roadmap </title>
        <meta property="og:image" content={OGImg} />
        <meta property="og:title" content="Roadmap - Panther Protocol" />
        <meta
          property="og:description"
          content="Explore Panther’s past achievements, current endeavours and future milestones. With the implementation of the Panther DAO, we aim for full decentralization by 2023."
        />
      </Helmet>

      <TopSection />
      <RoadmapSection />
    </>
  );
};

export default RoadMap;
