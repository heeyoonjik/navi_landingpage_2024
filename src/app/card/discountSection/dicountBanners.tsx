import stylex from "@stylexjs/stylex";
import Image from "next/image";
import React from "react";
import card_emoji_cap from "@/../public/images/card/card_emoji_cap.png";
import card_emoji_discount from "@/../public/images/card/card_emoji_discount.png";

import card_emoji_sushi from "@/../public/images/card/card_emoji_sushi.png";

const s = stylex.create({
  container: {
    width: "100%",
    height: {
      default: "5000px",
      "@media (max-width: 860px)": "2000px",
    },

    display: "flex",
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: {
      default: "100px",
      "@media (max-width: 860px)": "50px",
    },
    fontWeight: "bold",
    color: "#3C3C32",
    textAlign: "center",
  },
  title: {
    color: "#3C3C32",
    fontSize: {
      default: "50px",
      "@media (max-width: 860px)": "30px",
    },
    fontWeight: "500",
    textAlign: "center",
    marginTop: "200px",
  },
  description: {
    color: "#7B8390",
    fontSize: {
      default: "30px",
      "@media (max-width: 860px)": "20px",
    },
    textAlign: "center",
  },
  wideContainer: {
    marginTop: "100px",
    width: "100%",
    position: "sticky",
    top: "0px",
    height: {
      default: "100vh",
      "@media (max-width: 860px)": "100vh",
    },
    backgroundColor: "#FFD023",
    display: "flex",
    overflowX: {
      default: "hidden",
      "@media (max-width: 860px)": "hidden",
    },
    paddingLeft: {
      default: "calc( 50vw - 168px )",
      "@media (max-width: 860px)": "calc( 50vw - 80px )",
    },
  },

  banner: {
    width: {
      default: "336px",
      "@media (max-width: 860px)": "160px",
    },
    flexShrink: "0",
    height: {
      default: "518px",
      "@media (max-width: 860px)": "248px",
    },
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.20)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  lastBanner: {
    width: {
      default: "336px",
      "@media (max-width: 860px)": "160px",
    },
    flexShrink: "0",
    height: {
      default: "518px",
      "@media (max-width: 860px)": "248px",
    },
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.20)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    marginRight: {
      default: "calc( ( 100vw - 1128px ) / 2 )",
      "@media (max-width: 860px)": "-3000px",
    },
  },
  bannerParagraph: {
    fontSize: {
      default: "40px",
      "@media (max-width: 860px)": "24px",
    },
    fontWeight: "700",
    color: "#3C3C32",
    textAlign: "center",
  },

  capContainer: {
    position: "relative",
    width: {
      default: "178px",
      "@media (max-width: 860px)": "107px",
    },
    height: {
      default: "148px",
      "@media (max-width: 860px)": "89px",
    },
  },

  discountEmojiContainer: {
    position: "relative",
    width: {
      default: "191px",
      "@media (max-width: 860px)": "114.97px",
    },
    height: {
      default: "138px",
      "@media (max-width: 860px)": "83.07px",
    },
  },
  sushiContainer: {
    position: "relative",
    width: {
      default: "170px",
      "@media (max-width: 860px)": "102.33px",
    },
    height: {
      default: "132px",
      "@media (max-width: 860px)": "79.46px",
    },
  },

  mobileBr: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },

  sliderContainer: {
    backgroundColor: "green",
    display: "flex",
    gap: {
      default: "60px",
      "@media (max-width: 860px)": "20px",
    },
    alignItems: "center",
  },
});

const DiscountBanners = () => {
  return (
    <>
      <div {...stylex.props(s.banner)}>
        <p {...stylex.props(s.bannerParagraph)}>
          이용가능 식당 <br />총 2407곳
        </p>
        <div {...stylex.props(s.capContainer)}>
          <Image src={card_emoji_cap} alt="이용가능 식당 총 2407곳" fill />
        </div>
      </div>
      <div {...stylex.props(s.banner)}>
        <p {...stylex.props(s.bannerParagraph)}>
          평균 <br />
          50% 할인
        </p>
        <div {...stylex.props(s.discountEmojiContainer)}>
          <Image src={card_emoji_discount} alt="평균 50% 할인" fill />
        </div>
      </div>
      <div {...stylex.props(s.lastBanner)}>
        <p {...stylex.props(s.bannerParagraph)}>
          제한없는 <br /> 메뉴
        </p>
        <div {...stylex.props(s.sushiContainer)}>
          <Image src={card_emoji_sushi} alt="제한없는 메뉴" fill />
        </div>
      </div>
    </>
  );
};

export default DiscountBanners;
