import React from "react";
import stylex, { keyframes } from "@stylexjs/stylex";
import { fontColor } from "../../../style/tokens.stylex";
import NavistoreSlider from "./content/navistoreSlider";
import NavistoreIntro from "./intro/navistoreIntro";

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: {
      default: "100px",
      "@media (max-width: 860px)": "50px",
    },
    marginTop: "180px",
    color: "#3C3C32",
    textAlign: "center",
  },
});
const NaviStoreSection = () => {
  return (
    <section {...stylex.props(s.container)}>
      <NavistoreIntro />
      <NavistoreSlider />
    </section>
  );
};

export default NaviStoreSection;
