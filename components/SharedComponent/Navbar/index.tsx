import { Dropdown } from "antd";
import pantherLogo from "assets/Images/PantherLogo.svg";
import arrowRight from "assets/Images/arrowRightW.svg";
import PantherOnePager from "assets/resources/Panther-Protocol-One-Pager.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { ROUTES } from "utils/constRoutes";
import NavWrapper from "../Styles/NavbarStyles.js";

const Navbar = () => {
  const PantherLitePaper = require("assets/resources/Panther_Litepaper_v1_0.pdf");
  const PantherZKPToken = require("assets/resources/REP-Panther-ZKP-Token.pdf");
  const PantherZKPVesting = require("assets/resources/REP-Panther-ZKP-Vesting.pdf");
  const PantherWhitePaper = require("assets/resources/panther-protocol-v-1-0-1.pdf");

  const lists = [
    {
      key: "1",
      label: (
        <Link
          onClick={() => setHovered(false)}
          className="dropdown-link"
          rel="noopener noreferrer"
          href={ROUTES.ROADMAP}
        >
          Roadmap
        </Link>
      ),
    },

    {
      key: "2",
      label: (
        <a
          onClick={() => setHovered(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.pantherprotocol.io"
        >
          <span>Docs & FAQS</span> <BiLinkExternal />
        </a>
      ),
    },

    {
      key: "3",
      label: (
        <a
          onClick={() => setHovered(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href={PantherWhitePaper}
        >
          <span>Whitepaper</span> <BiLinkExternal />
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          onClick={() => setHovered(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href={PantherLitePaper}
        >
          <span>Litepaper</span> <BiLinkExternal />
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          onClick={() => setHovered(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href={PantherOnePager.blurDataURL}
        >
          <span>One-pager</span> <BiLinkExternal />
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          onClick={() => setHovered(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href={PantherZKPVesting}
        >
          <span>Certik Audit - ZKP Vesting</span> <BiLinkExternal />
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a
          onClick={() => setHovered(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href={PantherZKPToken}
        >
          <span>Certik Audit - ZKP Token</span> <BiLinkExternal />
        </a>
      ),
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <a
          onClick={() => setHovered2(false)}
          className="dropdown-link"
          rel="noopener noreferrer"
          href="https://forum.pantherprotocol.io/"
        >
          <span>Forum</span> <BiLinkExternal />
        </a>
      ),
    },

    {
      key: "2",
      label: (
        <a
          onClick={() => setHovered2(false)}
          className="dropdown-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://snapshot.org/#/pantherprotocol.eth"
        >
          <span>Snapshot</span> <BiLinkExternal />
        </a>
      ),
    },
  ];

  const [dropDown, setDropDown] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 900) {
      if (isOpen === true) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    }
  }, [isOpen]);

  const handleClick = () => {
    setDropDown(0);
    setIsOpen(!isOpen);
  };

  return (
    <NavWrapper>
      <div className={isOpen ? "main-nav-resp main-navbar" : "main-navbar"}>
        <div className="wideContainer">
          <div className="nav-container">
            <Link href={ROUTES.INDEX}>
              <Image src={pantherLogo} alt="Panther Protocol Logo" />
            </Link>
            <ul className="hide-links">
              <li>
                <Dropdown
                  menu={{
                    items: lists,
                  }}
                  onOpenChange={() => setHovered(!hovered)}
                  // trigger={['click']}
                >
                  <a
                    className={
                      hovered ? " hovered dropdown-link" : "dropdown-link"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Resources</span> <AiOutlineDown />
                  </a>
                </Dropdown>
              </li>

              <li>
                <Dropdown
                  menu={{
                    items: items,
                  }}
                  onOpenChange={() => setHovered2(!hovered2)}
                  // trigger={['click']}
                >
                  <a
                    className={
                      hovered2 ? " hovered dropdown-link" : "dropdown-link"
                    }
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Governance</span> <AiOutlineDown />
                  </a>
                </Dropdown>
              </li>

              <a
                href="https://blog.pantherprotocol.io/"
                rel="nofollow noopener noreferrer"
                className="dropdown-link"
                target="_blank"
              >
                <li>
                  <span>Blog</span>
                </li>
              </a>
            </ul>
            <a
              className="glow-effects"
              href="https://ipfs.io/ipns/pantherprotocol.eth/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <button className="hide-links">
                <div className="btn-overlay">
                  <i className="i-overlay"></i>
                </div>
                <span>Launch App </span>
                <Image src={arrowRight} alt="Panther Protocol" />{" "}
              </button>
            </a>

            <div className="resp-nav">
              <span onClick={handleClick}>
                {isOpen ? <RxCross1 /> : <FiMenu />}{" "}
              </span>
            </div>
          </div>

          <div className="resp-navbar">
            <div className={isOpen ? "resp-links" : "resp-hide"}>
              <div className="wideContainer">
                <ul>
                  <li
                    onClick={() => {
                      if (dropDown === 1) {
                        setDropDown(0);
                      } else {
                        setDropDown(1);
                      }
                    }}
                  >
                    <span>Resources</span> <AiOutlineDown />
                  </li>
                  <div
                    className={
                      dropDown === 1 ? "resp-dropdown active" : "resp-dropdown"
                    }
                  >
                    <Link
                      onClick={() => setIsOpen(false)}
                      rel="noopener noreferrer"
                      href={ROUTES.ROADMAP}
                    >
                      {" "}
                      <li>Roadmap</li>
                    </Link>
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://docs.pantherprotocol.io"
                    >
                      <li>
                        <span>Docs & FAQS</span> <BiLinkExternal />
                      </li>
                    </a>
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={PantherWhitePaper}
                    >
                      <li>
                        <span>Whitepaper</span> <BiLinkExternal />
                      </li>
                    </a>
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={PantherLitePaper}
                    >
                      <li>
                        <span>Litepaper</span> <BiLinkExternal />
                      </li>
                    </a>
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={PantherOnePager.src}
                    >
                      <li>
                        <span>One-pager</span> <BiLinkExternal />
                      </li>
                    </a>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href={PantherZKPVesting}
                      target="_blank"
                    >
                      <li>
                        <span>Certik Audit - ZKP Vesting</span>{" "}
                        <BiLinkExternal />
                      </li>
                    </Link>
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={PantherZKPToken}
                    >
                      <li>
                        <span>Certik Audit - ZKP Token</span> <BiLinkExternal />
                      </li>
                    </a>
                  </div>
                  <li
                    onClick={() => {
                      if (dropDown === 2) {
                        setDropDown(0);
                      } else {
                        setDropDown(2);
                      }
                    }}
                  >
                    {" "}
                    <span>Governance</span> <AiOutlineDown />
                  </li>
                  <div
                    className={
                      dropDown === 2 ? "resp-dropdown active" : "resp-dropdown"
                    }
                  >
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://forum.pantherprotocol.io/"
                    >
                      <li>
                        <span>Forum</span> <BiLinkExternal />
                      </li>
                    </a>
                    <a
                      onClick={() => setIsOpen(false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://snapshot.org/#/pantherprotocol.eth"
                    >
                      <li>
                        <span>Snapshot</span> <BiLinkExternal />
                      </li>
                    </a>
                  </div>

                  <a
                    href="https://blog.pantherprotocol.io/"
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                  >
                    <li>
                      <span>Blog</span>
                    </li>
                  </a>
                </ul>

                <a
                  href="https://ipfs.io/ipns/pantherprotocol.eth/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <button className={isOpen ? "resp-button" : "resp-hide"}>
                    <div className="btn-overlay">
                      <i className="i-overlay"></i>
                    </div>
                    <span>Launch App</span>{" "}
                    <Image src={arrowRight} alt="Panther Protocol" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;
