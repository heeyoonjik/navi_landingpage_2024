"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import stylex from "@stylexjs/stylex";
import mock_home from "@/../public/images/mock_home.png";

const s = stylex.create({
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
