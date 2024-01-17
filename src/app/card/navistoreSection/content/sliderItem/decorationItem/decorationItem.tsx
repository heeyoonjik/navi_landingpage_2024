import stylex from "@stylexjs/stylex";
import Image from "next/image";
import React from "react";
import decorationItem1 from "@/assets/png/decoration_item/decoration_item_1.png";

interface ownProps {
  decorationItemSrc: string;
  decorationItemCount: number;
}

const s = stylex.create({
  container: (decorationItemCount) => ({
    position: "relative",
    width: `${decorationItemCount === 1 ? "100%" : "48%"}`,
    aspectRatio: `${decorationItemCount === 1 ? "2 / 1" : "1 / 1"}`,
  }),
});

const DecorationItem = (props: ownProps) => {
  const { decorationItemSrc, decorationItemCount } = props;
  return (
    <div {...stylex.props(s.container(decorationItemCount))}>
      <Image src={decorationItemSrc} alt="장식이미지" fill />
    </div>
  );
};

export default DecorationItem;
