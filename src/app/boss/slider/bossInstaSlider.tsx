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
import dosiraklogo from "@/../public/images/boss/insta/dosiraklogo.jpg";
import hwapyeongdonglogo from "@/../public/images/boss/insta/hwapyeongdonglogo.png";
import noodletreelogo from "@/../public/images/boss/insta/noodletreelogo.png";
import goodlogo from "@/../public/images/boss/insta/goodlogo.jpg";
import mirilogo from "@/../public/images/boss/insta/mirilogo.png";

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
    overflowY: "hidden",
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
    textAlign: "center",
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "35px",
    },
    color: "#3C3C32",
    fontWeight: "700",
  },

  sectionTitleUnderLine: {
    marginTop: {
      default: "200px",
      "@media (max-width: 860px)": "50px",
    },
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
    paddingTop: "20px",
    width: "100vw",
    height: {
      default: "700px",
      "@media (max-width: 860px)": "400px",
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

  viral: {
    color: "#7B8390",
    fontSize: {
      default: "30px",
      "@media (max-width: 860px)": "15px",
    },
    textAlign: "center",
    marginTop: "20px",
    paddingBottom: "20px",
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
          기존 오프라인에서 이루어지던 식사나눔,
        </p>
        <p {...stylex.props(s.sectionTitle)}>나비얌에서 더 편하게 관리하세요</p>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginBottom: "20px",
            gap: "20px",
            width: "80vw",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={youthlogo}
              alt="청년밥상문간은 나비얌과 함께합니다. 나비얌의 기술지원을 통해 청년밥상문간에서 편한 식사지원 관리 시스템을 이용중입니다."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={goodlogo}
              alt="선한영향력가게는 나비얌과 함께합니다. 나비얌을 통해 기존의 불편했던 결식아동 나눔시스템을 혁신하였고, 더 많은 사장님들이 부담없이 원하는 만큼만 결식아이들에게 후원할 수 있도록 기술지원을 하고 있습니다."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={mirilogo}
              alt="미리내운동은 나비얌과 함께합니다. 나비얌을 통해 미리내운동이 퍼지도록 돕고있습니다. 미리내운동이 온라인화된 나비얌에서 이웃을 위해 식사를 쿠폰 형식으로 기부할 수 있습니다. 식사권 선물 또한 가능합니다."
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <p {...stylex.props(s.sectionTitleUnderLine)}>
          전국 4500곳 넘는 가게와 프랜차이즈가
        </p>
        <p {...stylex.props(s.sectionTitle)}>나비얌과 함께합니다</p>

        <div
          style={{
            display: "flex",
            marginTop: "40px",
            marginBottom: "20px",
            gap: "20px",
            width: "80vw",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
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
              src={tokyologo}
              alt="도쿄스테이크 로고"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={noodletreelogo}
              alt="국수나무 로고"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={hwapyeongdonglogo}
              alt="화평동왕냉면 로고"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div {...stylex.props(s.logoImg)}>
            <Image
              src={dosiraklogo}
              alt="행복도시락 사회적협동조합 로고"
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
          <p {...stylex.props(s.viral)}>
            나비얌 가게는 각종 SNS와 블로그에 착한 가게로 소개됩니다. <br />
            순차적으로 콘텐츠를 만들어드려요
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BossInstaSlider;
