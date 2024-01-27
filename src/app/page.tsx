import Introducton from "@/app/_home/introduction/Introducton";

import stylex from "@stylexjs/stylex";

import MainSection from "./_home/main/MainSection";

import Partner from "./_home/partner/Partner";

const s = stylex.create({
  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },

  partner: {
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
  },
  mobile_partner: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },
});

export default function Home() {
  return (
    <div {...stylex.props(s.container)}>
      <Introducton />
      <MainSection />
      <Partner />
    </div>
  );
}
