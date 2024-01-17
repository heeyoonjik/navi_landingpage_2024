"use client";
import { color, fontColor } from "../../../../style/tokens.stylex";
import stylex, { keyframes } from "@stylexjs/stylex";
import React, { useEffect, useState } from "react";
import ItemContainer, { ItemType } from "./sliderItem/productItem/productItem";
import axios from "axios";
import SliderItem from "./sliderItem/sliderItem";
import { decorationItems } from "./decorationItemData";

const infiniteAnimation1 = stylex.keyframes({
  "0%": { transform: "translateX(0%)" },
  "50%": { transform: "translateX(-100%)" },
  "50.001%": { transform: "translateX(100%)" },
  "100%": { transform: "translateX(0%)" },
});

const infiniteAnimation2 = stylex.keyframes({
  "0%": { transform: "translateX(0%)" },
  "100%": { transform: "translateX(-200%)" },
});

const s = stylex.create({
  container: {
    width: "100vw",
    paddingTop: "87px",
    marginTop: {
      default: "287px",
      "@media (max-width: 860px)": "50px",
    },
    backgroundColor: `${color.navigrey}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: `${fontColor.primaryBlack}`,
    fontSize: {
      default: "56px",
      "@media (max-width: 860px)": "40px",
    },
    textAlign: "center",
  },
  description: {
    color: `${fontColor.secondaryGrey}`,
    fontSize: {
      default: "30px",
      "@media (max-width: 860px)": "25px",
    },
    textAlign: "center",
  },
  sliderContainer: {
    width: {
      default: "834px",
      "@media (max-width: 860px)": "100vw",
    },
    height: {
      default: "720px",
      "@media (max-width: 860px)": "460px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowX: "hidden",
    flexWrap: "nowrap",
  },

  original: (animate) => ({
    display: "flex",
    columnGap: "20px",
    marginRight: "20px",
    animationName: infiniteAnimation1,
    animationDuration: "40s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: "normal",
    animationFillMode: "none",
    animationPlayState: `${!animate && "paused"}`,
  }),
  clone: (animate) => ({
    display: "flex",
    columnGap: "20px",
    animationName: infiniteAnimation2,
    animationDuration: "40s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationPlayState: `${!animate && "paused"}`,
  }),
  mobileBr: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },
});

const NavistoreSlider = () => {
  const [data, setData] = useState<ItemType[]>([]);
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  const getItemListAPI = async () => {
    try {
      const response = await axios.get(
        `http://20.196.201.68:8080/v1/product/approved`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setData(response.data.data.slice(0, 8) as ItemType[]);
    } catch (err) {}
  };

  useEffect(() => {
    getItemListAPI();
  }, []);

  return (
    <div>
      <div {...stylex.props(s.container)}>
        <h3 {...stylex.props(s.title)}>
          다양한 상품을 <br /> 최저가로 구매하세요
        </h3>
        <p {...stylex.props(s.description)}>
          기업/단체 지원금으로 <br {...stylex.props(s.mobileBr)} />
          무조건 최저가가 보장돼요
        </p>
        <div {...stylex.props(s.sliderContainer)}>
          <div
            {...stylex.props(s.original(animate))}
            onMouseEnter={onStop}
            onMouseLeave={onRun}
          >
            {data.map((item, index) => (
              <SliderItem
                key={item.name}
                itemPosition={index % 2 === 0 ? "TOP" : "BOTTOM"}
                itemData={{
                  name: item.name,
                  origin_price: item.origin_price,
                  discounted_price: item.discounted_price,
                  thumbnail: item.thumbnail,
                }}
                decorationItem={decorationItems[index]}
              />
            ))}
          </div>
          <div
            {...stylex.props(s.clone(animate))}
            onMouseEnter={onStop}
            onMouseLeave={onRun}
          >
            {data.map((item, index) => (
              <SliderItem
                key={item.name}
                itemPosition={index % 2 === 0 ? "TOP" : "BOTTOM"}
                itemData={{
                  name: item.name,
                  origin_price: item.origin_price,
                  discounted_price: item.discounted_price,
                  thumbnail: item.thumbnail,
                }}
                decorationItem={decorationItems[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavistoreSlider;
