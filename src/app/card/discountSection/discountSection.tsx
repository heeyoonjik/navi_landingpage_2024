"use client";
import { fontColor } from "../../../style/tokens.stylex";
import stylex from "@stylexjs/stylex";

import React, { useRef } from "react";
import DiscountBoard from "./discountBoard";
import card_emoji_cap from "@/../public/images/card/card_emoji_cap.png";
import card_emoji_discount from "@/../public/images/card/card_emoji_discount.png";
import card_emoji_sushi from "@/../public/images/card/card_emoji_sushi.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import DiscountBanners from "./dicountBanners";

const s = stylex.create({
  container: {
    width: "100%",
    height: {
      default: "5000px",
      "@media (max-width: 860px)": "2000px",
    },

    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: {
      default: "100px",
      "@media (max-width: 860px)": "50px",
    },
    fontWeight: "bold",
    color: "#3C3C32",
    textAlign: "center",
  },
  title: {
    color: "#3C3C32",
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "30px",
    },
    fontWeight: "500",
    textAlign: "center",
    marginTop: "200px",
  },
  description: {
    color: "#7B8390",
    fontSize: {
      default: "30px",
      "@media (max-width: 860px)": "20px",
    },
    textAlign: "center",
  },
  wideContainer: {
    marginTop: "100px",
    width: "100%",
    position: "sticky",
    top: "0px",
    height: {
      default: "100vh",
      "@media (max-width: 860px)": "100vh",
    },
    backgroundColor: "#FFD023",
    display: {
      default: "flex",
      "@media (max-width: 860px)": "none",
    },
    overflowX: {
      default: "hidden",
      "@media (max-width: 860px)": "hidden",
    },
    paddingLeft: {
      default: "calc( 50vw - 168px )",
      "@media (max-width: 860px)": "calc( 50vw - 80px )",
    },
  },

  wideContainerMobile: {
    marginTop: "100px",
    width: "100%",
    position: "sticky",
    top: "0px",
    height: {
      default: "100vh",
      "@media (max-width: 860px)": "100vh",
    },
    backgroundColor: "#FFD023",
    display: {
      default: "none",
      "@media (max-width: 860px)": "flex",
    },
    overflowX: {
      default: "hidden",
      "@media (max-width: 860px)": "hidden",
    },
    paddingLeft: {
      default: "calc( 50vw - 168px )",
      "@media (max-width: 860px)": "calc( 50vw - 80px )",
    },
  },

  banner: {
    width: {
      default: "336px",
      "@media (max-width: 860px)": "160px",
    },
    flexShrink: "0",
    height: {
      default: "518px",
      "@media (max-width: 860px)": "248px",
    },
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.20)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  lastBanner: {
    width: {
      default: "336px",
      "@media (max-width: 860px)": "160px",
    },
    flexShrink: "0",
    height: {
      default: "518px",
      "@media (max-width: 860px)": "248px",
    },
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.20)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: {
      default: "calc( ( 100vw - 1128px ) / 2 )",
      "@media (max-width: 860px)": "-3000px",
    },
  },
  bannerParagraph: {
    fontSize: {
      default: "40px",
      "@media (max-width: 860px)": "24px",
    },
    fontWeight: "700",
    color: "#3C3C32",
    textAlign: "center",
  },

  capContainer: {
    position: "relative",
    width: {
      default: "178px",
      "@media (max-width: 860px)": "107px",
    },
    height: {
      default: "148px",
      "@media (max-width: 860px)": "89px",
    },
  },

  discountEmojiContainer: {
    position: "relative",
    width: {
      default: "191px",
      "@media (max-width: 860px)": "114.97px",
    },
    height: {
      default: "138px",
      "@media (max-width: 860px)": "83.07px",
    },
  },
  sushiContainer: {
    position: "relative",
    width: {
      default: "170px",
      "@media (max-width: 860px)": "102.33px",
    },
    height: {
      default: "132px",
      "@media (max-width: 860px)": "79.46px",
    },
  },

  mobileBr: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },

  sliderContainer: {
    display: "flex",
    gap: {
      default: "60px",
      "@media (max-width: 860px)": "20px",
    },
    alignItems: "center",
  },
});

const DiscountSection = () => {
  const targetRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0.5, 1.0], ["0px", "-792px"]);

  const mobileX = useTransform(scrollYProgress, [0.4, 1.0], ["0px", "-392px"]);

  return (
    <section {...stylex.props(s.container)} ref={targetRef}>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        transition={{
          duration: 0.3,
          ease: "circOut",
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 {...stylex.props(s.sectionTitle)}>
          급식카드의 <br /> 소비를 부담없게.
        </h2>
      </motion.div>
      <h3 {...stylex.props(s.title)}>
        집 근처 가게에서 <br /> 저렴하게 식사하세요
      </h3>
      <p {...stylex.props(s.description)}>
        다양한 음식을 저렴하게 드실 수 있어요
      </p>
      <div {...stylex.props(s.wideContainer)}>
        <motion.div style={{ x }} {...stylex.props(s.sliderContainer)}>
          <DiscountBanners />
        </motion.div>
      </div>
      <div {...stylex.props(s.wideContainerMobile)}>
        <motion.div style={{ x: mobileX }} {...stylex.props(s.sliderContainer)}>
          <DiscountBanners />
        </motion.div>
      </div>
    </section>
  );
};

export default DiscountSection;
