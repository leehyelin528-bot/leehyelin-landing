import { TimelineItem, LectureProgram, YoutubeVideo, NavItem } from './types';

export const SITE_NAME = "Hyerin Lee";
export const ROLE_TITLE = "Cellist & Educator";

export const NAV_ITEMS: NavItem[] = [
  { label: '홈 (Home)', path: '/' },
  { label: '책 (Book)', path: '/book' },
  { label: '유튜브 (YouTube)', path: '/youtube' },
];

export const PROFILE_TEXT = `첼리스트 이혜린은 러시아 상트페테르부르크 국립음악원에서 학사, 석사, 최고연주자과정(박사과정)을 졸업한 연주자입니다. 
감미로운 첼로 선율과 진심 어린 스토리텔링을 바탕으로 전국 초·중·고등학교에서 인문예술 융합 진로교육, 다문화이해교육, 동기부여 강연 등 독보적인 강사로 활동하고 있습니다.

대학생과 일반 대중을 대상으로 자존감 회복, 힐링, 동기부여 강연을 활발히 진행하며, 예술과 교육의 경계를 허문 융합교육 전문가로 주목받고 있습니다.`;

export const EDUCATION: TimelineItem[] = [
  { title: "카자흐스탄 알마티 음악학교" },
  { title: "러시아 상트페테르부르크 국립음악원 학사" },
  { title: "러시아 상트페테르부르크 국립음악원 석사" },
  { title: "러시아 상트페테르부르크 국립음악원 최고연주자과정 (박사과정)" },
];

export const CAREER: TimelineItem[] = [
  { title: "다가치나눔교육플랫폼 (주) 씨드 공동대표" },
  { title: "한국교원대학교 융합교육연구소 연구원" },
  { title: "유니블하트 (탈북민지원단체) 이사" },
  { title: "극단 ‘새벽’ 기획자" },
];

export const LECTURE_AREAS: string[] = [
  "전국 초·중·고등학교 인문예술 기반 융합 진로탐색 교육",
  "스토리텔링을 통한 다문화이해교육 강연",
  "연 150회 이상 교육·강연 진행",
  "기업, 단체, 종교기관 대상 힐링 및 동기부여 강연"
];

export const LECTURE_PROGRAMS: LectureProgram[] = [
  {
    title: "스토리텔링과 음악으로 여는 삶의 전환",
    subtitle: "예술·인문학 융합 강연",
    items: [
      "첼로와 함께하는 인문학 산책",
      "첼로 연주를 통한 감성적 사유와 삶의 성찰",
      "스토리텔링 기반 자기 이해와 성장",
      "실존적 질문과 삶의 방향 탐색"
    ]
  },
  {
    title: "내 안의 노란 튤립",
    subtitle: "다문화 이해교육 · 생명존중교육",
    items: [
      "다문화 감수성과 공존의 가치",
      "예술을 통한 문화 간 이해와 존중",
      "차이를 포용하는 감성 중심 강연",
      "다양성과 공존을 주제로 한 스토리텔링",
      "생명존중과 관계 회복",
      "실화를 바탕으로 한 삶과 관계 성찰"
    ]
  },
  {
    title: "교사 · 학부모 대상 강연",
    subtitle: "교육 및 관계 회복",
    items: [
      "자녀와의 공감과 소통의 기술",
      "예술을 매개로 한 부모-자녀 관계 회복",
      "교사를 위한 셀프 리더십과 감정관리",
      "교직 스트레스 해소 및 번아웃 예방",
      "다문화 감수성과 교육 현장 실천",
      "변화하는 교육 환경 속 교사의 역할"
    ]
  }
];

export const MAJOR_CONTENTS: string[] = [
  "좋아하는 일을 직업으로 만든 사람들의 이야기 1",
  "좋아하는 일을 직업으로 만든 사람들의 이야기 2",
  "좋아하는 일을 직업으로 만든 사람들의 이야기 3",
  "「그래, 난 노란 튤립 첼리스트야!」"
];

export const BOOK_INFO = {
  title: "모두가 빨간 튤립일 필요는 없다",
  description: `노란 튤립으로도 충분히, 그리고 멋지게 살 수 있다는 메시지를 전하는 책이다.
예술고 탈락과 유학 실패, 끝없는 좌절을 넘어 ‘진짜 나’로 피어난 한 첼리스트의 변화의 여정을 담고 있다.

남들의 기준이 아닌 나만의 색깔로 살아가는 삶,
좌절을 힘으로 바꾸고 상처를 사명으로 끌어올린 이야기로
독자에게 깊은 공감과 용기를 전달한다.`,
  link: "https://product.kyobobook.co.kr/detail/S000218912497"
};

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  { 
    id: "vPCwuQhonnY", 
    title: "연주 영상 1", 
    url: "https://www.youtube.com/watch?v=vPCwuQhonnY"
  },
  { 
    id: "6Zc3Xkrw3SA", 
    title: "연주 영상 2", 
    url: "https://www.youtube.com/watch?v=6Zc3Xkrw3SA"
  },
  { 
    id: "Jkb-_BPQU-8", 
    title: "연주 강의 영상 3", 
    url: "https://www.youtube.com/watch?v=Jkb-_BPQU-8" 
  }
];