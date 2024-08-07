"use client";
import stylex from "@stylexjs/stylex";
import React from "react";
import Image from "next/image";
import icon_instagram from "@/assets/png/icon_instagram.png";
import icon_kakao from "@/assets/png/icon_kakao.png";
import icon_naverblog from "@/assets/png/icon_naverblog.png";
import icon_youtube from "@/assets/png/icon_youtube.png";
import Logo_naviyam_yellow from "@/assets/svg/logo_naviyam_yellow";

const s = stylex.create({
  container: {
    marginTop: "100px",
    width: "100%",
    height: {
      default: "400px",
      "@media (max-width: 860px)": "400px",
    },
    backgroundColor: "#EFEFEF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: {
      default: "834px",
      "@media (max-width: 860px)": "100%",
    },
    display: "flex",

    padding: {
      default: "0px",
      "@media (max-width: 860px)": "20px",
    },
    justifyContent: "space-between",

    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": "column",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",

    height: "100%",
    justifyContent: "space-between",
  },

  infoLinkContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "column",
  },
  infoTextLinkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: {
      default: "350px",
      "@media (max-width: 860px)": "190px",
    },
    fontWeight: "bold",
    color: "#3C3C32",
    fontSize: {
      default: "18px",
      "@media (max-width: 860px)": "13px",
    },
  },
  infoIconLinkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "220px",
    marginTop: {
      default: "30px",
      "@media (max-width: 860px)": "13px",
    },
  },
  infoBusinessContainer: {
    marginTop: {
      default: "110px",
      "@media (max-width: 860px)": "13px",
    },
    display: "flex",
    flexDirection: "column",
    fontSize: {
      default: "13px",
      "@media (max-width: 860px)": "13px",
    },
  },
  infoBusinessText: {
    color: "#080808",
    fontSize: {
      default: "16px",
      "@media (max-width: 860px)": "13px",
    },
  },
  infoBusinessCopyright: {
    color: "#7B8390",
    marginTop: {
      default: "0px",
      "@media (max-width: 860px)": "13px",
    },
  },
  logo: {
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
  },
  brandContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      default: "flex-end",
      "@media (max-width: 860px)": "flex-start",
    },

    marginTop: {
      default: "0px",
      "@media (max-width: 860px)": "30px",
    },
  },
  brandCatch: {
    textAlign: {
      default: "right",
      "@media (max-width: 860px)": "left",
    },
    fontSize: {
      default: "40px",
      "@media (max-width: 860px)": "30px",
    },
    fontWeight: "700",
    color: "#3C3C32",
  },
  logoContainer: {
    marginTop: "20px",
  },

  personInfoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },

  personalInfoP: {
    fontSize: {
      default: "16px",
      "@media (max-width: 860px)": "13px",
    },

    fontWeight: "bold",
    color: "#3C3C32",
  },

  copyrightp: {
    fontSize: {
      default: "16px",
      "@media (max-width: 860px)": "13px",
    },
    marginTop: "10px",
    color: "#3C3C32",
  },
});

const Footer = () => {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.innerContainer)}>
        <div {...stylex.props(s.infoContainer)}>
          <div {...stylex.props(s.infoLinkContainer)}>
            <div {...stylex.props(s.infoTextLinkContainer)}>
              <a href="https://forms.gle/cE7u1AUgEfm6GhLWA" target="_blank">
                <p>입점 문의</p>
              </a>
              <a href="https://forms.gle/wue9x558JVkWnQMP8" target="_blank">
                <p>후원하기</p>
              </a>
              <a href="https://forms.gle/3pCGNWxrY2VNkyBL8" target="_blank">
                <p>취재&인터뷰</p>
              </a>
            </div>
            <div {...stylex.props(s.infoIconLinkContainer)}>
              <a href="https://pf.kakao.com/_Zzjvxj/chat" target="_blank">
                <Image
                  src={icon_kakao}
                  alt={"나눔비타민 카카오톡 로고"}
                  width={24.62}
                  height={21.12}
                />
              </a>
              <a href="https://blog.naver.com/nanumvitamin" target="_blank">
                <Image
                  src={icon_naverblog}
                  alt={"나눔비타민 네이버블로그 로고"}
                  width={26.41}
                  height={21.99}
                />
              </a>
              <a href="https://www.youtube.com/@nanumvitamin" target="_blank">
                <Image
                  src={icon_youtube}
                  alt={"나눔비타민 유튜브 로고"}
                  width={26.72}
                  height={17.47}
                />
              </a>
              <a
                href="https://www.instagram.com/naviyam.official/"
                target="_blank"
              >
                <Image
                  src={icon_instagram}
                  alt={"나눔비타민 인스타그램 로고"}
                  width={23.8}
                  height={22.09}
                />
              </a>
            </div>
          </div>
          <div {...stylex.props(s.infoBusinessContainer)}>
            <p {...stylex.props(s.infoBusinessText)}>
              (주) 나눔비타민 <br /> <br />
              사업자등록번호 672-88-02761 <br />
              대표자 · 개인정보보호책임자 김하연 <br />
              서울 마포구 마포대로 122, (공덕동, 신용보증기금빌딩) 13층
              <br />
              전화번호 070-4006-1389 I 메일 nanumnavi@gmail.com <br />
              <br />
            </p>
            <div {...stylex.props(s.personInfoContainer)}>
              <a
                href="https://www.notion.so/nanumnavi/2e231e3ddec746bba82e5d20541bf5eb"
                target="_blank"
                {...stylex.props(s.personalInfoP)}
              >
                개인정보처리방침
              </a>
              <p {...stylex.props(s.infoBusinessText)}>I</p>
              <a
                href="https://nanumnavi.notion.site/e5dab6a27de743d88ca88a51714ae9d6?pvs=4"
                target="_blank"
                {...stylex.props(s.personalInfoP)}
              >
                이용약관
              </a>
            </div>
            <p {...stylex.props(s.copyrightp)}>
              Copyright 2023. NanumVitamin Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
        <div {...stylex.props(s.brandContainer)}>
          <p {...stylex.props(s.brandCatch)}>
            우리동네
            <br />
            따뜻한 식사
          </p>
          <div {...stylex.props(s.logoContainer)}>
            <Logo_naviyam_yellow />
          </div>
        </div>
      </div>
    </div>
  );
};
//  푸터
// 개인정보처리방침 이용약관

export default Footer;
