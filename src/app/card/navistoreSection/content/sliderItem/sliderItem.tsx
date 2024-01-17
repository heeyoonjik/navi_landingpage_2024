import React, { useEffect } from "react";
import DecorationItem from "./decorationItem/decorationItem";
import ProductItem, { ItemType } from "./productItem/productItem";
import stylex from "@stylexjs/stylex";

type DecorationItemType = {
  image: string[];
  position: string;
};

interface ownProps {
  itemPosition: "TOP" | "BOTTOM";
  itemData: ItemType;
  decorationItem: DecorationItemType;
}

const s = stylex.create({
  container: (flexDirection) => ({
    display: "flex",
    flexDirection,
    width: {
      default: "245px",
      "@media (max-width: 860px)": "137.35px",
    },
    height: {
      default: "507px",
      "@media (max-width: 860px)": "284.07px",
    },
    justifyContent: "space-between",
  }),

  decorationItemContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const SliderItem = (props: ownProps) => {
  const { itemData, decorationItem } = props;
  return (
    <div
      {...stylex.props(
        s.container(
          decorationItem && decorationItem.position === "TOP"
            ? "column"
            : "column-reverse"
        )
      )}
    >
      <ProductItem itemData={itemData} />
      <div {...stylex.props(s.decorationItemContainer)}>
        {decorationItem &&
          decorationItem.image.map((item, index) => (
            <DecorationItem
              key={index}
              decorationItemSrc={item}
              decorationItemCount={decorationItem.image.length}
            />
          ))}
      </div>
    </div>
  );
};

export default SliderItem;
