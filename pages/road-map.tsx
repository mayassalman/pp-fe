import OGImg from "assets/Images/og.jpg";
import { RoadmapSection, TopSection } from "components/RoadMapPageComponent";
import { Navbar } from "components/SharedComponent";
import { Helmet } from "react-helmet";

const RoadMap = () => {
  return (
    <>
      <Navbar />
      <Helmet>
        <title> Roadmap </title>
        <meta property="og:image" content={OGImg.src} />
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
