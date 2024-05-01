"use client";
import stylex, { keyframes, props } from "@stylexjs/stylex";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { instaImagesUpper, instaImagesBelow } from "./sliderData";
import { color, fontColor } from "../../../style/tokens.stylex";
import { motion } from "framer-motion";
import yooganelogo from "@/../public/images/boss/insta/yooganelogo.png";
import youthlogo from "@/../public/images/boss/insta/youthlogo.png";
import tokyologo from "@/../public/images/boss/insta/tokyologo.jpg";

const fadeInPopUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const infiniteAnimation1 = stylex.keyframes({
  "0%": { transform: "translateX(0%)" },
  "50%": { transform: "translateX(-100%)" },
  "50.001%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(0%)" },
});

const infiniteAnimation2 = stylex.keyframes({
  "0%": { transform: "translateX(0%)" },
  "100%": { transform: "translateX(-200%)" },
});

const s = stylex.create({
  container: {
    width: "100%",
    paddingTop: "87px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerContainer: {
    width: {
      default: "834px",
      "@media (max-width: 860px)": "80%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "100px",
  },

  description: {
    color: "#7B8390",
    fontSize: {
      default: "30px",
      "@media (max-width: 860px)": "20px",
    },
    marginTop: "20px",
  },

  sliderContainer: {
    width: {
      default: "834px",
      "@media (max-width: 860px)": "100%",
    },
    height: {
      default: "300px",
      "@media (max-width: 860px)": "150px",
    },
    display: "flex",
    alignItems: "center",
    overflowX: "hidden",
    flexWrap: "nowrap",
  },

  paddingLeft: {
    paddingLeft: "100px",
  },

  original: {
    display: "flex",
    columnGap: "20px",
    animationName: infiniteAnimation1,
    animationDuration: "50s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: "normal",
    animationFillMode: "none",
  },
  clone: {
    display: "flex",
    columnGap: "20px",
    animationName: infiniteAnimation2,
    animationDuration: "50s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },

  sectionTitle: {
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "35px",
    },
    color: "#3C3C32",
    fontWeight: "700",
  },

  sectionTitleUnderLine: {
    wordBreak: "keep-all",
    position: "relative",
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "35px",
    },
    textAlign: "center",
    color: "#3C3C32",
    fontWeight: "700",
    zIndex: "1",
    "::after": {
      content: "",
      position: "absolute",
      zIndex: "-1",
      bottom: "2px",
      left: "-4px",
      width: "100%",
      height: "22px",
      background:
        "linear-gradient(90deg, #FFD023 0.03%, rgba(255, 208, 35, 0.00) 103.37%)",
    },
  },

  sliderTotalContainer: {
    width: "100vw",
    height: {
      default: "700px",
      "@media (max-width: 860px)": "300px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEEFF4",
    marginTop: "40px",
  },
  mobileVisible: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },

  subDescription: {
    color: "#7B8390",
    fontSize: {
      default: "20px",
      "@media (max-width: 860px)": "15px",
    },
  },

  imageContainer: {
    position: "relative",
    width: {
      default: "232px",
      "@media (max-width: 860px)": "111px",
    },
    height: {
      default: "289px",
      "@media (max-width: 860px)": "138px",
    },
  },

  logoImg: {
    position: "relative",
    width: {
      default: "160px",
      "@media (max-width: 860px)": "74px",
    },
    height: {
      default: "120px",
      "@media (max-width: 860px)": "92px",
    },
  },
});

const BossInstaSlider = () => {
  return (
    <div {...stylex.props(s.container)}>
      <motion.div
        {...stylex.props(s.innerContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInPopUp}
        transition={{
          duration: 0.6,
        }}
      >
        <p {...stylex.props(s.sectionTitleUnderLine)}>
          전국 4500곳 넘는 가게와 프렌차이즈가
        </p>
        <p {...stylex.props(s.sectionTitle)}>나비얌과 함게합니다</p>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginBottom: "20px",
            gap: "20px",
          }}
        >
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={yooganelogo}
              alt="유가네 로고"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={youthlogo}
              alt="청년문간밥상 로고"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={tokyologo}
              alt="도쿄스테이크 로고"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div {...stylex.props(s.sliderTotalContainer)}>
          <div {...stylex.props(s.sliderContainer)}>
            <div {...stylex.props(s.original)}>
              {instaImagesUpper.map((item) => (
                <div key={item.src} {...stylex.props(s.imageContainer)}>
                  <Image src={item} alt="인스타이미지" fill />
                </div>
              ))}
            </div>
            <div {...stylex.props(s.clone)}>
              {instaImagesUpper.map((item) => (
                <div key={item.src} {...stylex.props(s.imageContainer)}>
                  <Image src={item} alt="인스타이미지" fill />
                </div>
              ))}
            </div>
          </div>

          <div {...stylex.props(s.sliderContainer, s.paddingLeft)}>
            <div {...stylex.props(s.original)}>
              {instaImagesBelow.map((item) => (
                <div key={item.src} {...stylex.props(s.imageContainer)}>
                  <Image src={item} alt="인스타이미지" fill />
                </div>
              ))}
            </div>
            <div {...stylex.props(s.clone)}>
              {instaImagesBelow.map((item) => (
                <div key={item.src} {...stylex.props(s.imageContainer)}>
                  <Image src={item} alt="인스타이미지" fill />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BossInstaSlider;
