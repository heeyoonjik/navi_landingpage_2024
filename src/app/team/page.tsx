"use client";
import React, { useRef } from "react";
import stylex from "@stylexjs/stylex";
import { history } from "@/constants/history";
import Image from "next/image";
import { members } from "@/constants/member";
import groupPhoto from "@/../public/images/team/groupPhoto.jpeg";
import { useScroll, useTransform } from "framer-motion";
import Partner from "../_home/partner/Partner";

import mou1 from "@/../public/images/team/mou1.jpg";
import mou2 from "@/../public/images/team/mou2.jpg";
import mou3 from "@/../public/images/team/mou3.jpg";
import mou4 from "@/../public/images/team/mou4.jpg";

import press1 from "@/../public/images/team/press1.png";
import press2 from "@/../public/images/team/press2.png";
import press3 from "@/../public/images/team/press3.png";

import NewsItem from "./newsBlock/NewsItem";
import MainNewsItem from "./newsBlock/MainNewsItem";

const MOBILE = "@media (max-width: 860px)";

const s = stylex.create({
  container: {
    width: "100%",
    paddingTop: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "200px",
  },

  historyContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    backgroundColor: "#EEEEEE",
    paddingTop: "50px",
    paddingBottom: "50px",
  },

  heading: {
    fontWeight: "700",
    color: "#3C3C32",
    textAlign: "center",
    fontSize: {
      default: "60px",
      [MOBILE]: "30px",
    },
  },

  paragraph: {
    fontSize: "36px",
    color: "#3C3C32",
  },

  outerColoContainer: {
    display: "flex",
    flexDirection: "column",
    width: {
      default: "843px",
      [MOBILE]: "320px",
    },
  },
  colContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "25px",
  },
  rowContainer: {
    display: "flex",
    gap: "100px",
  },

  innerRowContainer: {
    display: "flex",
    gap: "30px",
  },

  year: {
    fontSize: "35px",
    fontWeight: "bold",
    color: "#3C3C32",
  },
  month: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "#3C3C32",
  },
  title: {
    fontSize: "18px",
    color: "#3C3C32",
  },

  memberRowContainer: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
  },
  memberBoldParagraph: {
    color: "#3C3C32",
    fontSize: "35px",
    fontWeight: "bold",
  },

  memberLightParagraph: {
    color: "#3C3C32",
    fontSize: "35px",
  },

  memberDivider: {
    color: "#FFC000",
    fontSize: "35px",
    fontWeight: "bold",
  },

  paragraphContainer: {
    width: {
      default: "843px",
      [MOBILE]: "320px",
    },
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  missionParagraph: {
    color: "#3C3C32",
    fontSize: "35px",
    lineHeight: 1.6,
  },

  missionParagraphRight: {
    color: "#3C3C32",
    fontSize: "35px",
    lineHeight: 1.6,
    textAlign: "right",
  },

  missionContainer: {
    display: "flex",
    gap: "100px",
    flexDirection: "column",
    width: {
      default: "843px",
      [MOBILE]: "320px",
    },
  },

  memberListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "50px",
  },

  memberBodyRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  memberContainer: {
    width: {
      default: "843px",
      [MOBILE]: "320px",
    },
    display: "flex",
    backgroundColor: "red",
    overflowX: "scroll",
  },

  MainNewsContainer: {
    width: {
      default: "843px",
      [MOBILE]: "320px",
    },
  },

  miniNewsContainer: {
    width: {
      default: "843px",
      [MOBILE]: "320px",
    },
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    overflowX: "scroll",
  },
});

const Team = () => {
  return (
    <div {...stylex.props(s.container)}>
      <h1 {...stylex.props(s.heading)}>
        세상의 모든 <br /> 결식문제를 해결해나갑니다.
      </h1>

      <div {...stylex.props(s.missionContainer)}>
        <p {...stylex.props(s.missionParagraph)}>
          우리는 모바일 식사권 기반으로 <br /> 결식우려아동의 식사 접근성 개선,
          투명한 후원 연결, <br /> 지역 커뮤니티와 소상공인의 디지털 전환을
          지원합니다.
        </p>
        <p {...stylex.props(s.missionParagraphRight)}>
          결식우려아동을 위한 식사권 플랫폼으로 시작했지만, <br /> 아동의 결식
          뿐 아니라 맞벌이가구, 어르신 등
          <br />
          우리사회의 다양한 결식을 해결하는 <br /> 사회서비스로 자리매김하고자
          합니다.
        </p>
      </div>

      <h1 {...stylex.props(s.heading)}>
        국내 주요 기관·단체·투자사들과 함께합니다
      </h1>
      <div style={{ marginTop: "-100px" }}>
        <Partner />
      </div>

      <h1 {...stylex.props(s.heading)}>
        다양한 기업들과 함께 <br /> CSR를 활동을 진행하고 있습니다
      </h1>
      <div {...stylex.props(s.MainNewsContainer)}>
        <MainNewsItem
          imgUrl={mou4}
          title="청년문간사회적협동조합, 나눔비타민과 업무협약 체결"
          desc="청년문간사회적협동조합과 나눔비타민은 이번 MOU 체결을 통해 결식 우려 아동의 가정이 ‘나비얌’ 앱을 통해 무료 식사 쿠폰을 발급 받아 청년밥상문간 전 지점에서 편하게 이용할 수 있도록 했다. 심리적 낙인감이나 부담 없이, 보다 영양적으로 건강한 식사를 편하게 즐길 수 있도록 하는 것이 목표임을 밝혔다."
          url="https://www.venturesquare.net/908087"
        />
      </div>
      <div {...stylex.props(s.miniNewsContainer)}>
        <NewsItem
          url="https://www.cooknchefnews.com/news/view/1065573509643410"
          imgUrl={mou1}
          title="나비얌, 봉리단길 골목형 상점가와 공식 업무협약 체결"
          desc={`올해는 봉천제일종합시장에 이어 봉리단길 골목형 상점가와 함께 업무협약을 맺어 관악구 내 시장 협력체계를 확대하고, 아동급식카드 가맹점 연계 및 아동친화형 시장으로 조성할 계획이다.`}
        />
        <NewsItem
          url="https://www.venturesquare.net/913673"
          imgUrl={mou2}
          title="나눔비타민, 유라이프와 업무협약 체결"
          desc={`이번 공식 업무협약 체결을 통해, 유라이프의 공동주택 주거 서비스 중 조식 서비스를 나비얌 애플리케이션을 통해 편하게 이용할 수 있도록 함께 협력하기로 했다. 업무협약의 궁극적인 목표는 기존 오프라인 기반 주거 서비스를 디지털화하여 입주민의 주거 복지와 삶의 질을 향상시키는 것에 있다.`}
        />

        <NewsItem
          url="https://www.venturesquare.net/914113"
          imgUrl={mou3}
          title="나눔비타민, ‘밀프로젝트’와 업무협약 체결"
          desc="이번 협약을 통해, 나비얌과 밀프로젝트는 결식우려아동 식사 지원을 위한 파트너십을 강화하기로 했다. 밀프로젝트의 너겟 제품을 지속적으로 나눔을 진행하며 아이들이 평소 챙겨먹기 어려운 채소를 맛있고 건강하게 즐기고 영양을 개선할 수 있도록 도울 계획이다."
        />
      </div>

      <h1 {...stylex.props(s.heading)}>
        언론이 주목하는 <br /> 나비팀
      </h1>
      <div {...stylex.props(s.MainNewsContainer)}>
        <MainNewsItem
          imgUrl={press1}
          title="식사 나눔 플랫폼 ‘나비얌’, 출시 7개월…지역가게 4천 곳 넘어"
          desc="나눔비타민은 2022년 7월 대학생 창업팀이 세상의 모든 결식문제 해결을 위해 출발한 스타트업으로 모바일 식사권 기반의 결식우려아동 식사 접근성 개선, 투명한 후원 연결, 지역 커뮤니티와 소상공인의 디지털 전환지원 등 결식문제와 지역상권 활성화에 기여하는 스타트업으로, 지난 1월 서울대학교 기술지주와 임팩트스퀘어로부터 4억원의 시드 투자를 유치했다."
          url="https://www.youthdaily.co.kr/news/article.html?no=150648"
        />
      </div>
      <div {...stylex.props(s.miniNewsContainer)}>
        <NewsItem
          url="https://www.mk.co.kr/news/it/10919407"
          imgUrl={press2}
          title="식사 나눔 플랫폼 ‘나비얌’ 운영 나눔비타민, 시드 투자 유치"
          desc={`결식우려아동과 착한가게를 연결하는 따뜻한 식사 나눔 플랫폼 ‘나비얌’을 운영하는 나눔비타민이 서울대기술지주와 임팩트스퀘어로부터 4억 원 규모의 시드(Seed) 투자를 유치했다고 12일 밝혔다.`}
        />
        <NewsItem
          url="https://news.kbs.co.kr/news/pc/view/view.do?ncd=7945042"
          imgUrl={press3}
          title="느린 청년’이 만드는 김치찌개…“슬로우점으로 오세요"
          desc={`3천 원만 내면 김치찌개를 먹을 수 있는 특별한 식당이 있습니다.어려운 청년들이 부담 없이 식사를 할 수 있는 '청년밥상문간'인데요.최근엔 보다 특별한 '슬로우점'이 문을 열었습니다.이곳에서는 '느린 청년'들이 일을 하고 있는데요.`}
        />
      </div>

      <div {...stylex.props(s.historyContainer)}>
        <div {...stylex.props(s.paragraphContainer)}>
          <p {...stylex.props(s.paragraph)}>
            세상을 바꿔나가는 <br />
            나비팀의 이야기
          </p>

          <div {...stylex.props(s.outerColoContainer)}>
            {history.map((data) => (
              <div key={data.year} style={{ marginBottom: "20px" }}>
                <div {...stylex.props(s.rowContainer)}>
                  <p {...stylex.props(s.year)}>{data.year}</p>
                  <div {...stylex.props(s.colContainer)}>
                    {data.data.map((d) => (
                      <div key={d.title} {...stylex.props(s.innerRowContainer)}>
                        <p {...stylex.props(s.month)}>
                          {d.month < 10 ? "0" + d.month : d.month}
                        </p>
                        <p {...stylex.props(s.title)}>{d.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div {...stylex.props(s.memberListContainer)}>
        <p {...stylex.props(s.paragraph)}>팀원 소개</p>

        <Image
          src={groupPhoto}
          alt="나비팀 단체사진"
          width="843"
          height="562"
        />

        <div>
          {members.map((member) => (
            <div key={member.name} {...stylex.props(s.memberRowContainer)}>
              <Image
                src={`/images/team/${member.name}.png`}
                alt={member.name}
                width="271"
                height="271"
              />
              <div>
                <div {...stylex.props(s.memberBodyRow)}>
                  <p {...stylex.props(s.memberBoldParagraph)}>{member.role}</p>
                  <p {...stylex.props(s.memberDivider)}>|</p>
                  <p {...stylex.props(s.memberBoldParagraph)}>{member.name}</p>
                </div>
                <p {...stylex.props(s.memberLightParagraph)}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
