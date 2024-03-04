type HistoryItemType = {
  month: number;
  title: string;
};

type HistoryListType = {
  year: number;
  data: HistoryItemType[];
};

export const history: HistoryListType[] = [
  {
    year: 2022,
    data: [
      {
        month: 7,
        title:
          "[경기도지사상] 경기도 공공데이터 활용분석 아이디어 공모전 최우수상 수상",
      },
      {
        month: 11,
        title:
          "[대통령상] 범정부 공공데이터 활용 창업경진대회 왕중왕전 대상 수상",
      },
      { month: 12, title: "Microsoft for Startups Founders Hub" },
    ],
  },
  {
    year: 2023,
    data: [
      {
        month: 2,
        title: "KT&G 국제 대학생 창업교류전(AASVF) 한국대표 선발전 1위",
      },
      { month: 3, title: "서울대학교 SNUBIZ 창업경진대회 최우수상 수상" },
      { month: 4, title: "SK ESG Korea 선정" },
      { month: 4, title: "주식회사 나눔비타민 법인 설립" },
      { month: 5, title: "서울대학교 SNAAC NAACst STEP 3기 선정" },
      { month: 5, title: "신용보증기금 Start-up NEST 13기 선정" },
      {
        month: 5,
        title: "중소벤처기업부 예비창업패키지 선정 (소셜벤처 최고금액)",
      },
      { month: 6, title: "교육부 학생창업유망팀300 성장트랙 선정" },
      { month: 6, title: "춤추는우주인교육협회 MOU (봉사시간 발급 연계)" },
      { month: 6, title: "한국사회투자 소셜링크아카데미 선정" },
      {
        month: 6,
        title: "블루포인트파트너스 미래응원상, 함께일하는재단 함께혁신상 수상",
      },
      { month: 6, title: "서울대학교 캠퍼스타운 데모데이 우수상 수상" },
      { month: 6, title: "Next Rise 데모데이 출전" },
      { month: 7, title: "Comeup Stars 아카데미 리그 선정" },
      { month: 7, title: "현대차 정몽구재단 H-온드림 13기 펠로우 선정" },
      { month: 7, title: "선한영향력가게(전국 3,700곳) MOU 체결" },
      {
        month: 8,
        title:
          "현대차 정몽구재단 H-온드림 사회혁신 창업가 경연대회 최우수상 수상",
      },
      { month: 8, title: "서울대학교 해동주니어 스타트업 5기" },
      { month: 8, title: "관악구 봉천제일종합시장 MOU" },
      { month: 9, title: "수파자x소소돌방 MOU 체결" },
      {
        month: 9,
        title:
          "SC 제일은행 여성 청년 창업가 데모데이 Tier1 우승_ WiE Digital Innovator",
      },
      {
        month: 9,
        title:
          "한국사회복지협의회 사회공헌센터 사회공헌 파트너스데이 발표 (TOP10), 우수상 수상",
      },
      { month: 9, title: "Try Everything 발표 및 오프라인 부스 운영" },
      { month: 9, title: "소셜벤처, 벤처기업, 여성기업 인증" },
      {
        month: 9,
        title:
          "관악구x봉천제일종합시장 상인회x서울신용보증재단 관악지점 추석 결식아동 장보기 부담완화 사업 추진",
      },
      {
        month: 10,
        title:
          "나비얌 가게 1호점 (커피플래닛) 현판식 진행 (SK Telecom, 서울경제진흥원)",
      },
      { month: 11, title: "중앙사회서비스원장상, 여성벤처협회장상 수상" },
      {
        month: 11,
        title: "교육부 학생창업유망팀300 한국청년기업가정신재단 이사장상 수상",
      },
      { month: 12, title: "청년밥상문간 MOU (전국 지점 일괄)" },
      {
        month: 12,
        title: "한국사회복지협의회x프리다츠 위탁운영 (기부금영수증)",
      },
      {
        month: 12,
        title:
          "서울경제진흥원x푸드메이커x선한영향력가게 <찾아가는 도시락> 사업",
      },
      { month: 12, title: "예비사회적기업 지정 (여성가족부 부처형)" },
      { month: 12, title: "나비얌 가게 (진짜파스타) 현판식 (서울경제진흥원)" },
    ],
  },
  {
    year: 2024,
    data: [
      { month: 1, title: "한국건강관리협회로부터 1억5천만 원 예산" },
      {
        month: 1,
        title:
          "[EO GSEA KOREA] 글로벌 대학생 기업가 창업경진대회 한국 본선 최우수상 수상",
      },
      { month: 1, title: "[머니투데이 TV] 방영" },
      {
        month: 1,
        title: "서울대기술지주, 임팩트스퀘어로부터 4억 원 시드 투자 유치",
      },
    ],
  },
];
