import React from "react";
import stylex, { keyframes } from "@stylexjs/stylex";
import Image from "next/image";
import IntroBackground from "@/assets/png/HomeIntroBackground.png";
import { fontColor } from "../../style/tokens.stylex";
import Qr from "@/assets/svg/qr";
import mock_home from "@/../public/images/mock_home.png";
import mobile_background from "@/../public/images/home/home_mobile_background.png";
import Google from "@/assets/svg/icon_gogglePay";
import Apple from "@/assets/svg/icon_appStore";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const s = stylex.create({
  container: {
    width: "100vw",
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
    color: fontColor.white,
    fontSize: {
      default: "46px",
      "@media (max-width: 860px)": "20px",
    },
  },

  paragraph: {
    fontWeight: "300",
    fontSize: {
      default: "24px",
      "@media (max-width: 860px)": "12px",
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
      "@media (max-width: 860px)": "150px",
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
    backgroundColor: "#F5C242",
    display: "flex",
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

const Introducton = () => {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.contentContainer)}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1 {...stylex.props(s.title)}>
            우리 동네 착한 가게와 함께하는 <br />
            따뜻한 식사나눔 플랫폼
          </h1>
          <p {...stylex.props(s.paragraph)}>
            나비얌은 결식 우려 아동과 지역 가게를 연결하여 <br />
            사회 각층의 결식문제를 해결하고
            <br {...stylex.props(s.lineJump)} />
            지역 상권을 활성화합니다.
          </p>
          <div {...stylex.props(s.downloadBoxContainer)}>
            <p>앱 다운로드</p>
            <div {...stylex.props(s.qrContainer)}>
              <Qr width="110" height="110" />
            </div>
          </div>
          <div {...stylex.props(s.mobileDownloadContainer)}>
            <button {...stylex.props(s.downloadButton)}>
              <Google />
            </button>
            <button {...stylex.props(s.downloadButton)}>
              <Apple />
            </button>
          </div>
        </motion.div>
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
      </div>

      <Image
        src={IntroBackground}
        alt="엄마와 아이가 함께 나비얌 앱을 보는 이미지"
        fill
        {...stylex.props(s.backgroundImage)}
      />
      <Image
        src={mobile_background}
        alt="엄마와 아이가 함께 나비얌 앱을 보는 이미지"
        fill
        {...stylex.props(s.mobileBackgroundImage)}
      />
    </div>
  );
};

export default Introducton;
