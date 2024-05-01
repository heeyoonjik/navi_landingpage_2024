import React from "react";
import * as stylex from "@stylexjs/stylex";
import Image, { StaticImageData } from "next/image";

const MOBILE = "@media (max-width: 860px)";

interface ownProps {
  imgUrl: StaticImageData;
  title: string;
  desc: string;
  url: string;
}

const NewsItem = ({ imgUrl, title, desc, url }: ownProps) => {
  return (
    <a {...stylex.props(s.container)} href={url} target="_blank">
      <div {...stylex.props(s.imgContainer)}>
        <Image src={imgUrl} fill {...stylex.props(s.img)} alt="언론사진" />
      </div>
      <div {...stylex.props(s.labelContainer)}>
        <p {...stylex.props(s.titleP)}>{title}</p>

        <p {...stylex.props(s.subP)}>{desc}</p>
      </div>
    </a>
  );
};

export default NewsItem;

const s = stylex.create({
  container: {
    display: "flex",
    flexDirection: {
      default: "column",
      [MOBILE]: "row",
    },
    alignItems: "flex-start",

    width: {
      default: "300px",
      [MOBILE]: "100%",
    },

    gap: "15px",
  },

  imgContainer: {
    position: "relative",
    width: {
      default: "300px",
      [MOBILE]: "200px",
    },
    height: {
      default: "300px",
      [MOBILE]: "200px",
    },
  },

  img: {
    objectFit: "contain",
  },
  titleP: {
    color: "#3C3C32",
    fontWeight: "700",
    fontSize: {
      default: "25px",
      [MOBILE]: "16px",
    },
    wordBreak: "keep-all",
  },
  subP: {
    color: "#3C3C32",
    fontSize: {
      default: "20px",
      [MOBILE]: "14px",
    },
    wordBreak: "keep-all",
  },

  labelContainer: {
    width: {
      default: "100%",
      [MOBILE]: "50%",
    },
    display: "flex",
    flexDirection: "column",
    gap: {
      default: "10px",
      [MOBILE]: "6px",
    },
  },
});
