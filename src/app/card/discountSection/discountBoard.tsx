import stylex from "@stylexjs/stylex";
import React, { PropsWithChildren } from "react";
import Yam from "@/assets/svg/yam";
import { fontColor } from "../../../style/tokens.stylex";
import Image from "next/image";
import discountBoard_car from "@/assets/png/discountBoard_car.png";
import discountBoard_coupon from "../../../assets/png/discountBoard_coupon.png";
import discountBoard_food from "../../../assets/png/discountBoard_food.png";
import {
  CompiledStyles,
  InlineStyles,
  StyleXArray,
} from "@stylexjs/stylex/lib/StyleXTypes";

const s = stylex.create({
  container: {
    display: "grid",
    width: {
      default: "834px",
      "@media (max-width: 860px)": "295px",
    },

    height: {
      default: "auto",
      "@media (max-width: 860px)": "551px",
    },
    gridTemplateColumns: {
      default: "1fr 1fr 1fr",
      "@media (max-width: 860px)": "1fr 1fr",
    },

    gridTemplateRows: {
      default: "340px  264px",
      "@media (max-width: 860px)": "1fr 1fr 140px",
    },
    gap: {
      default: "20px",
      "@media (max-width: 860px)": "10px",
    },
    marginTop: "100px",
  },
  firstChild: {
    gridColumn: {
      default: "1 / span 1",
      "@media (max-width: 860px)": "1 / span 2",
    },
    gridRow: {
      default: "1 / span 2",
      "@media (max-width: 860px)": "1 / span 1",
    },
    width: "100%",
    height: "100%",
    borderRadius: {
      default: "10px",
      "@media (max-width: 860px)": "10px",
    },
    background: "linear-gradient(193deg, #FFD22E 18.12%, #FFF 106.58%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))",
  },
  firstChildParagraphContainer: {
    width: "100%",
    marginTop: {
      default: "80px",
      "@media (max-width: 860px)": "10px",
    },
    padding: {
      default: "30px",
      "@media (max-width: 860px)": "10px",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontSize: "30px",
  },
  secondChild: {
    gridColumn: {
      default: "2 / span 2",
      "@media (max-width: 860px)": "1 / span 2",
    },
    gridRow: {
      default: "1 / span 1",
      "@media (max-width: 860px)": "2 / span 1",
    },
    width: "100%",
    height: "100%",
    borderRadius: {
      default: "10px",
      "@media (max-width: 860px)": "10px",
    },
    position: "relative",
    color: "#3C3C32",
    fontSize: "30px",
    filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))",
  },

  secondChildParagraphContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: "30px",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  secondChildCouponName: {
    fontSize: {
      default: "35px",
      "@media (max-width: 860px)": "20px",
    },
  },
  secondChildBackgroundImage: {
    objectFit: {
      default: "cover",
      "@media (max-width: 860px)": "contain",
    },
    zIndex: -99,
    borderRadius: {
      default: "10px",
      "@media (max-width: 860px)": "10px",
    },
  },
  thirdChildParagraphContainer: {
    width: "100%",
    paddingLeft: "30px",
    paddingTop: "30px",
    marginBottom: "-40px",
  },

  paragraph: (color) => ({
    color,
    fontSize: {
      default: "28px",
      "@media (max-width: 860px)": "15px",
    },
  }),

  thirdChild: {
    gridColumn: {
      default: "2 / span 1",
      "@media (max-width: 860px)": "1 / span 1",
    },
    gridRow: {
      default: "2 / span 1",
      "@media (max-width: 860px)": "3 / span 1",
    },

    borderRadius: {
      default: "32px",
      "@media (max-width: 860px)": "10px",
    },
    paddingLeft: {
      default: "30px",
      "@media (max-width: 860px)": "10px",
    },
    paddingTop: {
      default: "30px",
      "@media (max-width: 860px)": "10px",
    },

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))",

    background:
      "linear-gradient(157deg, #8FB7F5 14.93%, rgba(143, 183, 245, 0.00) 96.8%)",
  },
  lastChild: {
    gridColumn: {
      default: "3 / span 1",
      "@media (max-width: 860px)": "2 / span 1",
    },
    gridRow: {
      default: "2 / span 1",
      "@media (max-width: 860px)": "3 / span 1",
    },

    borderRadius: {
      default: "32px",
      "@media (max-width: 860px)": "10px",
    },
    position: "relative",
    paddingLeft: {
      default: "30px",
      "@media (max-width: 860px)": "10px",
    },
    paddingTop: {
      default: "30px",
      "@media (max-width: 860px)": "10px",
    },
    filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.10))",
  },

  lastChildBackgroundImage: {
    objectFit: "cover",
    borderRadius: {
      default: "32px",
      "@media (max-width: 860px)": "10px",
    },
    zIndex: -99,
  },

  yamContainer: {
    width: {
      default: "242px",
      "@media (max-width: 860px)": "86.81px",
    },
    height: {
      default: "334px",
      "@media (max-width: 860px)": "120px",
    },
    marginTop: {
      default: "0px",
      "@media (max-width: 860px)": "20px",
    },
  },

  carContainer: {
    position: "relative",
    flexShrink: "0",
    top: {
      default: "-45px",
      "@media (max-width: 860px)": "-20px",
    },
    width: {
      default: "209px",
      "@media (max-width: 860px)": "100px",
    },
    height: {
      default: "209px",
      "@media (max-width: 860px)": "100px",
    },
  },

  couponText: {
    fontSize: {
      default: "24px",
      "@media (max-width: 860px)": "12px",
    },
  },
});

const StyleXDiv = ({
  children,
  styles,
}: PropsWithChildren<{
  styles: StyleXArray<
    | (null | undefined | CompiledStyles)
    | boolean
    | Readonly<[CompiledStyles, InlineStyles]>
  >;
}>) => <div {...stylex.props(styles)}>{children}</div>;

const StyleXText = ({
  children,
  styles,
}: PropsWithChildren<{
  styles: StyleXArray<
    | (null | undefined | CompiledStyles)
    | boolean
    | Readonly<[CompiledStyles, InlineStyles]>
  >;
}>) => <p {...stylex.props(styles)}>{children}</p>;

const StyleXImage = ({
  children,
  styles,
}: PropsWithChildren<{
  styles: StyleXArray<
    | (null | undefined | CompiledStyles)
    | boolean
    | Readonly<[CompiledStyles, InlineStyles]>
  >;
}>) => <image {...stylex.props(styles)}>{children}</image>;

const DiscountBoard = () => {
  return (
    <div {...stylex.props(s.container)}>
      <div {...stylex.props(s.firstChild)}>
        <div {...stylex.props(s.yamContainer)}>
          <Yam />
        </div>
        <div {...stylex.props(s.firstChildParagraphContainer)}>
          <p {...stylex.props(s.paragraph("#3C3C32"))}>
            첫 주문 전메뉴 <br />
            <strong>50% 할인</strong>
          </p>
        </div>
      </div>
      <div {...stylex.props(s.secondChild)}>
        <div {...stylex.props(s.secondChildParagraphContainer)}>
          <p {...stylex.props(s.secondChildCouponName)}>
            <strong>1000원 할인 쿠폰</strong>
          </p>
          <p {...stylex.props(s.couponText)}>
            매일 1,000원 <br />
            할인 쿠폰 발행
          </p>
        </div>
        <Image
          src={discountBoard_coupon}
          fill
          alt="할인 쿠폰"
          {...stylex.props(s.secondChildBackgroundImage)}
        />
      </div>
      <div {...stylex.props(s.thirdChild)}>
        <p {...stylex.props(s.paragraph("white"))}>
          상품
          <strong>
            무료 배송 <br />& 2,000원 <br />
          </strong>
          할인 쿠폰 발행
        </p>
        <div {...stylex.props(s.carContainer)}>
          <Image
            src={discountBoard_car}
            alt="나비얌은 모든 상품을 무료 배송 해드리고 있습니다"
            fill
          />
        </div>
      </div>
      <div {...stylex.props(s.lastChild)}>
        <p {...stylex.props(s.paragraph("white"))}>
          아동복지센터 <br />
          단체 주문시 <br />
          <strong>20% 상시 할인</strong>
        </p>

        <Image
          src={discountBoard_food}
          alt={"보육원 주문"}
          fill
          {...stylex.props(s.lastChildBackgroundImage)}
        />
      </div>
    </div>
  );
};

export default DiscountBoard;
