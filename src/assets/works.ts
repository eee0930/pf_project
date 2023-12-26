export interface IWorkList {
  id: number;
  name: string;
  color: string[];
  logo?: string;
  img: string[];
  git: string;
  url: string;
  des: string;
  eng: string;
}

const works = [
  {
    id: 202308,
    name: 'Cheese Book',
    color: ['rgb(255,209,106)', 'rgb(242, 173, 24)'],
    logo: 'cheesebook.png',
    img: ['cheesebook1', 'cheesebook2'],
    git: 'https://github.com/eee0930/cheese_book',
    url: 'https://eee0930.github.io/cheese_book',
    des: "책과 친해지고 싶은 게으름뱅이들을 위해 오로지 '책' 정보만 귀엽고 active하게 보여주는 SPA 사이트입니다. \n 내 성격유형에 맞는 책을 골라주며, 책 미리보기 기능, 베스트 셀러와 신작 정보 제공, 검색 기능까지 있을 건 다 있는 도서 사이트입니다.",
    eng: 'Interesting Cute Book Site, you can find various book information',
  },
  {
    id: 202302,
    name: 'Netflix Clone',
    color: ['rgb(223,70,58)', 'rgb(178, 56, 48)'],
    img: ['moviebooth1', 'moviebooth2'],
    git: 'https://github.com/eee0930/netflix_clone',
    url: 'https://eee0930.github.io/netflix_clone',
    des: '최신 영화와 tv 프로그램, 인물 정보들을 제공하며 검색기능이 있는 SPA 사이트입니다. 상세정보에선 영화나 tv 프로 방영 정보와, 등장인물 정보, 관련 프로그램, 트레일러 영상까지 볼 수 있습니다. ',
    eng: 'Netflix clone site, you can find various movies and TV series information',
  },
  {
    id: 202303,
    name: 'Org Issue App',
    color: ['rgb(63,121,178)', 'rgb(65,121,178)'],
    img: ['org1', 'org2'],
    git: 'https://github.com/eee0930/org_issue_app',
    url: 'https://eee0930.github.io/org_issue_app/',
    des: '관심있는 라이브러리의 github issue들을 comment 수 순서대로 한번에 볼 수 있는 앱입니다.',
    eng: 'React, Angular, TypeScript and VSCode Issues',
  },
  {
    id: 202304,
    name: 'MeowMeow Album',
    color: ['rgb(49,114,92)', 'rgb(50,114,92)'],
    img: ['cat1', 'cat2'],
    git: 'https://github.com/eee0930/meowmeow_album',
    url: 'https://eee0930.github.io/meowmeow_album/',
    des: '폴더별로 정리한 고양이 앨범을 볼 수 있는 앱입니다. Vanilla JS Class Component 방식으로 개발하였습니다.',
    eng: 'Cat Album SPA. Built using VanillaJS Class Component method.',
  },
  {
    id: 202201,
    name: 'Momentum',
    color: ['rgb(70,84,143)', 'rgb(70,85,143)'],
    img: ['todo1', 'todo2'],
    git: 'https://github.com/eee0930/momentum_clone',
    url: 'https://eee0930.github.io/momentum_clone/',
    des: '아름다운 배경과 함께 명언, 현재 날씨를 제공해주며, 스케쥴을 정리할 수 있는 앱입니다. 배경과 명언은 랜덤으로 제공됩니다.',
    eng: 'Useful and Beautiful To Do list',
  },
];

const playvoiceWork = {
  id: 202012,
  name: 'playvoice.org',
  color: ['rgb(52,116,55)', 'rgb(55,116,55)'],
  logo: 'playvoice.png',
  img: ['playvoice1', 'playvoice2'],
  git: 'https://github.com/eee0930/playvoice_project',
  url: 'https://playvoice.org/',
  des: 'Playvoice는 언어 학습 이론과 AI기반 IT기술을 영어 학습에 적용한 회원 참여형 앱 기반 영어 플랫폼입니다.',
  eng: 'English platform that applies language learning theory and AI tech',
};

export const workList = works.concat(playvoiceWork);
export const workLen = workList.length;

export interface IWorkInfo {
  id: number;
  name: string;
  period: string;
  contribution: string;
  color: string;
  skill: string[];
  list: string[];
  issue: string[];
  use: string;
}
export const workInfo = [
  {
    id: 202308,
    name: 'Cheese Book',
    period: '2023.08.11 - 2023.09.20',
    contribution: '100%',
    color: 'rgb(242, 173, 24)',
    skill: [
      'React.js',
      'TypeScript',
      'Recoil',
      'React-Query',
      'Styled-Components',
      'Framer-Motion',
    ],
    list: [
      `<img src="${process.env.PUBLIC_URL}/works/cheese1.gif" loading="lazy" alt="cheese book" /> <br/> <img src="${process.env.PUBLIC_URL}/works/cheese4.gif" loading="lazy" alt="cheese book" /> <br/> Framer-motion을 이용한 각종 애니메이션 기능으로 사용자 interaction 유도`,
      `<img src="${process.env.PUBLIC_URL}/works/cheese2.gif" loading="lazy" alt="cheese book" /> <br/> <img src="${process.env.PUBLIC_URL}/works/cheese3.gif" loading="lazy" alt="cheese book" /> <br/> Home과 ’Best Sellers’, 'New Books' 에서 베스트셀러, 신작리스트, 추천 도서 제공`,
      `<img src="${process.env.PUBLIC_URL}/works/cheese5.gif" loading="lazy" alt="cheese book" /> <br/> 책 미리보기 기능 (책 내용을 실제 책을 펼쳐서 보는 것처럼 16페이지 가량을 미리볼 수 있음)`,
      `<img src="${process.env.PUBLIC_URL}/works/cheese6.gif" loading="lazy" alt="cheese book" /> <br/> 'Your Taste' 메뉴에서 나의 성격이나 취향에 맞는 책 추천 기능 (MBTI 테스트)`,
      `<img src="${process.env.PUBLIC_URL}/works/cheese7.gif" loading="lazy" alt="cheese book" /> <br/> 책 좋아요 기능과 ’My Books’에서 좋아요한 책 리스트를 확인할 수 있음`,
      `<img src="${process.env.PUBLIC_URL}/works/cheese8.gif" loading="lazy" alt="cheese book" /> <br/> 도서, 작가 검색 기능`,
      `<img src="${process.env.PUBLIC_URL}/works/cheese9.gif" loading="lazy" alt="cheese book" /> <br/> 최근 본 책 리스트를 확인할 수 있음`,
      'Mobile과 PC 유저 모두를 위한 반응형 디자인',
    ],
    issue: [
      'Same Origin 정책에 의해 API를 불러오지 못하는 문제<br/> &rarr; JsonP 방법을 이용하여 script 태그에 api url을 호출하고 callback 받은 함수의 매개변수로 데이터를 받아 화면에 표시함',
      'Home화면에서 5초마다 한번씩 배너를 변경하기 위헤 setTimeout 기능을 썼지만 timeout이 한번 발생될 때마다 state들이 모두 업데이트되는 버그 발생<br/> &rarr; setTimeout을 정의한 변수를 담을 state를 정의한 후 useEffect 안에서 배너 변경 감지시 timeout 변수를 삭제한 후 다시 정의하여 해결',
      'Best Seller 탭에서 layout component를 따로 만들어 그 안에서 scroll이 움직이도록 구현하였기 때문에 useScroll hook이 적용되지 않는 문제가 생김<br/> &rarr; useRef에 이동할 target div를 배열로 담아 scrollIntoView를 이용하여 스크롤 이동을 구현하여 해결함',
      '각 책들의 미리보기 이미지 정보를 미리 알 수 없음 (이미지의 404 에러를 통해 미리보기 이미지 유무를 알 수 있음)<br/>&rarr; 이미지 url을 string으로 미리 만든 후 onError를 이용하여 cover 이미지로 교체함',
      '404에러가 난 이미지를 클릭시 index에 관한 정보기 없어 빈 화면이 나옴 <br/> &rarr; 이미지 태그에 onError가 실행될 경우 index가 0일때만 prevent라는 state를 true로 변경, prevent가 true일 경우 이미지 클릭 이벤트를 preventDefault, return 시켜 해결',
      '검색한 keyword로 재 검색시 새로 데이터를 불러오는 문제 <br/> &rarr; cashing 기능이 있는 react query 사용',
    ],
    use: '최신도서와 인기도서를 확인하고, 간단한 테스트를 통해 지인들에게 책을 추천할 수 있음',
  },
  {
    id: 202302,
    name: 'Netflix Clone',
    period: '2023.01.09 - 2023.01.20',
    contribution: '100%',
    color: 'rgb(178, 56, 48)',
    skill: [
      'React.js',
      'TypeScript',
      'Recoil',
      'React-Query',
      'React-Hook-Form',
      'Styled-Components',
      'Framer-Motion',
    ],
    list: [
      `<img src="${process.env.PUBLIC_URL}/works/movie1.gif" loading="lazy" alt="netflix clone" /> <br/> movie, tv show, weekly trending 탭에서 각각의 최신 컨텐츠, 인기 컨텐츠 목록들을 확인할 수 있음`,
      `<img src="${process.env.PUBLIC_URL}/works/movie2.gif" loading="lazy" alt="netflix clone" /> <br/> 컨텐츠를 클릭 시 컨텐츠 정보와 배우 정보 등을 확인 할 수 있음`,
      `<img src="${process.env.PUBLIC_URL}/works/movie3.gif" loading="lazy" alt="netflix clone" /> <br/> 컨텐츠 상세보기의 이미지에 마우스를 올릴 시 관련 컨텐츠의 trailer 영상을 볼 수 있음`,
      `<img src="${process.env.PUBLIC_URL}/works/movie4.gif" loading="lazy" alt="netflix clone" /> <br/> 오른쪽 상단의 검색창을 통해 원하는 검색어를 입력하면 관련 movie, tv, actor 정보를 확인할 수 있음`,
    ],
    issue: [
      '상세보기 모달을 띄우고나서 닫을 시 모달의 위치가 정해진 이유때문에 스크롤이 방금 클릭한 컨텐츠에 위치하지 않는 문제가 생김<br/> &rarr; framer-motion의 useScroll hook을 이용하여 현재 스크롤 위치 정보를 받아온 후 모달이 열리면 top을 해당 정보로 변경하여 해결',
      '다양한 컨텐츠를 보여주기 위해 슬라이드를 구현하였으나 슬라이드를 옆으로 넘기는 버튼을 빠르게 두번 클릭하면 component가 꼬여버리는 버그가 발생<br/>&rarr; 슬라이드가 움직이고 있다는 의미를 가진 leaving 이라는 state를 정의하고 AnimatePresence의 onExitComplete prop을 사용하여 leaving이 true인 동안은 버튼이 동작하지 않게 구현',
      '화면을 리렌더링했을 때 component가 render 되어서 slider 버튼을 클릭하지 않았는데도 slider 애니메이션이 옆으로 넘어가는 버그가 생김<br/> &rarr; framer-motion의 AnimatePresence에 initial prop을 이용하여 initial 값을 false로 설정하여 해결함. (리렌더링 될때 첫 애니메이션을 동작시키지 않겠다는 설정)',
    ],
    use: '네이버 영화 서비스의 종료로 최신 영화정보를 찾아볼 수 없는 아쉬움이 있었으나 해당 프로젝트로 최신 영화정보뿐만 아니라 trailer 영상도 함께 확인할 수 있어 지인들과 영화 정보 제공 앱으로 사용 중 ',
  },
  {
    id: 202303,
    name: 'Org Issue App',
    period: '2023.03.25 - 2023.03.27',
    contribution: '100%',
    color: 'rgb(65,121,178)',
    skill: [
      'React.js',
      'TypeScript',
      'Recoil',
      'React-Query',
      'Styled-Components',
    ],
    list: [
      '관심있는 라이브러리의 github issue들을 comment 수 순서대로 한번에 볼 수 있는 앱.',
      '상단의 select로 원하는 라이브러리를 선택 가능',
      '하단의 load 버튼으로 원하는 만큼 issue를 불러올 수 있으며, reset 버튼으로 모든 issue list를 지울 수 있음',
      '오른쪽 상단의 버튼을 클릭하면 다크모드 또는 라이트모드로 변경할 수 있음',
    ],
    issue: [
      '한가지 라이브러리의 issue들을 가져올 땐 문제가 없었으나 원하는 라이브러리를 select로 선택하여 issue를 불러오면 현재 있는 데이터의 하단에 새로 불러온 데이터가 쌓이는 문제가 발생 <br/> &rarr; Recoil의 selector를 이용하여 선택한 라이브러리의 데이터만 동적으로 가져오도록 구현',
      'API로 불러온 상세보기 내용이 markdown 된 내용임 <br/> &rarr; marked-react 라이브러리를 이용하여 mark up 된 글로 변경',
    ],
    use: 'React, Angular, TypeScript 등의 issue들을 확인하여 최신 동향 또는 버그 확인 가능',
  },
  {
    id: 202304,
    name: 'MeowMeow Album',
    period: '2023.08.11 - 2023.09.20',
    contribution: '100%',
    color: 'rgb(50,114,92)',
    skill: ['JavaScript', 'HTML', 'CSS'],
    list: [
      '고양이 사진이 저장된 폴더들이 나오고, 폴더를 클릭하면 또다른 폴더 또는 사진 목록들이 나옴',
      '사진 아이콘을 클릭하면 코양이 사진을 볼 수 있음',
      '뒤로가기 또는 상단의 bread crumb를 클릭하여 위치 이동을 할 수 있음',
    ],
    issue: [
      'React의 component 방식을 Vanilla JS로 구현하기 위해 class 생성자로 각각의 component 파일을 만들어 js module로 불러오는 방식을 이용. 하지만 virtual DOM이 없어 각각의 component의 한 요소가 변경될 시 component 전체가 리로딩되는 문제 발생 <br/> &rarr; 컴포넌트를 최대한 작은 단위로 쪼개서 리로딩 되는 범위를 줄임',
    ],
    use: 'id, name, type, filePath로 이루어진 객체의 배열로 api를 만들어 나만의 사진 폴더집을 만들 수 있음',
  },
  {
    id: 202201,
    name: 'Momentum',
    period: '2022.01.23 - 2022.01.27',
    contribution: '100%',
    color: 'rgb(70,85,143)',
    skill: ['JavaScript', 'HTML', 'CSS'],
    list: [
      '이름으로 간단하게 할 수 있는 로그인 기능',
      '랜덤으로 제공되는 아름다운 배경화면과 명언',
      '실시간 현재 위치와 날씨 제공, 현재 시간 표시',
      'todo list 작성 기능',
      '완료한 todo list는 체크하거나 삭제할 수 있음',
      '최근 완료한 5개의 todo list는 하단에서 확인할 수 있음',
    ],
    issue: [
      '현재 시간을 받아온 후 setInterval을 통해 1초씩 시간을 변경하는 함수를 만들어 시간을 표시하였으나, 네트워크 환경에 따라 시간이 실제와 달라지는 버그가 발생 <br/> &rarr; 현재 시간을 가져오는 함수 getClock을 만든 후 앱 실행과 동시에 getClock을 볼러와 시간을 표시한 후 setInterval로 해당 함수를 1초에 한번씩 불러오는 방법으로 변경',
      '날씨 정보를 받아오려면 현재 나의 정확한 위치를 알아야함<br/> &rarr; Event handler에서 기본으로 제공하는 event를 통해 coords.latitude, coords.longitude로 현재 위치를 받아옴 &rarr; 내가 있는 동네 이름과 날씨 두가지 다 제공할 수 있게 되었음',
    ],
    use: '개인용 todo list 및 브라우저 탭 메인화면으로 활용',
  },
];

export interface IPlayvoiceWorkInto {
  id: number;
  name: string;
  color: string;
  list: {
    name: string;
    period: string;
    contribution: string;
    skill: string[];
    des: string[];
    img: string[];
  }[];
  des: string[];
  img: string[];
  issue: string[];
  use: string[];
}
export const playvoiceWorkInfo = {
  id: 202012,
  name: 'playvoice.org',
  color: 'rgb(55,116,55)',
  list: [
    {
      name: 'PlayKick (플레이킥)',
      period: '2020.03 - 2020.09',
      contribution: '60%',
      skill: [
        'JavaScript',
        'jQuery',
        'Chart.js',
        'Thymeleaf',
        'BootStrap',
        'CSS',
      ],
      des: [
        '학습앱인 픽셔너리와 플레이보이스북을 복습하기 위한 게이미케이션 앱. 총 3가지 앱이 있음.',
        '1. Detective Julie: 픽셔너리에 속하는 게이미케이션 학습 앱. 그림을 보고 어떤 예문인지 추리하는 게임. 픽셔너리의 단어를 기억하는 것이 아니라 말로 옮길 수 있도록 연습할 수 있음.',
        '2. Egg Shot: 플레이보이스북에 속하는 게이미케이션 학습 앱. 우리말 문장을 보고 하단의 단어를 클릭하여 영어문장을 완성하는 게임. 플레이보이스북으로 학습한 예문들의 단어와 어순을 학습할 수 있음.',
        '3. Johny Deck: 플레이보이스북에 속하는 게이미케이션 학습 앱. 카드에 쓰인 우리말 문장을 보고 마스터 여부에 따라 슬라이드로 넘기는 게임. ’I am a student.’처럼 바로 말할 수 있는 표현들을 골라내어 학습한 예문들을 마스터했는지 확인 할 수 있음.',
      ],
      img: ['eggshot.png', 'julie.png'],
    },
    {
      name: 'PlaySquare (플레이스퀘어)',
      period: '2018.09 - 2019.06',
      contribution: '40%',
      skill: ['JavaScript', 'jQuery', 'Thymeleaf', 'BootStrap', 'CSS'],
      des: [
        '플레이보이스의 커뮤니티 학습 게시판. 영어에 대해 궁금한 점을 질문하고 답변할 수 있는 공간. 총 5가지 앱이 있음.',
        '1. Eng-stack: 해석이 궁금하거나 공유하고 싶은 짧은 영어 문장을 등록하고 회원들과 함께 해석하는 공간. 예문을 등록시 기본적으로 3가지의 AI들이 해석을 해줌.',
        '2. Kor-stack: 일상에서 빈번하게 사용하는 우리말을 영어로 옮기는 공간. 영어 표현이 궁금한 우리말을 질문하고 다른 회원들이 등록한 질문에 답변을 할 수 있음.',
        '3. Digest: 영어와 우리말의 문화적 차이, 입시 시험에서는 잘 다루지 않지만 영어와 관련된 중요한 내용들에 대해 공유하는 공간. 한가지 주제에 대해 여러 회원들이 글을 등록할 수 있음.',
        '4. GrammarBook: 자신이 공부했거나 잘 아는 문법 이론 및 팁을 공유하는 공간',
        '5. SmallTalk: 영어로 된 재미있는 주제들과 가십거리들을 회원들과 공유하고 가볍게 읽어볼 수 있는 독해 학습 공간. 독해 학습을 위해 문장 구조를 표시할 수 있는 에디터 제공. Watson AI의 문장 분석과 다양한 AI들의 실시간 해석 제공.',
      ],
      img: ['engstack.png', 'smalltalk.png'],
    },
    {
      name: 'Pictionary (픽셔너리)',
      period: '2018.10 - 2019.05',
      contribution: '30%',
      skill: ['JavaScript', 'jQuery', 'Thymeleaf', 'BootStrap', 'CSS'],
      des: [
        '동사와 동사구 중심으로 구성된 이미지 기반 오픈 사전.',
        '픽셔너리에서는 누구든지 자신이 기억하고자 하는 단어와 사진, 그리고 예문들을 등록할 수 있음.',
        '단어와 예문을 등록시 AI 음성으로 변환되어 바로 들을 수 있음.',
      ],
      img: ['pictionary.png', 'pictionary2.png'],
    },
    {
      name: 'DictationBook (딕테이션북)',
      period: '2018.12 - 2019.03',
      contribution: '20%',
      skill: [
        'JavaScript',
        'jQuery',
        'Chart.js',
        'Thymeleaf',
        'BootStrap',
        'CSS',
      ],
      des: [
        '영어 받아쓰기 테스트 앱.',
        '일상에서 자주 쓰이는 말들을 다양한 테마로 연습할 수 있음.',
      ],
      img: ['dictationbook.png'],
    },
    {
      name: 'PlayvoiceBook (플레이보이스북)',
      period: '2018.04 - 2019.03',
      contribution: '30%',
      skill: ['JavaScript', 'jQuery', 'Thymeleaf', 'BootStrap', 'CSS'],
      des: [
        '일상적 대회에 자주 사용되거나 기억하기 편리한 문장을 패턴으로 학습할 수 있음.',
        '전 세계인의 영어 발음을 멀티 보이스로 제공함.',
      ],
      img: ['playvoicebook.png'],
    },
    {
      name: 'MyPage (마이페이지)',
      period: '2019.04 - 2020.09',
      contribution: '40%',
      skill: [
        'JavaScript',
        'jQuery',
        'Chart.js',
        'Thymeleaf',
        'BootStrap',
        'CSS',
      ],
      des: [
        'playvoice 회원들의 통합 랭킹 제공, 각 앱마다 학습 랭킹 제공',
        '특정 랭킹 점수에 도달하면 레벨 업을 위한 테스트 진행',
        '알람 기능과 친구추가 기능',
        '학습한 컨텐츠와 댓글 보기 기능',
        '학습 랭킹 정보와 chart를 통한 비쥬얼적인 학습능률 확인',
      ],
      img: ['mypage.png', 'mypage2.png'],
    },
  ],
  issue: [
    '네이버만큼이나 많은 데이터와 화면 UI들로 인해 JavaScript로 작업해야하는 부분이 많았음. 해당 코드들을 선언형 스타일로 작성하였기 때문에 가독성이 떨어지며 유지보수하기가 불편함.<br/> &rarr; 주석 규칙을 정하고 서버와 통신하는 JS 코드는 js 파일로 따로 분리했으며 dom을 handling 하는 JS 코드들은 HTML 파일 맨 위에 순서대로 배치',
    '대부분의 등록, 수정, 삭제 과정을 비동기로 진행하였음. 회원이 컨텐츠를 등록하면 즉시 컨텐츠를 화면에 보여주며, 영어예문은 영어 음성을 만들어 바로 voice로 들려줘야하는 어려움이 있었음.<br/> &rarr; playvoice_audio.js라는 공통 오디오 모듈을 만들어 버튼에 정해진 class 명만 붙이면 예문이 재생되도록 구현하여 해결. 비동기로 화면에 등록되는 HTML 코드의 비어있는 버전을 파일 가장 하단에 배치하여 clone을 한 후 컨텐츠를 넣는 방식으로 해결',
    '유료 멤버십을 위한 결제 모듈 넣기, 결제 모듈 창을 띄우기 위해 필요한 정보, 리다이렉트로 필요한 페이지들 등<br/> &rarr; 결제 모듈 기능을 팀장인 저는 전체를, 팀원 각자는 맡은 부분을 공부한 후 각자 발표를 함. 이니시스 계약 후 발표한 자료에 따라 화면, 서버, js 파일 순으로 개발 진행. 가격은 100원으로 책정한 후 약 50번 이상의 테스트 후 완벽히 구동시킴',
    '회원들이 영어문장을 등록한 후 단어에 빨강색으로 강조 표시를 하는 입력란이 많음. 입력란을 input이 아닌 div로 만들고, 대부분 회원들이 영어 문장을 복사해오기때문에 HTML 태그가 그대로 입력되거나 영어가 아닌 문자열이 입력되는 경우가 많았음.<br/> &rarr; 클립보드의 스타일 서식을 모두 지우고 순수 텍스트만 붙여넣기 되도록 구현. 해당 구현을 모듈로 따로 만들어 필요한 화면에 넣어 해결',
  ],
  use:
    "무료 회원들은 출석 및 컨텐츠 작성으로 '플레이포인트'를 얻고, 해당 플레이포인트 차감으로 9개의 학습앱을 각각 학습할 수 있음. " +
    "유료 회원들은 플레이포인트 제한 없이 모든 학습앱과 유료 학습앱으로 공부를 할 수 있으며, 컨텐츠 작성시 '골드포인트'를 얻어 추후 개발될 store에서 현금처럼 사용할 수 있도록 함. " +
    '모든 학습 앱들엔 회원들의 랭킹 정보가 있으며, 회원들은 마이페이지에서 자신이 학습한 컨텐츠를 복습하고 chart를 통해 자신의 성장율을 확인할 수 있음. ' +
    '10개의 학습앱은 각각 app store에 등록될 예정이었으며, 모든 학습앱과 회원들의 커뮤니티 앱들은 playvoice 웹사이트에서 통합적으로 이용할 수 있음.',
};
