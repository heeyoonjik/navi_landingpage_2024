"use client";
import stylex from "@stylexjs/stylex";
import React from "react";
import { motion } from "framer-motion";

const fadeInPopUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const s = stylex.create({
  container: (backgroundColor) => ({
    marginBottom: {
      default: "100px",
      "@media (max-width: 860px)": "30px",
    },
    width: "100%",
    height: {
      default: "740px",
      "@media (max-width: 860px)": "auto",
    },
    backgroundColor: `${backgroundColor === "white" ? "white" : "#FFFDE9"} `,
    paddingTop: {
      default: "0px",
      "@media (max-width: 860px)": "65px",
    },
    display: "flex",
    justifyContent: "center",
  }),
  innerContainer: (flexDirection) => ({
    display: "flex",
    flexDirection: {
      default: "row",
      "@media (max-width: 860px)": flexDirection,
    },

    width: {
      default: "834px",
      "@media (max-width: 860px)": "320px",
    },

    height: {
      default: "100%",
      "@media (max-width: 860px)": "auto",
    },
    justifyContent: {
      default: "space-between",
      "@media (max-width: 860px)": "flex-start",
    },
    alignItems: {
      default: "center",
      "@media (max-width: 860px)": "center",
    },
  }),

  category: {
    fontSize: {
      default: "18px",
      "@media (max-width: 860px)": "12px",
    },
    color: "#F5C242",
    fontWeight: "bold",
  },

  title: {
    color: "#3C3C32",

    fontSize: {
      default: "40px",
      "@media (max-width: 860px)": "25px",
    },
    fontWeight: "600",
    marginTop: "6px",
  },

  description: {
    color: "#7B8390",
    fontSize: {
      default: "20px",
      "@media (max-width: 860px)": "13px",
    },
    marginTop: "10px",
  },
  column: {
    width: {
      default: "auto",
      "@media (max-width: 860px)": "100%",
    },
    display: "flex",
    flexDirection: "column",
    marginBottom: {
      default: "0px",
      "@media (max-width: 860px)": "35px",
    },
  },
  button: (marginLeft) => ({
    backgroundColor: "#E3E3E3",
    paddingLeft: "10px",
    paddingRight: "10px",
    cursor: "pointer",
    height: {
      default: "46px",
      "@media (max-width: 860px)": "26px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#3C3C32",
    fontWeight: "bold",
    borderRadius: {
      default: "8px",
      "@media (max-width: 860px)": "4.5px",
    },

    fontSize: {
      default: "15px",
      "@media (max-width: 860px)": "12px",
    },
    border: "none",
    marginLeft,
    ":hover": {
      backgroundColor: "#C8C8C8",
    },
  }),
  buttonContainer: {
    marginTop: {
      default: "35px",
      "@media (max-width: 860px)": "27px",
    },
    display: "flex",
    alignItems: "center",
  },
});

type ownProps = {
  children: React.ReactNode;
  flexDirection: "row" | "column" | "column-reverse";
  backgroundColor: "yellow" | "white";
};

interface childrenProps {
  children: React.ReactNode;
}

interface buttonProps {
  children: React.ReactNode;
  marginLeft?: string;
}

const DescriptionSection = (props: ownProps) => {
  return (
    <div {...stylex.props(s.container(props.backgroundColor))}>
      <div {...stylex.props(s.innerContainer(props.flexDirection))}>
        {props.children}
      </div>
    </div>
  );
};

const Column = (props: childrenProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInPopUp}
      transition={{
        duration: 0.6,
      }}
      {...stylex.props(s.column)}
    >
      {props.children}
    </motion.div>
  );
};

const Category = (props: childrenProps) => {
  return <p {...stylex.props(s.category)}>{props.children}</p>;
};

const Title = (props: childrenProps) => {
  return <p {...stylex.props(s.title)}>{props.children}</p>;
};

const Description = (props: childrenProps) => {
  return <p {...stylex.props(s.description)}>{props.children}</p>;
};

const ButtonContainer = (props: childrenProps) => {
  return <div {...stylex.props(s.buttonContainer)}>{props.children}</div>;
};

const Button = (props: buttonProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...stylex.props(s.button(props.marginLeft))}
    >
      {props.children}
    </motion.div>
  );
};

DescriptionSection.Category = Category;
DescriptionSection.Title = Title;
DescriptionSection.Description = Description;
DescriptionSection.Column = Column;
DescriptionSection.Button = Button;
DescriptionSection.ButtonContainer = ButtonContainer;

export default DescriptionSection;
