"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import stylex from "@stylexjs/stylex";
import { fontColor } from "../style/tokens.stylex";

const s = stylex.create({
  line: {
    width: "100%",
    color: "#3C3C32",
    fontSize: "35px",
    fontWeight: "700",
  },
});

const DynamicLine = (children: any) => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div {...stylex.props(s.line)} />
      {children}
    </div>
  );
};

export default DynamicLine;
