import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";

interface ownProps {
  title: string;
  desc: string;
}

const MOBILE = "@media (max-width: 860px)";

const FAQ = ({ title, desc }: ownProps) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      {...stylex.props(s.container)}
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <div {...stylex.props(s.titleContainer)}>
        <p {...stylex.props(s.titleP)}>{title}</p>
        <svg
          {...stylex.props([s.icon, isOpened && s.iconRotate])}
          width="30"
          height="30"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 1L27 51"
            stroke="#999999"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M1 25L51 25"
            stroke="#999999"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      {isOpened && <p {...stylex.props(s.descP)}>{desc}</p>}
    </div>
  );
};

export default FAQ;

const s = stylex.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "flex-start",
    paddingBottom: "40px",
    borderBottom: "0.8px solid #D9D9D9",
    cursor: "pointer",
  },

  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icon: {
    transition: "all ease 0.2s",
  },

  iconRotate: {
    transform: "rotate( 45deg )",
  },
  titleP: {
    color: "black",
    fontWeight: "600",
    fontSize: {
      default: "25px",
      [MOBILE]: "10px",
    },
  },

  descP: {
    marginTop: "40px",
    color: "black",
    fontSize: {
      default: "25px",
      [MOBILE]: "10px",
    },
  },
});
