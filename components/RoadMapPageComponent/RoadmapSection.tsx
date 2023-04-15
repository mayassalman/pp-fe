import { Col, Row } from "antd";
import arrow from "assets/Images/arrow.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Keyboard, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import RoadMapCard from "./RoadMapCard";
import Wrapper from "./Styles/RoadMapStyles.js";

const RoadmapSection = () => {
  const swiperRef = useRef<any>();

  const [reachEnd, setReachEnd] = useState(false);
  const [reachBegin, setReachBegin] = useState(false);

  const roadMapData = [
    {
      id: 1,
      year: 2020,
      qtr: "Q3",
      card: [
        {
          id: 1,
          title: "Project Begins",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Pre-Seed funding opens",
            },
            {
              id: 2,
              checked: true,
              detail: "Protocol design research",
            },
            {
              id: 3,
              checked: true,
              detail: "Legal opinion & clarification",
            },
          ],
        },
      ],
    },

    {
      id: 2,
      year: 2020,
      qtr: "Q4",
      card: [
        {
          id: 1,
          title: "Project Setup I",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Token economics",
            },
            {
              id: 2,
              checked: true,
              detail: "Core team formed",
            },
            {
              id: 3,
              checked: true,
              detail: "Panther Ventures Ltd. formed",
            },
            {
              id: 4,
              checked: true,
              detail: "Public Litepaper v1",
            },
            {
              id: 5,
              checked: true,
              detail: "Protocol development starts",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      year: 2021,
      qtr: "Q1",
      card: [
        {
          id: 1,
          title: "Project Setup II",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Protocol architecture begins",
            },
            {
              id: 2,
              checked: true,
              detail: "Pre-Seed funding closed",
            },
            {
              id: 3,
              checked: true,
              detail: "Seed round",
            },
            {
              id: 4,
              checked: true,
              detail: "Foundation setup",
            },
            {
              id: 5,
              checked: true,
              detail: "Economic simulations",
            },
          ],
        },
      ],
    },

    {
      id: 4,
      year: 2021,
      qtr: "Q2",
      card: [
        {
          id: 1,
          title: "Project Setup III",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Github published",
            },
            {
              id: 2,
              checked: true,
              detail: "Private Sale",
            },
            {
              id: 3,
              checked: true,
              detail: "Team expansion",
            },
            {
              id: 4,
              checked: true,
              detail: "Public Whitepaper",
            },
          ],
        },
      ],
    },

    {
      id: 5,
      year: 2021,
      qtr: "Q3",
      card: [
        {
          id: 1,
          title: "Beta: Transactional Privacy & Disclosures",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Public Litepaper v2",
            },
            {
              id: 2,
              checked: true,
              detail: "PoC for Panther L1 & L2",
            },
            {
              id: 3,
              checked: true,
              detail: "zAssets mint & burn",
            },
            {
              id: 4,
              checked: true,
              detail: "zAssets shielding",
            },
            {
              id: 5,
              checked: true,
              detail: "Privacy relayers",
            },
            {
              id: 6,
              checked: true,
              detail: "ZKP token on Ethereum (ERC-20)",
            },
            {
              id: 7,
              checked: true,
              detail: "Ethereum as first peerchain",
            },
            {
              id: 8,
              checked: true,
              detail: "Selective disclosures design",
            },
            {
              id: 9,
              checked: true,
              detail: "Initial DAO setup",
            },
          ],
        },
      ],
    },

    {
      id: 6,
      year: 2021,
      qtr: "Q4",
      card: [
        {
          id: 1,
          title: "Core Protocol Development: Phase 1",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Development of Multi-Asset Shielded Pool",
            },
            {
              id: 2,
              checked: true,
              detail: "Panther relayers",
            },
            {
              id: 3,
              checked: true,
              detail: "ZKP circuits & trusted setup",
            },
            {
              id: 4,
              checked: true,
              detail: "Phase 1 audit",
            },
            {
              id: 5,
              checked: true,
              detail: "Panther dApp development",
            },
          ],
        },
        {
          id: 2,
          title: "Staking Rewards Development",
          data: [
            {
              id: 1,
              checked: true,
              detail: "$ZKP staking",
            },
            {
              id: 2,
              checked: true,
              detail: "Panther Reward Points (PRPs)",
            },
            {
              id: 3,
              checked: true,
              detail: "Wallet prototype",
            },
          ],
        },
        {
          id: 3,
          title: "Trust and Disclosures",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Selective disclosures of transactions",
            },
          ],
        },
        {
          id: 4,
          title: "Decentralization Phase 1",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Private Launch (LaunchDAO)",
            },
            {
              id: 2,
              checked: true,
              detail: "Initial DAO setup with off-chain voting",
            },
          ],
        },
      ],
    },

    {
      id: 7,
      year: 2022,
      qtr: "Q1",
      card: [
        {
          id: 1,
          // title: '$ZKP Token Launch and Listing',
          data: [
            {
              id: 1,
              checked: true,
              detail: "DAO governance",
            },
            {
              id: 2,
              checked: true,
              detail: "Token & vesting",
            },
            {
              id: 3,
              checked: true,
              detail: "Staking on Ethereum Mainnet",
            },
          ],
        },
      ],
    },

    {
      id: 8,
      year: 2022,
      qtr: "Q2",
      card: [
        {
          id: 1,
          // title: 'Private Interchain Transfers Phase 1 ‐ R&D',
          data: [
            {
              id: 1,
              checked: true,
              detail: "Staking on Polygon",
            },
            {
              id: 2,
              checked: true,
              detail: "Core protocol",
            },
            {
              id: 3,
              checked: true,
              detail: "DeFi Adaptor PoC",
            },
          ],
        },
      ],
    },

    {
      id: 9,
      year: 2022,
      qtr: "Q3",
      card: [
        {
          id: 1,
          // title: 'Trust and Disclosure',
          data: [
            {
              id: 1,
              checked: true,
              detail: "Advanced Staking",
            },
            {
              id: 2,
              checked: true,
              detail: "Updated protocol v1",
            },
          ],
        },
        {
          id: 2,
          title: "L1 Expansion Testing",
          data: [
            {
              id: 1,
              checked: true,
              detail: "Songbird",
            },
            {
              id: 2,
              checked: true,
              detail: "NEAR Testnet",
            },
          ],
        },
      ],
    },

    {
      id: 10,
      year: 2022,
      qtr: "Q4",
      card: [
        {
          id: 1,
          // title: 'Trust and Compliance Phase 3',
          data: [
            {
              id: 1,
              checked: true,
              detail: "Core protocol updates initiated",
            },
            {
              id: 2,
              checked: true,
              detail: "Compliance design",
            },
            {
              id: 3,
              checked: true,
              detail: "Interchain transfers research",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      year: 2023,
      qtr: "Q1",
      card: [
        {
          id: 1,
          // title: 'Trust and Compliance Phase 3',
          data: [
            {
              id: 1,
              checked: false,
              detail: "Revised website",
            },
            {
              id: 2,
              checked: false,
              detail: "Updated Panther documentation",
            },
            {
              id: 3,
              checked: false,
              detail: "CEX listing",
            },
          ],
        },
        {
          id: 2,
          title: "Decentralization Phase 2",
          data: [
            {
              id: 1,
              checked: false,
              detail: "Governance framework",
            },
          ],
        },
      ],
    },

    {
      id: 12,
      year: 2023,
      qtr: "Q2",
      card: [
        {
          id: 1,
          title: "v1 Testnet Launch",
          data: [
            {
              id: 1,
              checked: false,
              detail: "MASP v1",
            },
            {
              id: 2,
              checked: false,
              detail: "Zones support",
            },
            {
              id: 3,
              checked: false,
              detail: "DeFi Adaptors",
            },
            {
              id: 4,
              checked: false,
              detail: "zTrade",
            },
            {
              id: 5,
              checked: false,
              detail: "Compliance support v1",
            },
            {
              id: 6,
              checked: false,
              detail: "Trust Providers",
            },
            {
              id: 7,
              checked: false,
              detail: "Basic relayers service",
            },
          ],
        },
      ],
    },

    {
      id: 13,
      year: 2023,
      qtr: "Q3",
      card: [
        {
          id: 1,
          // title: 'Trust and Compliance Phase 3',
          data: [
            {
              id: 1,
              checked: false,
              detail: "v1 audit",
            },
            {
              id: 2,
              checked: false,
              detail: "v1 trusted setup",
            },
          ],
        },
        {
          id: 2,
          title: "v1 Mainnet Launch",
          data: [
            {
              id: 1,
              checked: false,
              detail: "MASP v1 on Polygon",
            },
            {
              id: 2,
              checked: false,
              detail: "Zones",
            },
            {
              id: 3,
              checked: false,
              detail: "DeFi Adaptors: zSwap",
            },
            {
              id: 4,
              checked: false,
              detail: "zTrade",
            },
            {
              id: 5,
              checked: false,
              detail: "Compliance support v1",
            },
            {
              id: 6,
              checked: false,
              detail: "Basic relayers service",
            },
          ],
        },
      ],
    },
    {
      id: 14,
      year: 2023,
      qtr: "Q4",
      card: [
        {
          id: 1,
          // title: 'Trust and Compliance Phase 3',
          data: [
            {
              id: 1,
              checked: false,
              detail: "MASP v1 on multiple chains",
            },
            {
              id: 2,
              checked: false,
              detail: "Zones",
            },
          ],
        },
        {
          id: 2,
          title: "v2 TestNet Launch",
          data: [
            {
              id: 1,
              checked: false,
              detail: "MASP v2",
            },
            {
              id: 2,
              checked: false,
              detail: "zBridge",
            },
            {
              id: 3,
              checked: false,
              detail: "Interchain transfers",
            },
            {
              id: 4,
              checked: false,
              detail: "Compliance support v2",
            },
            {
              id: 5,
              checked: false,
              detail: "DeFi Adaptors v2",
            },
            {
              id: 6,
              checked: false,
              detail: "Advanced relayers",
            },
          ],
        },
      ],
    },
    {
      id: 15,
      year: 2024,
      qtr: "Q1",
      card: [
        {
          id: 1,
          title: "Decentralization Phase 3",
          data: [
            {
              id: 1,
              checked: false,
              detail: "Entrusting protocol to DAO",
            },
          ],
        },
        {
          id: 2,
          data: [
            {
              id: 1,
              checked: false,
              detail: "v2 audit",
            },
            {
              id: 2,
              checked: false,
              detail: "v2 trusted setup",
            },
          ],
        },
        {
          id: 3,
          title: "DeFi Adaptors v2",
          data: [
            {
              id: 1,
              checked: false,
              detail: "DeFi Adaptors v2",
            },
          ],
        },
      ],
    },
    {
      id: 16,
      year: 2024,
      qtr: "Q2",
      card: [
        {
          id: 1,
          title: "v2 Mainnet Launch",
          data: [
            {
              id: 1,
              checked: false,
              detail: "MASP v2",
            },
            {
              id: 2,
              checked: false,
              detail: "Compliance support v2",
            },
            {
              id: 3,
              checked: false,
              detail: "zBridge",
            },
            {
              id: 4,
              checked: false,
              detail: "Interchain transfers",
            },
            {
              id: 5,
              checked: false,
              detail: "Advanced relayers",
            },
          ],
        },
        {
          id: 2,
          data: [
            {
              id: 1,
              checked: false,
              detail: "Panther Node Testnet",
            },
          ],
        },
      ],
    },

    {
      id: 17,
      year: 2024,
      qtr: "Q3",
      card: [
        {
          id: 1,
          // title: 'v2 Mainnet Launch',
          data: [
            {
              id: 1,
              checked: false,
              detail: "Panther Node audit",
            },
            {
              id: 2,
              checked: false,
              detail: "Panther Node launch",
            },
          ],
        },
      ],
    },
  ];

  return (
    <Wrapper>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button
            disabled={reachBegin}
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
          >
            <Image className="prev-btn" src={arrow} alt="Prev" />
          </button>
          <button
            disabled={reachEnd}
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
          >
            <Image className="next-btn" src={arrow} alt="Next" />
          </button>
        </motion.div>
      </div>

      <div className="wideContainer">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="roadmap-container">
            <Swiper
              slidesPerView={3}
              spaceBetween={60}
              initialSlide={10}
              onRealIndexChange={() => {
                if (swiperRef.current.activeIndex > 0) {
                  setReachBegin(false);
                }

                if (window.screen.availWidth > 995) {
                  if (swiperRef.current.activeIndex < 14) {
                    setReachEnd(false);
                  }
                } else if (
                  window.screen.availWidth <= 995 &&
                  window.screen.availWidth >= 700
                ) {
                  if (swiperRef.current.activeIndex < 15) {
                    setReachEnd(false);
                  }
                } else if (window.screen.availWidth < 700) {
                  if (swiperRef.current.activeIndex < 16) {
                    setReachEnd(false);
                  }
                }
              }}
              navigation={true}
              onReachEnd={() => {
                setReachEnd(true);
              }}
              onReachBeginning={() => {
                setReachBegin(true);
              }}
              onBeforeInit={(swiper: any) => {
                swiperRef.current = swiper;
              }}
              keyboard={{
                enabled: true,
              }}
              modules={[Navigation, Keyboard]}
              breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                450: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                700: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                996: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1191: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              {roadMapData?.map((item) => {
                return (
                  <SwiperSlide id={item?.id.toString()} key={item?.id}>
                    <Row>
                      <Col>
                        <h4>
                          <strong>{item?.qtr}</strong> {item?.year}{" "}
                        </h4>
                        <div className="line"></div>

                        {item?.card?.map((data) => {
                          return <RoadMapCard key={data.id} data={data} />;
                        })}
                      </Col>
                    </Row>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
};

export default RoadmapSection;
