"use client";
import React from "react";

import stylex from "@stylexjs/stylex";
import section1_child from "@/../public/images/boss/boss_section1_child.png";
import section1_yam from "@/../public/images/boss/boss_section1_yam.png";
import section2_food from "@/../public/images/boss/boss_section2_food.png";
import section2_child from "@/../public/images/boss/boss_section2_child.png";
import boss_yam from "@/../public/images/boss/boss_yam.png";

import Image from "next/image";
import { fontColor } from "../../style/tokens.stylex";
import BossInstaSlider from "./slider/bossInstaSlider";

import { InstagramEmbed } from "react-social-media-embed";

import { motion, useScroll } from "framer-motion";

import "../globals.css";

const MOBILE = "@media (max-width: 860px)";

const fadeInPopUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const s = stylex.create({
  container: {
    width: "100vw",
  },
  introContainer: {
    width: "100%",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  introParagraph: {
    fontWeight: "700",
    color: `${fontColor.primaryBlack}`,
    textAlign: "center",
    fontSize: {
      default: "60px",
      "@media (max-width: 860px)": "30px",
    },
  },
  greySectionContainer: {
    paddingTop: "50px",
    paddingBottom: "50px",
    width: "100%",

    backgroundColor: "#F3F5F7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  whiteSectionContainer: {
    marginTop: "200px",
    width: "100%",
    backgroundColor: "white",
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
    alignItems: "flex-start",
  },
  sectionTitle: {
    position: "relative",
    fontSize: {
      default: "50px",
      [MOBILE]: "35px",
    },
    color: `${fontColor.primaryBlack}`,
    fontWeight: "700",
  },
  sectionTitleUnderLine: {
    position: "relative",
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "35px",
    },
    color: `${fontColor.primaryBlack}`,
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
  sectionDescription: {
    fontSize: {
      default: "26px",
      "@media (max-width: 860px)": "20px",
    },
    color: `${fontColor.secondaryGrey}`,
  },

  sectionDescriptionMobileEnd: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: {
      default: "26px",
      "@media (max-width: 860px)": "20px",
    },
    justifyContent: {
      default: "flex-start",
      "@media (max-width: 860px)": "flex-end",
    },
    textAlign: {
      default: "start",
      "@media (max-width: 860px)": "end",
    },
    color: `${fontColor.secondaryGrey}`,
  },
  marginTop: {
    marginTop: "25px",
  },
  section1row: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": "column",
    },
  },

  section2row: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": "column",
    },
  },

  columnLeft: {
    width: {
      default: "auto",
      "@media (max-width: 860px)": "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  bossInterview: {
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": "column",
    },
    flexShrink: "0",
    alignItems: "center",
    marginTop: {
      default: "25px",
      "@media (max-width: 860px)": "20px",
    },
  },
  line: (width) => ({
    width,
    height: "8px",
    backgroundColor: "#FFD023",
  }),

  yamContainer: {
    position: "relative",
    width: {
      default: "397px",
      "@media (max-width: 860px)": "197px",
    },
    height: {
      default: "529px",
      "@media (max-width: 860px)": "263px",
    },
  },

  childContainer: {
    position: "relative",
    width: {
      default: "414px",
      "@media (max-width: 860px)": "270px",
    },
    height: {
      default: "548px",
      "@media (max-width: 860px)": "357px",
    },
  },

  columnRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: {
      default: "0px",
      "@media (max-width: 860px)": "20px",
    },
  },

  nurseryContainer: {
    position: "relative",
    width: {
      default: "438px",
      "@media (max-width: 860px)": "236px",
    },
    height: {
      default: "596px",
      "@media (max-width: 860px)": "320px",
    },
  },

  nurseryChildSectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      default: "flex-start",
      "@media (max-width: 860px)": "flex-end",
    },
    marginTop: {
      default: "0px",
      "@media (max-width: 860px)": "20px",
    },
  },
  nurseryChildImageContainer: {
    position: "relative",
    width: {
      default: "352px",
      "@media (max-width: 860px)": "197px",
    },
    height: {
      default: "264px",
      "@media (max-width: 860px)": "148px",
    },
  },
  mobileBr: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },

  interviewContainer: {
    marginTop: "50px",
    width: "100%",
    flexShrink: "0",
    overflow: "scroll",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },

  bossyamContainer: {
    position: "relative",
    width: {
      default: "141px",
      "@media (max-width: 860px)": "75px",
    },
    height: {
      default: "200px",
      "@media (max-width: 860px)": "109px",
    },
  },
  CTAOuterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  CTAContainer: {
    width: {
      default: "834px",
      [MOBILE]: "80%",
    },
    height: {
      default: "225px",
      [MOBILE]: "109px",
    },
    backgroundColor: "#FFD023",
    borderRadius: "15px",
    display: "flex",

    alignItems: {
      default: "center",
      [MOBILE]: "flex-start",
    },
    justifyContent: {
      default: "space-around",
      [MOBILE]: "flex-start",
    },
  },
  CTAParagraph: {
    fontSize: {
      default: "23px",
      [MOBILE]: "15px",
    },
    color: `${fontColor.primaryBlack}`,
  },

  CTAButton: {
    width: {
      default: "178px",
      [MOBILE]: "67px",
    },
    height: {
      default: "50px",
      [MOBILE]: "19px",
    },
    flexShrink: "0",
    backgroundColor: "#3C3C32",
    borderRadius: "23px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: {
      default: "23px",
      [MOBILE]: "11px",
    },
    fontWeight: "700",
    cursor: "pointer",
  },

  CTAMobileUpper: {
    display: "flex",
    gap: {
      default: "40px",
      [MOBILE]: "20px",
    },
    flexDirection: {
      default: "row",
      [MOBILE]: "column",
    },
    marginLeft: {
      default: "0px",
      [MOBILE]: "20px",
    },
    marginTop: {
      default: "0px",
      [MOBILE]: "20px",
    },
    alignItems: "center",
  },
  CTAInstagram: {
    width: "100%",
  },

  CTAButtonContainer: {
    width: {
      default: "auto",
      [MOBILE]: "100%",
    },
    display: "flex",
    justifyContent: "flex-start",
  },

  solutionSectionOuterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  solutionSection: {
    width: {
      default: "834px",
      [MOBILE]: "85%",
    },
    display: "flex",
    flexDirection: "column",
  },

  solutionGrid: {
    marginTop: "50px",
    display: "grid",
    width: "100%",
    height: {
      default: "1043px",
      [MOBILE]: "600px",
    },
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",

    rowGap: {
      default: "35px",
      [MOBILE]: "15px",
    },
    columnGap: {
      default: "35px",
      [MOBILE]: "15px",
    },
  },
  solutionCard: {
    backgroundColor: "#EEEFF4",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "20px",
    paddingTop: "20px",
    borderRadius: "20px",
  },
  solutionCardTitle: {
    color: `${fontColor.primaryBlack}`,

    fontWeight: "700",
    fontSize: {
      default: "45px",
      [MOBILE]: "20px",
    },
  },
  solutionCardSubTitle: {
    color: `${fontColor.primaryBlack}`,
    fontSize: {
      default: "20px",
      [MOBILE]: "12px",
    },
    fontWeight: "700",
  },
  solutionCardParagraph: {
    color: `${fontColor.secondaryGrey}`,
    fontSize: "20px",
    fontWeight: "700",
  },
});

const page = () => {
  return (
    <div {...stylex.props(s.container)}>
      <motion.div
        {...stylex.props(s.introContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInPopUp}
        transition={{
          duration: 0.6,
        }}
      >
        <p {...stylex.props(s.introParagraph)}>
          영리와 사회적 공헌을 <br /> 함께 추구하세요
        </p>
      </motion.div>

      <div {...stylex.props(s.greySectionContainer)}>
        <div {...stylex.props(s.innerContainer)}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInPopUp}
            transition={{
              duration: 0.6,
            }}
          >
            <p {...stylex.props(s.sectionTitleUnderLine)}>매출의 폭이</p>
            <p {...stylex.props(s.sectionTitle)}>커집니다</p>
          </motion.div>
          <motion.div
            {...stylex.props(s.section1row)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInPopUp}
            transition={{
              duration: 0.6,
            }}
          >
            <div {...stylex.props(s.columnLeft)}>
              <p {...stylex.props(s.sectionDescription, s.marginTop)}>
                후원금 식사권과 아동급식카드로부터 <br /> 추가 수익이
                발생합니다.
              </p>
              <div {...stylex.props(s.childContainer, s.marginTop)}>
                <Image
                  src={section1_child}
                  alt="아이들이 행복해하는 사진"
                  fill
                />
              </div>
            </div>
            <div {...stylex.props(s.columnRight)}>
              <div {...stylex.props(s.yamContainer)}>
                <Image
                  src={section1_yam}
                  fill
                  alt="돈쭐내러 오는 소비자들이 찾아 방문합니다."
                />
              </div>
              <p {...stylex.props(s.sectionDescriptionMobileEnd, s.marginTop)}>
                돈쭐내러오는 소비자들이 <br /> 찾아 방문합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div {...stylex.props(s.whiteSectionContainer)}>
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
          <p {...stylex.props(s.sectionTitleUnderLine)}>보육원 단체주문과</p>
          <p {...stylex.props(s.sectionTitle)}>연결해드립니다</p>
          <div {...stylex.props(s.section2row)}>
            <div {...stylex.props(s.columnLeft)}>
              <div {...stylex.props(s.nurseryContainer, s.marginTop)}>
                <Image
                  src={section2_food}
                  alt="보육원 단체주문 음식 사진들"
                  fill
                />
              </div>
            </div>
            <div {...stylex.props(s.nurseryChildSectionContainer)}>
              <div {...stylex.props(s.nurseryChildImageContainer)}>
                <Image
                  src={section2_child}
                  fill
                  alt="보육원 단체주문 아이들의 사진"
                />
              </div>
              <p {...stylex.props(s.sectionDescriptionMobileEnd, s.marginTop)}>
                관악구 소재 스시 가게는 100명 <br /> 넘는 아이들이 누적
                방문했습니다.
              </p>

              <p {...stylex.props(s.sectionDescriptionMobileEnd, s.marginTop)}>
                강서구 소재 도시락 가게는 30명의 <br /> 보육원 단체주문을
                정기적으로 <br /> 받고 있습니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <BossInstaSlider />

      <section {...stylex.props(s.solutionSectionOuterContainer)}>
        <motion.div
          {...stylex.props(s.solutionSection)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInPopUp}
          transition={{
            duration: 0.6,
          }}
        >
          <p {...stylex.props(s.sectionTitle)}>입점시 발생할</p>
          <p {...stylex.props(s.sectionTitle)}>불편은 없어요</p>

          <div {...stylex.props(s.solutionGrid)}>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                가게등록,
                <br />
                대신 해드려요.
              </p>
            </div>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                빠른 정산,
                <br />
                낮은 수수료(3%).
              </p>
              <p {...stylex.props(s.solutionCardSubTitle)}>
                *결제대행수수료, 부가세 포함 5.39%
              </p>
            </div>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                앱/웹/포스기 <br />
                취향것 골라,
                <br />
                편하게 가게 관리 <br />
              </p>
            </div>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                주문 접수도
                <br />
                쉬워요.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <div {...stylex.props(s.whiteSectionContainer)}>
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
          <p {...stylex.props(s.sectionTitleUnderLine)}>사회적 문제를</p>
          <p {...stylex.props(s.sectionTitleUnderLine)}>해결하는</p>
          <p {...stylex.props(s.sectionTitle)}>동참 사장님들</p>

          <div {...stylex.props(s.interviewContainer)}>
            <div {...stylex.props(s.bossInterview)}>
              <InstagramEmbed url="https://www.instagram.com/reel/C0yRntkg5uI/" />
              <InstagramEmbed url="https://www.instagram.com/reel/C0i7mYZgJdb/" />
            </div>
          </div>
        </motion.div>
      </div>
      <div {...stylex.props(s.CTAOuterContainer)}>
        <div {...stylex.props(s.CTAContainer)}>
          <div {...stylex.props(s.CTAMobileUpper)}>
            <p {...stylex.props(s.CTAParagraph)}>
              <strong>온기를 요리</strong>하는 <br />
              사장님을 위한 <strong>혜택을 챙겨가세요</strong>
            </p>
            <a href="https://forms.gle/cE7u1AUgEfm6GhLWA" target="_blank">
              <div {...stylex.props(s.CTAButton)}>입점 문의</div>
            </a>
          </div>
          <div {...stylex.props(s.bossyamContainer)}>
            <Image src={boss_yam} fill alt="사장님을 위한 혜택을 챙겨가세요" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
