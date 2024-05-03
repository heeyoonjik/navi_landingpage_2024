"use client";
import React from "react";

import stylex from "@stylexjs/stylex";
import section1_child from "@/../public/images/boss/boss_section1_child.png";
import section1_yam from "@/../public/images/boss/boss_section1_yam.png";
import section2_food from "@/../public/images/boss/boss_section2_food.png";
import section2_child from "@/../public/images/boss/boss_section2_child.png";
import boss_yam from "@/../public/images/boss/boss_yam.png";
import banner1 from "@/../public/images/boss/banner1.png";
import banner2 from "@/../public/images/boss/banner2.png";
import banner3 from "@/../public/images/boss/banner3.png";
import banner4 from "@/../public/images/boss/banner4.png";

import Image from "next/image";
import BossInstaSlider from "./slider/bossInstaSlider";

import { InstagramEmbed } from "react-social-media-embed";

import { motion } from "framer-motion";

import "../globals.css";
import FAQ from "./faq/FAQ";

const MOBILE = "@media (max-width: 860px)";

const fadeInPopUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0 },
};

const metadata = {
  title: "입점 안내",
};

const page = () => {
  return (
    <div {...stylex.props(s.container)}>
      <motion.div
        {...stylex.props(s.introContainer)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInPopUp}
        transition={{
          duration: 0.6,
        }}
      >
        <p {...stylex.props(s.introParagraph)}>
          <strong {...stylex.props(s.introParagraphStrong)}>나비얌에서</strong>{" "}
          <br /> 영리와 사회적 공헌, <br /> 함께 가져가다.
        </p>
      </motion.div>

      <div {...stylex.props(s.greySectionContainer)}>
        <div {...stylex.props(s.innerContainer)}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInPopUp}
            transition={{
              duration: 0.6,
            }}
          >
            <p {...stylex.props(s.sectionTitleUnderLine)}>매출의 폭이</p>
            <p {...stylex.props(s.sectionTitle)}>커집니다</p>
          </motion.div>
          <motion.div
            {...stylex.props(s.section1row)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInPopUp}
            transition={{
              duration: 0.6,
            }}
          >
            <div {...stylex.props(s.columnLeft)}>
              <p {...stylex.props(s.sectionDescription, s.marginTop)}>
                <strong {...stylex.props(s.strongYellowText)}>
                  연간 5,500억 규모
                </strong>
                <br /> 정부 식비 지원 바우처 예산을 챙기세요.
              </p>
              <div {...stylex.props(s.childContainer, s.marginTop)}>
                <Image
                  src={section1_child}
                  alt="아이들이 행복해하는 사진"
                  fill
                />
              </div>
            </div>
            <div {...stylex.props(s.columnRight)}>
              <p {...stylex.props(s.sectionDescriptionMobileEnd, s.marginTop)}>
                {`>`} 사용되지 못하고 남는 <br />
                급식카드 예산에서 수익을 창출하세요.
                <br />
                <br /> 외부 후원금 및 <br /> 나비얌 사용자 간의 기부에서 오는
                <br />
                추가적인 수익도 챙겨가세요.
              </p>
              <div {...stylex.props(s.yamContainer)}>
                <Image
                  src={section1_yam}
                  fill
                  alt="돈쭐내러 오는 소비자들이 찾아 방문합니다."
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            {...stylex.props(s.section1row)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInPopUp}
            transition={{
              duration: 0.6,
            }}
          >
            <div {...stylex.props(s.columnLeft)}>
              <p {...stylex.props(s.sectionDescription)}>
                현금/현물 후원 시<br />
                <strong {...stylex.props(s.strongYellowText)}>
                  기부금 영수증
                </strong>
                을 발행할 수 있어요.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div {...stylex.props(s.whiteSectionContainer)}>
        <motion.div
          {...stylex.props(s.innerContainer)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInPopUp}
          transition={{
            duration: 0.6,
          }}
        >
          <p {...stylex.props(s.sectionTitleUnderLine)}>보육원 단체주문과</p>
          <p {...stylex.props(s.sectionTitle)}>연결해드립니다</p>
          <div {...stylex.props(s.section2row)}>
            <div {...stylex.props(s.columnLeft)}>
              <div {...stylex.props(s.nurseryContainer, s.marginTop)}>
                <Image
                  src={section2_food}
                  alt="보육원 단체주문 음식 사진들"
                  fill
                />
              </div>
            </div>
            <div {...stylex.props(s.nurseryChildSectionContainer)}>
              <div {...stylex.props(s.nurseryChildImageContainer)}>
                <Image
                  src={section2_child}
                  fill
                  alt="보육원 단체주문 아이들의 사진"
                />
              </div>
              <p {...stylex.props(s.sectionDescriptionMobileEnd, s.marginTop)}>
                관악구 소재 스시 가게는 100명 <br /> 넘는 아이들이 누적
                방문했습니다.
              </p>

              <p {...stylex.props(s.sectionDescriptionMobileEnd, s.marginTop)}>
                강서구 소재 도시락 가게는 30명의 <br /> 보육원 단체주문을
                정기적으로 <br /> 받고 있어요.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <BossInstaSlider />

      <section {...stylex.props(s.solutionSectionOuterContainer)}>
        <motion.div
          {...stylex.props(s.solutionSection)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInPopUp}
          transition={{
            duration: 0.6,
          }}
        >
          <p {...stylex.props(s.sectionTitle)}>입점시 발생할</p>
          <p {...stylex.props(s.sectionTitle)}>불편은 없어요</p>

          <div {...stylex.props(s.solutionGrid)}>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                가게등록,
                <br />
                메뉴등록,
                <br />
                대신 해드려요.
              </p>
              <div {...stylex.props(s.bannerImageContainer)}>
                <Image
                  src={banner1}
                  alt="가게등록 편의"
                  fill
                  style={{
                    objectFit: "contain",
                    marginTop: "20px",
                    right: -30,
                  }}
                />
              </div>
            </div>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                빠른 정산,
                <br />
                중개수수료는 <br /> 무료에요.
              </p>
              <p {...stylex.props(s.solutionCardSubTitle)}>
                (은행 PG사 결제 수수료 <br /> 1.9%만 발생합니다)
              </p>
              <div {...stylex.props(s.bannerImageContainer)}>
                <Image
                  src={banner2}
                  alt="수수료 없는 나비얌"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                사장님 앱에서 <br />
                편하게 <br /> 가게 관리 <br />
              </p>
              <div {...stylex.props(s.bannerImageContainer)}>
                <Image
                  src={banner3}
                  alt="나비사장님 앱에서 편하게 가게관리 하세요"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div {...stylex.props(s.solutionCard)}>
              <p {...stylex.props(s.solutionCardTitle)}>
                식사 나눔 시, <br />
                기부금영수증 발행
              </p>
              <div {...stylex.props(s.bannerImageContainer)}>
                <Image
                  src={banner4}
                  alt="식사 나눔 시, 기부금영수증 발행"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div {...stylex.props(s.whiteSectionContainer)}>
        <motion.div
          {...stylex.props(s.innerContainer)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInPopUp}
          transition={{
            duration: 0.6,
          }}
        >
          <p {...stylex.props(s.sectionTitleUnderLine)}>사회적 문제를</p>
          <p {...stylex.props(s.sectionTitleUnderLine)}>해결하는</p>
          <p {...stylex.props(s.sectionTitle)}>동참 사장님들</p>

          <div {...stylex.props(s.interviewContainer)}>
            <div {...stylex.props(s.bossInterview)}>
              <InstagramEmbed url="https://www.instagram.com/reel/C0yRntkg5uI/" />
              <InstagramEmbed url="https://www.instagram.com/reel/C0i7mYZgJdb/" />
            </div>
          </div>
        </motion.div>
      </div>
      <a href="https://forms.gle/cE7u1AUgEfm6GhLWA" target="_blank">
        <div {...stylex.props(s.CTAOuterContainer)}>
          <div {...stylex.props(s.CTAContainer)}>
            <div {...stylex.props(s.CTAMobileUpper)}>
              <p {...stylex.props(s.CTAParagraph)}>
                <strong>온기를 요리</strong>하는 <br />
                사장님을 위한 <strong>혜택을 챙겨가세요</strong>
              </p>
              <div {...stylex.props(s.CTAButton)}>입점 문의</div>
            </div>
            <div {...stylex.props(s.bossyamContainer)}>
              <Image
                src={boss_yam}
                fill
                alt="사장님을 위한 혜택을 챙겨가세요"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </a>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div {...stylex.props(s.faqContainer)}>
          <p {...stylex.props(s.faqHeaderP)}>자주 물어보시는 질문</p>
          <FAQ
            title="입점 시 해야하는 절차가 따로 있나요?"
            desc="아닙니다. 입점 희망을 밝혀주신 후 가게 기본 정보만 남겨주시면 가게 등록, 메뉴 등록 전부 저희가 도와드립니다. 또한 포장/현장 중심 식사 어플리케이션이기 때문에 따로 포스기나 어플 설치 없이 '기프티콘 사용하기' 버튼만 현장에서 잘 눌러주시면 영업일 기준 5일 이내 자동으로 정산이 완료됩니다."
          />
          <FAQ
            title="수수료가 있나요?"
            desc="PG사 결제 수수료 (온라인 결제 수수료)와 어플리케이션 서버 운영비를 위해 결제액의 4.9% 고정 수수료만 발생합니다. 그 외 입점 수수료나 서비스 이용료 등은 전혀 발생하지 않습니다."
          />
          <FAQ
            title="할인이 필수적인가요?"
            desc="할인은 필수적이지 않습니다! 다만 할인에 동참해주실 경우, 가게 팻말과 스티커를 보내드리며 '할인 동참 가게'임을 자체적으로 홍보해드립니다."
          />
          <FAQ
            title="입점 혜택이 있나요?"
            desc="서울시 단독 허가받은 아동급식카드 온라인 결제 플랫폼으로, 연간 6,000억원에 달하는 식비 충전 카드를 통한 고정 매출액 상승 효과를 기대할 수 있습니다. 또한 입점만 하시면 추가 비용 발생 없이 1만 팔로워 계정의 인스타그램 맛집 계정에 가게 소개 콘텐츠를 발행해드리고, 블로그에도 후기성 포스팅을 올려드려 SNS 마케팅을 도와드립니다. 또한 기업 연계 후원금을 통한 식사 쿠폰 발행처로 등록이 됩니다. 아동센터와의 단체구매도 연결해드리며 식사 기프티콘 서비스를 통한 지자체 지역상권 활성화 지원사업의 대상으로도 혜택을 받으실 수 있습니다."
          />
          <FAQ
            title="현장에서 어떻게 대응하면 되나요?"
            desc="별도 포스기 설치 없이 유저분께서 나비얌 어플리케이션 내 기프티콘 화면을 보여드리게 됩니다. 이때 '기프티콘 사용하기' 버튼만 잘 눌러주시면 됩니다."
          />
          <FAQ
            title="입점을 취소하고 싶어요."
            desc="입점을 취소하고 싶으실 경우 언제든지 070-4006-1389로 연락주시면 됩니다. 혹은 카카오톡 '나비얌' 공식 채널에서 편하게 비대면 문의 및 상담을 통해서도 취소하실 수 있습니다."
          />
          <FAQ
            title="궁금한 내용이 더 있어요."
            desc="이 외에도 궁금하신 점이 있으시다면 070-4006-1389로 연락주세요. 혹은 카카오톡 '나비얌' 공식 채널에서 편하게 비대면 문의 및 상담을 통해서도 취소하실 수 있습니다."
          />
        </div>
      </div>
    </div>
  );
};

export default page;

const s = stylex.create({
  bannerImageContainer: {
    position: "relative",
    width: "100%",
    height: "60%",
  },
  faqHeaderP: {
    color: "black",
    fontWeight: "bold",
    fontSize: {
      default: "50px",
      [MOBILE]: "30px",
    },
    marginBottom: "30px",
  },
  faqContainer: {
    width: {
      default: "834px",
      [MOBILE]: "80%",
    },
    gap: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
    flexDirection: "column",
  },
  container: {
    width: "100%",
  },
  introContainer: {
    width: "100%",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  yellowIntroParagraph: {
    fontWeight: "700",
    color: "#FFD023",
    textAlign: "center",
    fontSize: {
      default: "60px",
      [MOBILE]: "30px",
    },
  },
  introParagraph: {
    fontWeight: "700",
    color: "#3C3C32",
    textAlign: "center",
    fontSize: {
      default: "60px",
      [MOBILE]: "30px",
    },
  },
  introParagraphStrong: {
    fontWeight: "700",
    color: "#FFD023",
    textAlign: "center",
    fontSize: {
      default: "60px",
      [MOBILE]: "30px",
    },
  },

  greySectionContainer: {
    paddingTop: "50px",
    paddingBottom: "50px",
    width: "100%",

    backgroundColor: "#F3F5F7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  whiteSectionContainer: {
    marginTop: "200px",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  innerContainer: {
    width: {
      default: "834px",
      [MOBILE]: "80%",
    },

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  sectionTitle: {
    position: "relative",
    fontSize: {
      default: "80px",
      [MOBILE]: "40px",
    },
    color: "#3C3C32",
    fontWeight: "700",
  },
  sectionTitleUnderLine: {
    position: "relative",
    fontSize: {
      default: "80px",
      [MOBILE]: "40px",
    },
    color: "#3C3C32",
    fontWeight: "700",

    zIndex: "1",
    "::after": {
      content: "",
      position: "absolute",
      zIndex: "-1",
      bottom: "2px",
      left: "-4px",
      width: "100%",
      height: "22px",
      background:
        "linear-gradient(90deg, #FFD023 0.03%, rgba(255, 208, 35, 0.00) 103.37%)",
    },
  },
  sectionDescription: {
    fontSize: {
      default: "26px",
      [MOBILE]: "20px",
    },
    wordBreak: "keep-all",
    color: "#3C3C32",
    fontWeight: 700,
    marginTop: {
      default: "0px",
      [MOBILE]: "60px",
    },
  },

  sectionDescriptionMobileEnd: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: {
      default: "26px",
      [MOBILE]: "20px",
    },
    justifyContent: {
      default: "flex-start",
      [MOBILE]: "flex-end",
    },
    textAlign: {
      default: "start",
      [MOBILE]: "end",
    },
    color: "#5A6679",
  },
  marginTop: {
    marginTop: "25px",
  },
  section1row: {
    marginTop: {
      default: "50px",
      [MOBILE]: "20px",
    },
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: {
      default: "row",
      [MOBILE]: "column",
    },
  },

  section2row: {
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: {
      default: "row",
      [MOBILE]: "column",
    },
  },

  columnLeft: {
    width: {
      default: "auto",
      [MOBILE]: "100%",
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  bossInterview: {
    display: "flex",
    flexDirection: {
      default: "row",
      [MOBILE]: "column",
    },
    flexShrink: "0",
    alignItems: "center",
    marginTop: {
      default: "25px",
      [MOBILE]: "20px",
    },
  },
  line: (width) => ({
    width,
    height: "8px",
    backgroundColor: "#FFD023",
  }),

  yamContainer: {
    marginTop: {
      default: "30px",
      [MOBILE]: "20px",
    },
    position: "relative",
    width: {
      default: "397px",
      [MOBILE]: "197px",
    },
    height: {
      default: "529px",
      [MOBILE]: "263px",
    },
  },

  childContainer: {
    position: "relative",
    width: {
      default: "414px",
      [MOBILE]: "270px",
    },
    height: {
      default: "548px",
      [MOBILE]: "357px",
    },
  },

  columnRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: {
      default: "0px",
      [MOBILE]: "20px",
    },
  },

  nurseryContainer: {
    position: "relative",
    width: {
      default: "438px",
      [MOBILE]: "236px",
    },
    height: {
      default: "596px",
      [MOBILE]: "320px",
    },
  },

  nurseryChildSectionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: {
      default: "flex-start",
      [MOBILE]: "flex-end",
    },
    marginTop: {
      default: "0px",
      [MOBILE]: "20px",
    },
  },
  nurseryChildImageContainer: {
    position: "relative",
    width: {
      default: "352px",
      [MOBILE]: "197px",
    },
    height: {
      default: "264px",
      [MOBILE]: "148px",
    },
  },
  mobileBr: {
    display: {
      default: "none",
      [MOBILE]: "block",
    },
  },

  interviewContainer: {
    marginTop: "50px",
    width: "100%",
    flexShrink: "0",
    overflow: "scroll",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
  },

  bossyamContainer: {
    position: "relative",
    width: {
      default: "141px",
      [MOBILE]: "75px",
    },
    height: {
      default: "200px",
      [MOBILE]: "109px",
    },
  },
  CTAOuterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
  },
  CTAContainer: {
    width: {
      default: "834px",
      [MOBILE]: "80%",
    },
    height: {
      default: "225px",
      [MOBILE]: "109px",
    },
    backgroundColor: "#FFD023",
    borderRadius: "15px",
    display: "flex",

    alignItems: {
      default: "center",
      [MOBILE]: "flex-start",
    },
    justifyContent: {
      default: "space-around",
      [MOBILE]: "flex-start",
    },
  },
  CTAParagraph: {
    fontSize: {
      default: "23px",
      [MOBILE]: "15px",
    },
    color: "#3C3C32",
  },

  CTAButton: {
    width: {
      default: "178px",
      [MOBILE]: "67px",
    },
    height: {
      default: "50px",
      [MOBILE]: "19px",
    },
    flexShrink: "0",
    backgroundColor: "#3C3C32",
    borderRadius: "23px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    fontSize: {
      default: "23px",
      [MOBILE]: "11px",
    },
    fontWeight: "700",
    cursor: "pointer",
  },

  CTAMobileUpper: {
    display: "flex",
    gap: {
      default: "40px",
      [MOBILE]: "20px",
    },
    flexDirection: {
      default: "row",
      [MOBILE]: "column",
    },
    marginLeft: {
      default: "0px",
      [MOBILE]: "20px",
    },
    marginTop: {
      default: "0px",
      [MOBILE]: "20px",
    },
    alignItems: "center",
  },
  CTAInstagram: {
    width: "100%",
  },

  CTAButtonContainer: {
    width: {
      default: "auto",
      [MOBILE]: "100%",
    },
    display: "flex",
    justifyContent: "flex-start",
  },

  solutionSectionOuterContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  solutionSection: {
    width: {
      default: "834px",
      [MOBILE]: "85%",
    },
    display: "flex",
    flexDirection: "column",
  },

  solutionGrid: {
    marginTop: "50px",
    display: "grid",
    width: "100%",
    height: {
      default: "1043px",
      [MOBILE]: "600px",
    },
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",

    rowGap: {
      default: "35px",
      [MOBILE]: "15px",
    },
    columnGap: {
      default: "35px",
      [MOBILE]: "15px",
    },
  },
  solutionCard: {
    backgroundColor: "#EEEFF4",
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
    borderRadius: "20px",
    justifyContent: "space-between",
  },
  solutionCardTitle: {
    color: "#3C3C32",
    paddingLeft: "20px",
    fontWeight: "700",
    fontSize: {
      default: "45px",
      [MOBILE]: "20px",
    },
  },
  solutionCardSubTitle: {
    paddingLeft: "20px",
    color: "#3C3C32",
    fontSize: {
      default: "20px",
      [MOBILE]: "12px",
    },
    fontWeight: "700",
  },
  solutionCardParagraph: {
    color: "#5A6679",
    fontSize: "20px",
    fontWeight: "700",
  },

  strongYellowText: {
    color: "#FFC900",
    backgroundColor: "black",
    marginBottom: "10px",
    fontSize: {
      default: "50px",
      [MOBILE]: "30px",
    },
  },
});
