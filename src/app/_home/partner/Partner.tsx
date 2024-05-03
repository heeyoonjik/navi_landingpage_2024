import React from "react";
import Image from "next/image";

import partner from "@/../public/images/home/home_partner.png";

import mobile_partner from "@/../public/images/home/home_mobile_partner.png";

import stylex from "@stylexjs/stylex";

const s = stylex.create({
  partner: {
    objectFit: "contain",
  },
  mobile_partner: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
    width: "100%",
    height: "auto",
  },

  mobileContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  imgContainer: {
    position: "relative",
    width: "90vw",
    height: {
      default: "70vh",
      "@media (max-width: 860px)": "40vh",
    },
  },
});

const Partner = () => {
  return (
    <>
      <div {...stylex.props(s.imgContainer)}>
        <Image
          {...stylex.props(s.partner)}
          fill
          src={partner}
          alt="SKTelecom, ESGKorea2,Microsoft, 서울경제진흥원, 서울신용보증재단, 현대차 정몽구재단, 브라이언임팩트, 법무법인해율, 함께 일하는 재단, 선항력가게, 중앙사회서비스원, 서울대학교 OSCAR 캠퍼스타운, 수파자, 프리닷츠, 소소돌방, 서울특별시사회복지협의회, 한국건강관리협회, 한국전자정보통신산업진흥회, 한국여성벤처협회, 벤처기업협회, 춤추는 우주인, 청년문간, 봉천제일종합시장, 서울대학교 컨설팅 전문 동아리 티움, 동명아동복지센터, 상록보육원, 관악구, 강서구"
        />
      </div>
      {/* <Image
        {...stylex.props(s.mobile_partner)}
        src={mobile_partner}
        width={0}
        height={0}
        sizes="100vw"
        alt="SKTelecom, ESGKorea2,Microsoft, 서울경제진흥원, 서울신용보증재단, 현대차 정몽구재단, 브라이언임팩트, 법무법인해율, 함께 일하는 재단, 선항력가게, 중앙사회서비스원, 서울대학교 OSCAR 캠퍼스타운, 수파자, 프리닷츠, 소소돌방, 서울특별시사회복지협의회, 한국건강관리협회, 한국전자정보통신산업진흥회, 한국여성벤처협회, 벤처기업협회, 춤추는 우주인, 청년문간, 봉천제일종합시장, 서울대학교 컨설팅 전문 동아리 티움, 동명아동복지센터, 상록보육원, 관악구, 강서구"
      /> */}
    </>
  );
};

export default Partner;
