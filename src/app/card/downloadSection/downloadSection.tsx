"use client";
import stylex from "@stylexjs/stylex";
import React from "react";

import { fontColor } from "../../../style/tokens.stylex";
import LineQrToPhone from "@/assets/svg/lineQrToPhone";
import { motion } from "framer-motion";

const s = stylex.create({
  container: {
    width: "100%",

    height: {
      default: "560px",
      "@media (max-width: 860px)": "450px",
    },
    position: "absolute",
    bottom: {
      default: "-100px",
      "@media (max-width: 860px)": "-20px",
    },
    backgroundColor: "#FFD32F",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paragraph: {
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "30px",
    },
    color: "#3C3C32",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: "30px",
  },
  qrContainer: {
    width: "140px",
    height: "140px",
    borderRadius: "20px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    flexShrink: 0,
    position: "sticky",
    bottom: 0,
  },
  box: {
    width: "100px",
    height: "100px",
  },
  boxContainer: {
    position: "sticky",
  },
  lineContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  phoneContainer: {
    marginRight: "25px",
  },
});

const DownloadSection = () => {
  return (
    <div {...stylex.props(s.container)}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        {...stylex.props(s.lineContainer)}
      >
        <p {...stylex.props(s.paragraph)}>
          혜택을 <br /> 꼭 챙겨가세요
        </p>

        <LineQrToPhone />
      </motion.div>
    </div>
  );
};

export default DownloadSection;
