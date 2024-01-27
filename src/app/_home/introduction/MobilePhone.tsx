"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import stylex from "@stylexjs/stylex";
import mock_home from "@/../public/images/mock_home.png";

const s = stylex.create({
  container: {
    width: "100%",
    height: {
      default: "100vh",
      "@media (max-width: 860px)": "55vh",
    },
    position: "relative",
    display: "flex",
    justifyContent: "center",
    paddingTop: "110px",
    marginBottom: "100px",
  },

  backgroundImage: {
    zIndex: -99,
    objectFit: "cover",
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
  },
  mobileBackgroundImage: {
    zIndex: -99,
    objectFit: "cover",
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },
  contentContainer: {
    width: {
      default: "843px",
      "@media (max-width: 860px)": "320px",
    },
    marginTop: {
      default: "100px",
      "@media (max-width: 860px)": "0px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
  },

  title: {
    wordBreak: "keep-all",
    color: "white",
    fontSize: {
      default: "46px",
      "@media (max-width: 860px)": "30px",
    },
  },

  paragraph: {
    wordBreak: "keep-all",
    fontWeight: "300",
    fontSize: {
      default: "24px",
      "@media (max-width: 860px)": "20px",
    },
    color: "#E0E0E0",
    marginTop: {
      default: "22px",
      "@media (max-width: 860px)": "10px",
    },
  },
  qrContainer: {
    width: "140px",
    height: "140px",
    borderRadius: "20px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    position: "sticky",
    marginTop: "5px",
  },
  downloadBoxContainer: {
    display: {
      default: "flex",
      "@media (max-width: 860px)": "none",
    },
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  lineJump: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },
  mockPhoneContinaer: {
    zIndex: "98",
    position: "absolute",
    right: {
      default: "0px",
      "@media (max-width: 860px)": "0px",
    },
    top: {
      default: "200px",
      "@media (max-width: 860px)": "200px",
    },

    width: {
      default: "449px",
      "@media (max-width: 860px)": "214px",
    },
    height: {
      default: "550px",
      "@media (max-width: 860px)": "262px",
    },
  },
  mockHome: {
    objectFit: "contain",
  },

  downloadButton: {
    height: "22px",
    display: {
      default: "none",
      "@media (max-width: 860px)": "flex",
    },
    backgroundColor: "#F5C242",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "4px",
  },
  mobileDownloadContainer: {
    marginTop: "13px",
    display: {
      default: "none",
      "@media (max-width: 860px)": "flex",
    },
    justifyContent: "space-between",
    alignItems: "center",
    width: "155px",
  },
});

const MobilePhone = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      {...stylex.props(s.mockPhoneContinaer)}
    >
      <Image
        src={mock_home}
        fill
        alt="나비얌 스마트폰 홈화면 캡쳐 이미지"
        {...stylex.props(s.mockHome)}
      />
    </motion.div>
  );
};

export default MobilePhone;
