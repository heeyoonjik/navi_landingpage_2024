import React from "react";
import stylex from "@stylexjs/stylex";
import Image from "next/image";
import { fontColor } from "../../../../../../style/tokens.stylex";

const I = stylex.create({
  container: {
    width: {
      default: "245px",
      "@media (max-width: 860px)": "137.35px",
    },
    height: {
      default: "374px",
      "@media (max-width: 860px)": "209.53px",
    },
    backgroundColor: "white",
    borderRadius: "25px",
    padding: {
      default: "25px",
      "@media (max-width: 860px)": "15px",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    position: "relative",
    width: {
      default: "195px",
      "@media (max-width: 860px)": "109px",
    },
    height: {
      default: "195px",
      "@media (max-width: 860px)": "109px",
    },
    borderRadius: {
      default: "16px",
      "@media (max-width: 860px)": "10px",
    },
  },
  image: {
    objectFit: "contain",
    borderRadius: "16px",
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: {
      default: "20px",
      "@media (max-width: 860px)": "10px",
    },
    color: `${fontColor.primaryBlack}`,
    marginBottom: "20px",
  },

  originalPrice: {
    fontSize: {
      default: "20px",
      "@media (max-width: 860px)": "10px",
    },
    color: `${fontColor.secondaryGrey}`,
    textDecoration: "line-through",
  },
  discountedPrice: {
    fontSize: {
      default: "20px",
      "@media (max-width: 860px)": "10px",
    },
    fontWeight: "bold",
    color: `${fontColor.primaryBlack}`,
  },
});

export type ItemType = {
  name: string;
  origin_price: number;
  discounted_price: number;
  thumbnail: string;
};

interface ownProps {
  itemData: ItemType;
}

const ProductItem = (props: ownProps) => {
  const { itemData } = props;

  return (
    <div {...stylex.props(I.container)}>
      <div {...stylex.props(I.imageContainer)}>
        <Image
          src={itemData.thumbnail}
          alt={"썸네일"}
          fill
          {...stylex.props(I.image)}
        />
      </div>
      <div {...stylex.props(I.infoContainer)}>
        <p {...stylex.props(I.itemName)}>{itemData.name}</p>
        <p {...stylex.props(I.originalPrice)}>
          정가 {itemData.origin_price.toLocaleString()}원
        </p>
        <p {...stylex.props(I.discountedPrice)}>
          할인가 {itemData.discounted_price.toLocaleString()}원
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
