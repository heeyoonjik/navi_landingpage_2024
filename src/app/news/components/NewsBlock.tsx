import React from "react";
import stylex from "@stylexjs/stylex";
import Image from "next/image";

const s = stylex.create({
  mainContainer: {
    display: "flex",
  },

  subContainer: {
    display: "flex",
    flexDirection: "column",
  },

  body: {
    display: "flex",
    flexDirection: "column",
  },
});

interface NewsBlockProps {
  type: "main" | "sub";
}

const NewsBlock = ({ type }: NewsBlockProps) => {
  return (
    <div {...stylex.props(type === "main" ? s.mainContainer : s.subContainer)}>
      <div {...stylex.props(s.body)}>
        <p>MOU</p>
        <p>우리 동네 착한 가게와 함께...</p>
        <p>나비얌은 어쩌고..</p>
      </div>
      {/* <Image /> */}
    </div>
  );
};

export default NewsBlock;
