"use client";
import stylex from "@stylexjs/stylex";
import Image from "next/image";
import React from "react";
import instagram from "@/assets/png/icon_instagram.png";
import kakao from "@/assets/png/icon_kakao.png";
import naverBlog from "@/assets/png/icon_naverblog.png";
import youtube from "@/assets/png/icon_youtube.png";

const s = stylex.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgContainer: {
    position: "relative",
    width: "100%",
    height: "80vh",
  },
  img: {
    objectFit: "cover",
    zIndex: "-1",
  },
  contentContainer: {
    marginTop: {
      default: "-200px",
      "@media (max-width: 860px)": "-400px",
    },

    width: {
      default: "600px",
      "@media (max-width: 860px)": "80vw",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 97,
  },
  linkContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "75px",
    color: "#3C3C32",
  },
  aContainer: {
    color: "#3C3C32",
    fontSize: {
      default: "35px",
      "@media (max-width: 860px)": "20px",
    },
    fontWeight: "700",
  },
  iconContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const page = () => {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.imgContainer)}>
        <Image
          src="/images/contact/contact_background.png"
          fill
          alt="엄마와 아이가 함께 나비얌을 이용하는 사진"
          {...stylex.props(s.img)}
        />
      </div>
      <div {...stylex.props(s.contentContainer)}>
        <div {...stylex.props(s.linkContainer)}>
          <a
            href="https://forms.gle/cE7u1AUgEfm6GhLWA"
            target="_blank"
            {...stylex.props(s.aContainer)}
          >
            <p>입점 문의</p>
          </a>
          <a
            href="https://forms.gle/wue9x558JVkWnQMP8"
            target="_blank"
            {...stylex.props(s.aContainer)}
          >
            <p>후원하기</p>
          </a>
          <a
            href="https://forms.gle/3pCGNWxrY2VNkyBL8"
            target="_blank"
            {...stylex.props(s.aContainer)}
          >
            <p>기사요청</p>
          </a>
        </div>
        <div {...stylex.props(s.iconContainer)}>
          <a href="https://pf.kakao.com/_Zzjvxj/chat" target="_blank">
            <Image
              src={kakao}
              alt={"나눔비타민 카카오톡 로고"}
              width={38}
              height={33}
            />
          </a>
          <a href="https://blog.naver.com/nanumvitamin" target="_blank">
            <Image src={naverBlog} alt="네이버 블로그" width={38} height={33} />
          </a>
          <a href="https://www.youtube.com/@nanumvitamin" target="_blank">
            <Image
              src={youtube}
              alt={"나눔비타민 유튜브 로고"}
              width={38}
              height={33}
            />
          </a>
          <a href="https://www.instagram.com/naviyam.official/" target="_blank">
            <Image
              src={instagram}
              alt={"나눔비타민 인스타그램 로고"}
              width={38}
              height={33}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
