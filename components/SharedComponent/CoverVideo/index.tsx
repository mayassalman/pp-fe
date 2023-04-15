import styled from "styled-components";
const coverVideo = require("assets/bg_video.mp4");

const VideoContainer = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;

  video {
    width: 100%;
    height: 99%;
    object-fit: contain;
    mix-blend-mode: screen;
  }

  @media screen and (max-width: 767px) {
    video {
      // object-fit:cover;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-image: radial-gradient(
    rgba(9, 2, 34, 0.7),
    rgba(9, 2, 34, 1),
    #090222
  );
`;

const CoverVideo = ({ transformY }: any) => {
  return (
    <VideoContainer style={{ transform: `translate(0, ${transformY})` }}>
      <DarkOverlay />
      <video src={coverVideo} autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
