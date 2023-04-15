import { motion } from "framer-motion";
import Wrapper from "./Styles/TopSectionStyles.js";

const TopSection = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          delay: 0.4,
          duration: 0.5,
          damping: 5,
          stiffness: 50,
        }}
        viewport={{ once: true }}
        className="container"
      >
        <h3>The Panther</h3>
        <h2>Roadmap</h2>
        <p>
          Explore Panther’s past achievements, current endeavours and future
          milestones. With the implementation of the Panther DAO, we aim for
          full decentralization by 2023.
        </p>

        <span> Last Update: Mar 01, 2023 </span>
      </motion.div>
    </Wrapper>
  );
};

export default TopSection;
