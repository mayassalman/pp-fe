import { Card } from "antd";
import checkedlist from "assets/Images/checkedlist.svg";
import uncheckedlist from "assets/Images/uncheckedlist.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import Wrapper from "./Styles/RoadmapCard.js";

const RoadMapCard = ({ data }: any) => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, scale: 1, translateY: 100 }}
        whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card>
          <h5>{data?.title}</h5>
          <ul>
            {data?.data?.map((details: any) => {
              return (
                <li key={details.id} className="li-dot">
                  <Image
                    src={details?.checked ? checkedlist : uncheckedlist}
                    alt="li-dot"
                  />
                  <div className="li-text">{details?.detail} </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </motion.div>
    </Wrapper>
  );
};

export default RoadMapCard;
