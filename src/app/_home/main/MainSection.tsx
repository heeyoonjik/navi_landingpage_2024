"use client";
import React from "react";
import DescriptionSection from "./descriptionSection";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import stylex from "@stylexjs/stylex";

import home_desc1 from "@/../public/images/home/home_desc_1.png";
import home_desc2 from "@/../public/images/home/home_desc_2.png";
import home_desc3 from "@/../public/images/home/home_desc_3.png";
import home_desc4 from "@/../public/images/home/home_desc_4.png";
import home_desc5 from "@/../public/images/home/home_desc_5.png";

import mobile_desc4 from "@/../public/images/home/home_mobile_desc4.png";

const s = stylex.create({
  secondSecton: {
    width: "100%",
    height: "300px",
  },

  container: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  },

  imageContainer: {
    width: "100%",
  },

  desc1: {
    position: "relative",
    width: {
      default: "497px",
      "@media (max-width: 860px)": "300px",
    },
    height: {
      default: "427px",
      "@media (max-width: 860px)": "253px",
    },
  },

  desc2: {
    position: "relative",
    width: {
      default: "377px",
      "@media (max-width: 860px)": "300px",
    },
    height: {
      default: "321px",
      "@media (max-width: 860px)": "254px",
    },
  },

  desc3: {
    position: "relative",

    width: {
      default: "419px",
      "@media (max-width: 860px)": "300px",
    },
    height: {
      default: "378px",
      "@media (max-width: 860px)": "232px",
    },
  },

  desc4: {
    position: "relative",

    width: {
      default: "362px",
      "@media (max-width: 860px)": "320px",
    },
    height: {
      default: "390px",
      "@media (max-width: 860px)": "255px",
    },
  },

  desc4_pc: {
    display: {
      default: "block",
      "@media (max-width: 860px)": "none",
    },
  },

  desc4_mobile: {
    display: {
      default: "none",
      "@media (max-width: 860px)": "block",
    },
  },

  desc5: {
    position: "relative",

    width: {
      default: "405px",
      "@media (max-width: 860px)": "320px",
    },
    height: {
      default: "372px",
      "@media (max-width: 860px)": "255px",
    },
  },
});

const MainSection = () => {
  const fadeInLeftSlide = {
    hidden: { opacity: 0, x: 70 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInRightSlide = {
    hidden: { opacity: 0, x: -70 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <DescriptionSection backgroundColor="white" flexDirection="column">
        <DescriptionSection.Column>
          <DescriptionSection.Category>
            결식우려아동
          </DescriptionSection.Category>
          <DescriptionSection.Title>
            편리한 <br />
            급식카드 이용
          </DescriptionSection.Title>
          <DescriptionSection.Description>
            30만 결식우려아동들의 <br /> 급식카드 이용시 어려움을 해결하기 위해
            <br />
            급식카드를 플랫폼화 하였습니다.
          </DescriptionSection.Description>
          <DescriptionSection.ButtonContainer>
            <DescriptionSection.Button>
              <Link href="/card">급식카드 이용방법</Link>
            </DescriptionSection.Button>
          </DescriptionSection.ButtonContainer>
        </DescriptionSection.Column>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeftSlide}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          {...stylex.props(s.desc1)}
        >
          <Image
            src={home_desc1}
            fill
            alt="나비얌은 급식카드를 쉽게 이용하기 위해 만들어졌음을 설명하는 사진입니다."
          />
        </motion.div>
      </DescriptionSection>
      <DescriptionSection
        backgroundColor="yellow"
        flexDirection="column-reverse"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInRightSlide}
          transition={{
            duration: 0.6,
          }}
          viewport={{ once: true }}
          {...stylex.props(s.desc2)}
        >
          <Image
            src={home_desc2}
            fill
            alt="청년밥상문간은 지난 6년간 결식유려 아동에게 무상으로 식사 나눔을 이어오고 있습니다. 앞으로 더 많은 아이들과 청년들이 편하게 올 수 있도록 나비얌과 함께하게 되었습니다."
          />
        </motion.div>
        <DescriptionSection.Column>
          <DescriptionSection.Category>청년</DescriptionSection.Category>
          <DescriptionSection.Title>
            청년밥상문간 <br />
            MOU
          </DescriptionSection.Title>
          <DescriptionSection.Description>
            결식의 문제는 바쁘게 살아가는 <br /> 우리 모두의 문제이기도 합니다.
            <br />
            청년밥상문간과 함께 청년들의 결식을 돕습니다.
          </DescriptionSection.Description>
        </DescriptionSection.Column>
      </DescriptionSection>
      <DescriptionSection backgroundColor="white" flexDirection="column">
        <DescriptionSection.Column>
          <DescriptionSection.Category>돈쭐히어로</DescriptionSection.Category>
          <DescriptionSection.Title>
            누구나 참여하는 <br />
            나비얌
          </DescriptionSection.Title>
          <DescriptionSection.Description>
            사회 각층의 결식 우려 대상자 뿐 아니라 <br />
            일반유저들도 어플 내에서 각종 혜택을 쌓으며 <br />
            우리동네 착한가게를 이용 할 수 있습니다.
          </DescriptionSection.Description>
          <DescriptionSection.ButtonContainer>
            <DescriptionSection.Button>
              돈쭐단 참여하기
            </DescriptionSection.Button>
            <DescriptionSection.Button marginLeft="10px">
              얌이 굿즈
            </DescriptionSection.Button>
          </DescriptionSection.ButtonContainer>
        </DescriptionSection.Column>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeftSlide}
          transition={{
            duration: 0.6,
          }}
          {...stylex.props(s.desc3)}
          viewport={{ once: true }}
        >
          <Image
            src={home_desc3}
            fill
            alt="나비얌은 급식카드를 쉽게 이용하기 위해 만들어졌음을 설명하는 사진"
          />
        </motion.div>
      </DescriptionSection>
      <DescriptionSection
        backgroundColor="yellow"
        flexDirection="column-reverse"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInRightSlide}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          {...stylex.props(s.desc4)}
        >
          <Image
            src={home_desc4}
            fill
            {...stylex.props(s.desc4_pc)}
            alt="나비얌은 급식카드를 쉽게 이용하기 위해 만들어졌음을 설명하는 사진"
          />
          <Image
            src={mobile_desc4}
            fill
            {...stylex.props(s.desc4_mobile)}
            alt="나비얌은 급식카드를 쉽게 이용하기 위해 만들어졌음을 설명하는 사진"
          />
        </motion.div>
        <DescriptionSection.Column>
          <DescriptionSection.Category>지역가게</DescriptionSection.Category>
          <DescriptionSection.Title>
            더불어 성장하는 <br />
            우리동네 착한가게
          </DescriptionSection.Title>
          <DescriptionSection.Description>
            결식우려 아동들에게 할인 해주시는 <br />
            나비식당 사장님들께서는 지원금을 통한 수익창출과 <br /> 나비얌을
            통한 새로운 홍보채널을 열 수 있습니다.
          </DescriptionSection.Description>
          <DescriptionSection.ButtonContainer>
            <DescriptionSection.Button>나비식당 보기</DescriptionSection.Button>
            <DescriptionSection.Button marginLeft="10px">
              입점 문의하기
            </DescriptionSection.Button>
          </DescriptionSection.ButtonContainer>
        </DescriptionSection.Column>
      </DescriptionSection>

      <DescriptionSection backgroundColor="white" flexDirection="column">
        <DescriptionSection.Column>
          <DescriptionSection.Category>착한가게</DescriptionSection.Category>
          <DescriptionSection.Title>
            선한영향력가게 <br />
            MOU
          </DescriptionSection.Title>
          <DescriptionSection.Description>
            전국 약 1,700곳의 선한영향력가게 <br />
            사장님들께서 나비얌 앱에 들어오셔서,
            <br /> 보다 편하게 가게를 방문하실 수 있습니다.
          </DescriptionSection.Description>
        </DescriptionSection.Column>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInLeftSlide}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          {...stylex.props(s.desc5)}
        >
          <Image
            src={home_desc5}
            fill
            alt="나비얌은 선한영향력가게와의 MOU를 통해 1700곳의 선한영향력가게를 앱 내에서 확인할 수 있어요"
          />
        </motion.div>
      </DescriptionSection>
    </>
  );
};

export default MainSection;
