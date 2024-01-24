"use client";

import React, { useEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import VideoSection from "./videoSection/videoSection";
import DiscountSection from "./discountSection/discountSection";
import NaviStoreSection from "./navistoreSection/naviStoreSection";
import DownloadSection from "./downloadSection/downloadSection";
import Qr from "@/assets/svg/qr";
import appStore from "@/assets/png/icon_appStore.png";
import playStore from "@/assets/png/icon_googlePlay.png";
import Image from "next/image";
import { motion } from "framer-motion";
import DiscountBoard from "./discountSection/discountBoard";

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: {
      default: "12000px",
      "@media (max-width: 860px)": "9450px",
    },
  },
  innerContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  h1titleContainer: {
    height: 0,
    overflow: "hidden",
  },
  introTitle: {
    fontSize: "100px",
  },
  downloadContainer: {
    position: "sticky",
    bottom: {
      default: "20px",
      "@media (max-width: 860px)": "40px",
    },
    zIndex: 98,
    width: {
      default: "100px",
      "@media (max-width: 860px)": "280px",
    },
    height: {
      default: "100px",
      "@media (max-width: 860px)": "auto",
    },
    borderRadius: "10px",
    backgroundColor: {
      default: "white",
      "@media (max-width: 860px)": "transparent",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: {
      default: "center",
      "@media (max-width: 860px)": "space-between",
    },
    marginTop: {
      default: "350px",
      "@media (max-width: 860px)": "380px",
    },
    flexShrink: 0,

    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.20))",
  },

  downloadButton: {
    width: "136.7px",
    height: "43.31px",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "4px",

    display: {
      default: "none",
      "@media (max-width: 860px)": "flex",
    },
  },

  qrContainer: {
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
  },

  appleWrapper: {
    position: "relative",
    width: "77.5px",
    height: "16.72px",
  },
  playStoreWrapper: {
    position: "relative",
    width: "88.14px",
    height: "16.42px",
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
  mobileBr: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },
});

const page = () => {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.innerContainer)}>
        <div {...stylex.props(s.h1titleContainer)}>
          <h1>
            나비얌에서 급식카드만 있다면 받을 수 있는 모든 할인 혜택 챙겨가세요
          </h1>
        </div>
        <VideoSection />
        <DiscountSection />
        <h3 {...stylex.props(s.title)}>
          급식카드 인증하고, <br /> 모든 할인, 나눔 혜택{" "}
          <br {...stylex.props(s.mobileBr)} /> 알뜰하게 챙기세요.
        </h3>
        <p {...stylex.props(s.description)}>
          어디서도 볼 수 없는 가격, <br {...stylex.props(s.mobileBr)} /> 오직
          나비얌에서만
        </p>
        <DiscountBoard />
        <NaviStoreSection />
        <motion.div
          initial={{
            y: 150,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            duration: "0.8",
            ease: "backInOut",
          }}
          {...stylex.props(s.downloadContainer)}
        >
          <div {...stylex.props(s.qrContainer)}>
            <Qr width="80" height="80" />
          </div>
          <a
            href="https://apps.apple.com/kr/app/%EB%82%98%EB%B9%84%EC%96%8C-%EA%B8%89%EC%8B%9D%EC%B9%B4%EB%93%9C%EB%A5%BC-%EC%89%BD%EA%B3%A0-%ED%8E%B8%ED%95%98%EA%B2%8C/id6449865025"
            target="_blank"
          >
            <div {...stylex.props(s.downloadButton)}>
              <div {...stylex.props(s.appleWrapper)}>
                <Image src={appStore} alt="앱스토어나비얌" fill />
              </div>
            </div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.naviclient&hl=ko&gl=US"
            target="_blank"
          >
            <div {...stylex.props(s.downloadButton)}>
              <div {...stylex.props(s.playStoreWrapper)}>
                <Image src={playStore} alt="플레이스토어나비얌" fill />
              </div>
            </div>
          </a>
        </motion.div>
        <DownloadSection />
      </div>
    </div>
  );
};

export default page;
