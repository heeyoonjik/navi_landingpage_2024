"use client";
import React, { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import Image from "next/image";
import logo_naviyam from "@/../public/images/logo_naviyam.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header_hamburger from "@/assets/svg/header_hamburger";
import Icon_cancle from "@/assets/svg/icon_cancle";
import { motion } from "framer-motion";

const H = stylex.create({
  scrolledContainer: {
    height: {
      default: "70px",
      "@media (max-width: 860px)": "auto",
    },
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "fixed",
    zIndex: "99",

    background: {
      default: "rgba(255, 255, 255, 0.60)",
      "@media (max-width: 860px)": "none",
    },
    backdropFilter: {
      default: "blur(30px)",
      "@media (max-width: 860px)": "none",
    },
    borderBottom: "0.3px solid #E6E8EA",
    boxSizing: "border-box",
    transition: "all linear 0.4s 0s",
  },

  unscrolledContainer: (pathname) => ({
    height: {
      default: "70px",
      "@media (max-width: 860px)": "auto",
    },
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    position: "fixed",
    zIndex: "99",
    backdropFilter: "none",
    background: "none",
    boxSizing: "border-box",
    transition: "all linear 0.4s 0s",
  }),
  innerContainer: (pathname, navOpen) => ({
    backgroundColor: {
      default: "none",
      "@media (max-width: 860px)": `${navOpen ? "white" : "none"}`,
    },
    width: {
      default: "834px",
      "@media (max-width: 860px)": "100%",
    },
    display: "flex",
    flexShrink: "0",
    // height: {
    //   default: "100%",
    //   "@media (max-width: 860px)": `${navOpen ? "100vh" : "auto"}`,
    // },

    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": "column",
    },
    alignItems: "center",
    justifyContent: {
      default: "space-between",
      "@media (max-width: 860px)": "flex-start",
    },
  }),

  headerContainer: {
    display: "flex",
    width: "100%",
    height: "40px",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
    backgroundColor: {
      default: "none",
      "@media (max-width: 860px)": "white",
    },
  },
  navContainer: (navOpen, pathname, isScrolled) => ({
    display: {
      default: "flex",
      "@media (max-width: 860px)": `${navOpen ? "flex" : "none"}`,
    },

    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": "column",
    },

    width: {
      default: "480px",
      "@media (max-width: 860px)": "100%",
    },

    height: {
      default: "100%",
      "@media (max-width: 860px)": "170px",
    },
    alignItems: {
      default: "center",
      "@media (max-width: 860px)": "flex-start",
    },

    gap: {
      default: "0",
      "@media (max-width: 860px)": "15px",
    },
    justifyContent: "space-between",
    fontSize: {
      default: "15px",
      "@media (max-width: 860px)": "13px",
    },
    fontWeight: "500",
    borderBottom: {
      default: "23px",
      "@media (max-width: 860px)": "13px",
    },
    transition: "all ease 0.3s 0s",
    flexShrink: 0,
    paddingLeft: {
      default: "none",
      "@media (max-width: 860px)": "20px",
    },
    paddingTop: {
      default: "none",
      "@media (max-width: 860px)": "20px",
    },
    paddingBottom: {
      default: "none",
      "@media (max-width: 860px)": "20px",
    },

    color: {
      default: `${
        isScrolled ? "black" : pathname === "/boss" ? "black" : "white"
      }`,
      "@media (max-width: 860px)": "black",
    },
  }),
  logoContainer: {
    position: "relative",
    width: {
      default: "71.31px",
      "@media (max-width: 860px)": "54.25px",
    },
    height: {
      default: "20.82px",
      "@media (max-width: 860px)": "19.78px",
    },
    objectFit: "contain",
  },
  logo: {
    objectFit: "contain",
  },
  yellowText: {
    color: "#F5C242",
  },
  whiteText: {
    color: "white",
  },

  isMobile: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },

  isPC: {
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
  },

  cancleButton: (navOpen) => ({
    display: {
      default: "none",
      "@media (max-width: 860px)": `${navOpen ? "block" : "none"}`,
    },
  }),

  hamburgerContainer: (navOpen) => ({
    display: {
      default: "none",
      "@media (max-width: 860px)": `${navOpen ? "none" : "block"}`,
    },
  }),

  normalText: (normalColor, isScrolled) => ({
    color: {
      default: `${isScrolled ? "black" : normalColor}`,
      "@media (max-width: 860px)": "black",
    },
  }),
});

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 70 ? true : false);
    console.log("window.scrollY : ", window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);

  return (
    <motion.header
      {...stylex.props(
        isScrolled ? H.scrolledContainer : H.unscrolledContainer(pathname)
      )}
    >
      <div {...stylex.props(H.innerContainer(navOpen, pathname))}>
        <div {...stylex.props(H.headerContainer)}>
          <Link href="/">
            <div
              {...stylex.props(H.logoContainer)}
              onClick={() => setNavOpen(false)}
            >
              <Image
                src={logo_naviyam}
                fill
                alt="나비얌 로고"
                {...stylex.props(H.logo)}
              />
            </div>
          </Link>
          <div
            {...stylex.props(H.cancleButton(navOpen))}
            onClick={() => setNavOpen(false)}
          >
            <Icon_cancle />
          </div>
          <div
            {...stylex.props(H.hamburgerContainer(navOpen))}
            onClick={() => setNavOpen(true)}
          >
            <Header_hamburger />
          </div>
        </div>
        <div {...stylex.props(H.navContainer(navOpen, pathname, isScrolled))}>
          <Link
            href="/card"
            {...stylex.props(pathname === "/card" && H.yellowText)}
            onClick={() => setNavOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.2 }}>급식카드</motion.div>
          </Link>
          <Link
            href="/boss"
            {...stylex.props(pathname === "/boss" && H.yellowText)}
            onClick={() => setNavOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.2 }}>입점 안내</motion.div>
          </Link>
          {/* <Link href="/team">
              <motion.div whileHover={{ scale: 1.2 }}>팀 소개</motion.div>
            </Link> */}
          <Link
            href="/contact"
            {...stylex.props(pathname === "/contact" && H.yellowText)}
            onClick={() => setNavOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.2 }}>문의하기</motion.div>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
