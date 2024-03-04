"use client";
import React, { useRef } from "react";
import stylex from "@stylexjs/stylex";
import { history } from "@/constants/history";
import Image from "next/image";
import { members } from "@/constants/member";
import groupPhoto from "@/../public/images/team/groupPhoto.jpeg";
import { useScroll, useTransform } from "framer-motion";

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
});

const Team = () => {
  return (
    <div {...stylex.props(s.container)}>
      <h1 {...stylex.props(s.heading)}>
        세상의 모든 <br /> 결식문제를 해결해나갑니다.
      </h1>

      <Image src={groupPhoto} alt="나비팀 단체사진" width="843" height="562" />

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

      <div {...stylex.props(s.historyContainer)}>
        <div {...stylex.props(s.paragraphContainer)}>
          <p {...stylex.props(s.paragraph)}>
            세상을 바꿔나가는 <br />
            나비팀의 이야기
          </p>

          <div {...stylex.props(s.outerColoContainer)}>
            {history.map((data) => (
              <div key={data.year}>
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
