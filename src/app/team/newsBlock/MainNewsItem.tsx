import React from "react";
import * as stylex from "@stylexjs/stylex";
import Image, { StaticImageData } from "next/image";

const MOBILE = "@media (max-width: 860px)";

interface ownProps {
  imgUrl: StaticImageData;
  title: string;
  desc: string;
  url: string;
  type?: string;
}

const MainNewsItem = ({ imgUrl, title, desc, url, type }: ownProps) => {
  return (
    <a {...stylex.props(s.container)} href={url} target="_blank">
      <div {...stylex.props(s.leftSection)}>
        {type && <p {...stylex.props(s.subP)}>{desc}</p>}
        <p {...stylex.props(s.titleP)}>{title}</p>

        <p {...stylex.props(s.subP)}>{desc}</p>
      </div>

      <div {...stylex.props(s.imgContainer)}>
        <Image src={imgUrl} fill {...stylex.props(s.img)} alt="언론사진" />
      </div>
    </a>
  );
};

export default MainNewsItem;

const s = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: {
      default: "100%",
      [MOBILE]: "300px",
    },
    gap: "15px",
  },

  leftSection: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "20px",
  },

  imgContainer: {
    position: "relative",
    width: {
      default: "300px",
      [MOBILE]: "100px",
    },
    height: {
      default: "300px",
      [MOBILE]: "100px",
    },
  },

  img: {
    objectFit: "cover",
  },
  titleP: {
    wordBreak: "keep-all",
    color: "#3C3C32",
    fontWeight: "700",
    fontSize: {
      default: "25px",
      [MOBILE]: "20px",
    },
  },
  subP: {
    wordBreak: "keep-all",
    color: "#3C3C32",
    fontSize: {
      default: "20px",
      [MOBILE]: "15px",
    },
  },
});
