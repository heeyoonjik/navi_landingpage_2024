"use client";
import stylex from "@stylexjs/stylex";
import Image from "next/image";
import React, { useRef } from "react";
import dumpling from "@/../public/images/card/card_navishop_dumpling.png";
import orange from "@/../public/images/card/card_navishop_orange.png";
import rice from "@/../public/images/card/card_navishop_rice.png";
import spoon from "@/../public/images/card/card_navishop_spoon.png";
import { fontColor } from "../../../../style/tokens.stylex";
import { motion, useScroll, useTransform } from "framer-motion";

const s = stylex.create({
  container: {
    width: "100vw",
    height: "1000px",
    borderRadius: "23px",
    marginTop: "230px",
    position: "relative",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  dumplingImageConainer: {
    position: "absolute",
    marginRight: "800px",
    marginTop: "-500px",
    width: {
      default: "511px",
      "@media (max-width: 860px)": "157px",
    },
    height: {
      default: "292px",
      "@media (max-width: 860px)": "90px",
    },
  },
  spoonImageContainer: {
    position: "absolute",
    width: {
      default: "861px",
      "@media (max-width: 860px)": "265px",
    },
    height: {
      default: "861px",
      "@media (max-width: 860px)": "265px",
    },
    zIndex: "89",
  },
  riceImageContainer: {
    position: "absolute",
    marginRight: "900px",
    marginTop: "400px",
    width: {
      default: "440px",
      "@media (max-width: 860px)": "105px",
    },
    height: {
      default: "455px",
      "@media (max-width: 860px)": "109px",
    },
  },
  orangeImageContainer: {
    position: "absolute",
    marginLeft: "800px",
    marginTop: "570px",
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
    width: {
      default: "299px",
      "@media (max-width: 860px)": "92px",
    },
    height: {
      default: "344px",
      "@media (max-width: 860px)": "103px",
    },
  },

  sectionTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: {
      default: "100px",
      "@media (max-width: 860px)": "50px",
    },
    fontWeight: "700",
    color: `${fontColor.primaryBlack}`,
    textAlign: "center",
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    position: "relative",
    backgroundColor: "#FFD32F",
    width: "100%",
    height: "540px",
    // position: "sticky",
    top: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  strong: {
    zIndex: "97",
  },
});

const NavistoreIntro = () => {
  const targetRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate1 = useTransform(scrollYProgress, [0, 1], ["0deg", "16deg"]);

  const rotate2 = useTransform(scrollYProgress, [0, 1], ["0deg", "-50deg"]);

  const popUp = useTransform(scrollYProgress, [0, 1], ["300px", "0px"]);

  const width = useTransform(scrollYProgress, [0, 1], ["45%", "100%"]);

  const dum = useTransform(scrollYProgress, [0, 0.9, 0.91, 1], [0, 0, 0, 1]);

  const fadeIn = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div {...stylex.props(s.container)} ref={targetRef}>
      <motion.div {...stylex.props(s.innerContainer)} style={{ width }} layout>
        <div {...stylex.props(s.sectionTitle)}>
          <p {...stylex.props(s.strong)}>급식카드의 </p>
          <p>소비를 다채롭게</p>
        </div>
        <motion.div
          {...stylex.props(s.spoonImageContainer)}
          style={{ y: popUp, opacity: fadeIn }}
        >
          <Image
            style={{ zIndex: 89 }}
            src={spoon}
            alt="나비얌은 다양한 상품을 급식카드 소지자에게 유통합니다. 급식카드 소지 아이 청소년들이 다양한 음식을 먹을 수 있도록 돕고 있습니다."
            fill
          />
        </motion.div>
        <motion.div
          {...stylex.props(s.dumplingImageConainer)}
          style={{ rotate: rotate1, opacity: dum }}
        >
          <Image
            src={dumpling}
            alt="나비얌은 다양한 상품을 급식카드 소지자에게 유통합니다. 그 중 만두가 있습니다."
            fill
          />
        </motion.div>
        <motion.div
          {...stylex.props(s.riceImageContainer)}
          style={{ rotate: rotate2 }}
        >
          <Image
            src={rice}
            alt="나비얌은 다양한 상품을 급식카드 소지자에게 유통합니다. 그 중 주먹밥이 있습니다."
            fill
          />
        </motion.div>

        <div {...stylex.props(s.orangeImageContainer)}>
          <Image
            src={orange}
            alt="나비얌은 다양한 상품을 급식카드 소지자에게 유통합니다. 그 중 만두가 있습니다."
            fill
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NavistoreIntro;
