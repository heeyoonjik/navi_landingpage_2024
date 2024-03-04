"use client";
import React, { useEffect, useState } from "react";
import stylex, { keyframes } from "@stylexjs/stylex";
import Qr from "@/assets/svg/qr";
import MobilePhone from "./MobilePhone";

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
    backgroundImage: `url("/images/home/home_mobile_background.png")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
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
    gap: "10px",
  },

  title: {
    wordBreak: "keep-all",
    color: "white",
    fontSize: {
      default: "46px",
      "@media (max-width: 860px)": "25px",
    },
  },

  paragraph: {
    wordBreak: "keep-all",
    fontWeight: "300",
    fontSize: {
      default: "24px",
      "@media (max-width: 860px)": "15px",
    },
    color: "#E0E0E0",
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

  mobileDownloadButton: {
    width: "120px",
    height: "40px",
    borderRadius: "20px",
    backgroundColor: "#F5C242",
    border: "none",
    fontWeight: "500",
    fontSize: "15px",
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },
});

const Introducton = () => {
  const [downloadUrl, setDownloadUrl] = useState<string>("");

  useEffect(() => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
    }

    if (navigator.userAgent.match(/iPhone/i)) {
      setDownloadUrl(
        "https://apps.apple.com/kr/app/%EB%82%98%EB%B9%84%EC%96%8C-%EA%B8%89%EC%8B%9D%EC%B9%B4%EB%93%9C%EB%A5%BC-%EC%89%BD%EA%B3%A0-%ED%8E%B8%ED%95%98%EA%B2%8C/id6449865025"
      );
    }

    if (navigator.userAgent.match(/Android/i)) {
      setDownloadUrl(
        "https://play.google.com/store/apps/details?id=com.naviclient&hl=ko&gl=US"
      );
    }
  }, []);

  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.contentContainer)}>
        <h1 {...stylex.props(s.title)}>
          우리 동네 <br />
          착한 가게와 함께하는
          <br />
          따뜻한 식사 플랫폼
        </h1>
        <p {...stylex.props(s.paragraph)}>
          사회 각층의 결식문제를 해결하고 <br /> 지역 상권을 활성화합니다.
        </p>
        <div {...stylex.props(s.downloadBoxContainer)}>
          <p>앱 다운로드</p>
          <div {...stylex.props(s.qrContainer)}>
            <Qr width="110" height="110" />
          </div>
        </div>
        <a href={downloadUrl} target="_blank">
          <button {...stylex.props(s.mobileDownloadButton)}>앱 다운로드</button>
        </a>

        <MobilePhone />
      </div>
    </div>
  );
};

export default Introducton;
