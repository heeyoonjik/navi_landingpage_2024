"use client";
import React, { useRef } from "react";
import stylex, { keyframes } from "@stylexjs/stylex";
import { fontColor } from "../../../style/tokens.stylex";
import Image from "next/image";
import CardIntroMock from "@/assets/png/cardIntroMock.png";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeInPopUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScaleUp = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: { opacity: 1, scale: 1 },
};

const s = stylex.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "black",
    width: "100vw",
    height: "200vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: {
      default: "100px",
      "@media (max-width: 860px)": "50px",
    },
    color: "white",
    textAlign: "center",
  },
  cardContainer: (flexDirection) => ({
    width: "100%",
    height: {
      default: "1000px",
      "@media (max-width: 860px)": "auto",
    },
    display: "flex",
    flexDirection: {
      default: flexDirection,
      "@media (max-width: 860px)": "column-reverse",
    },
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "70px",
  }),
  imageContainer: {
    marginTop: "90px",
  },
  title: (textAlign) => ({
    color: "#3C3C32",
    textAlign: {
      default: textAlign,
      "@media (max-width: 860px)": "left",
    },
    fontSize: {
      default: "48px",
      "@media (max-width: 860px)": "35px",
    },
  }),
  description: (textAlign) => ({
    width: "100%",
    color: "#7B8390",
    fontSize: {
      default: "25px",
      "@media (max-width: 860px)": "20px",
    },
    textAlign,
  }),
  leftAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  rightAlign: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },

  videoStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    flexShrink: "0",
    borderRadius: "20px",
  },

  videoContainer: {
    borderRadius: "20px",
    boxShadow: "0px 4px 30px 0px rgba(0, 0, 0, 0.10)",
    width: {
      default: "308px",
      "@media (max-width: 860px)": "231px",
    },
    height: {
      default: "666px",
      "@media (max-width: 860px)": "455px",
    },
    marginTop: {
      default: "0px",
      "@media (max-width: 860px)": "30px",
    },
    marginBottom: {
      default: "0px",
      "@media (max-width: 860px)": "30px",
    },
  },

  cardIntroMockContainer: {
    position: "relative",
    top: "15vw",
    width: {
      default: "302px",
      "@media (max-width: 860px)": "240px",
    },
    height: {
      default: "559px",
      "@media (max-width: 860px)": "445px",
    },
  },

  titleInnerContainer: {
    position: "sticky",
    top: "40vh",
    width: "100vw",
    overflowX: "hidden",
    height: {
      default: "500px",
      "@media (max-width: 860px)": "350px",
    },
  },
  sectionTitleContainer: {
    width: "100vw",
    overflowX: "hidden",
  },
});

const VideoSection = () => {
  const titleRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["#000000", "#000000", "#FFFFFF"]
  );

  return (
    <section {...stylex.props(s.container)}>
      <motion.div
        {...stylex.props(s.titleContainer)}
        ref={titleRef}
        style={{
          backgroundColor,
        }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInScaleUp}
          transition={{
            duration: 0.6,
          }}
          style={{ scale, opacity }}
          {...stylex.props(s.titleInnerContainer)}
        >
          <h2 {...stylex.props(s.sectionTitle)}>
            급식카드를 <br /> 쉽고 편하게.
          </h2>
        </motion.div>

        <div {...stylex.props(s.cardIntroMockContainer)}>
          <Image
            src={CardIntroMock}
            alt="급식카드인트로앱화면목"
            fill
            {...stylex.props(s.imageContainer)}
          />
        </div>
      </motion.div>

      <div {...stylex.props(s.cardContainer("row-reverse"))}>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          initial="hidden"
          whileInView="visible"
          variants={fadeInPopUp}
          transition={{
            duration: 0.6,
          }}
          {...stylex.props(s.videoContainer)}
        >
          <video
            {...stylex.props(s.videoStyle)}
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src="/videos/nearShop.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInPopUp}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          {...stylex.props(s.leftAlign)}
        >
          <h3 {...stylex.props(s.title("left"))}>
            급식카드 <br /> 간편하게 인증하고
          </h3>
          <p {...stylex.props(s.description("start"))}>
            사진 촬영 한 번이면 끝나요
          </p>
        </motion.div>
      </div>

      <div {...stylex.props(s.cardContainer("row"))}>
        <div {...stylex.props(s.videoContainer)}>
          <video
            {...stylex.props(s.videoStyle)}
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src="/videos/nearShop.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInPopUp}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <h3 {...stylex.props(s.title("right"))}>
            앱에서 내 주변 <br /> 이용 가능 식당 확인하고
          </h3>
          <p {...stylex.props(s.description("right"))}>
            더 이상 거절당하거나 눈치 볼 일 없어요
          </p>
        </motion.div>
      </div>

      <div {...stylex.props(s.cardContainer("row-reverse"))}>
        <div {...stylex.props(s.videoContainer)}>
          <video
            {...stylex.props(s.videoStyle)}
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src="/videos/card_buy.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInPopUp}
          transition={{
            duration: 0.6,
          }}
        >
          <h3 {...stylex.props(s.title("left"))}>
            간편결제로 <br /> 식권 티켓 구매하고
          </h3>
          <p {...stylex.props(s.description("start"))}>
            다양한 할인 혜택으로 저렴하게 구매 가능해요
          </p>
        </motion.div>
      </div>

      <div {...stylex.props(s.cardContainer("row"))}>
        <div {...stylex.props(s.videoContainer)}>
          <video
            {...stylex.props(s.videoStyle)}
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src="/videos/card_ticket.mp4" type="video/mp4" />
          </video>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInPopUp}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <h3 {...stylex.props(s.title("right"))}>
            드시고 싶을 때 <br /> 사장님께 보여드리세요
          </h3>
          <p {...stylex.props(s.description("end"))}>
            급식카드 대신 모바일 티켓만 보여드리세요
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
