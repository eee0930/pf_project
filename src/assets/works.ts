export interface IWork {
  name: string;
  color: string;
  logo?: string;
  img: string[];
  git: string;
  url: string;
  skill: string[];
  des: string;
  imgList?: string[];
}

export const workList = [
  {
    name: 'Cheese Book',
    color: '#F9CC73',
    logo: 'cheesebook.png',
    img: ['cheesebook1', 'cheesebook2'],
    git: 'https://github.com/eee0930/cheese_book',
    url: 'https://eee0930.github.io/cheese_book',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
      'FramerMotion',
    ],
    des: "책과 친해지고 싶은 게으름뱅이들을 위해 오로지 '책' 정보만 귀엽고 active하게 보여주는 SPA 사이트입니다. \n 내 성격유형에 맞는 책을 골라주며, 책 미리보기 기능, 베스트 셀러와 신작 정보 제공, 검색 기능까지 있을 건 다 있는 도서 사이트입니다.",
    imgList: [
      'cheese1',
      'cheese2',
      'cheese3',
      'cheese4',
      'cheese5',
      'cheese6',
      'cheese7',
      'cheese8',
      'cheese9',
    ],
  },
  {
    name: 'Netflix Clone',
    color: '#af3435',
    img: ['moviebooth1', 'moviebooth2'],
    git: 'https://github.com/eee0930/netflix_clone',
    url: 'https://eee0930.github.io/netflix_clone',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'ReactHookForm',
      'StyledComponents',
      'FramerMotion',
    ],
    des: '최신 영화와 tv 프로그램, 인물 정보들을 제공하며 검색기능이 있는 SPA 사이트입니다. 상세정보에선 영화나 tv 프로 방영 정보와, 등장인물 정보, 관련 프로그램, 트레일러 영상까지 볼 수 있습니다. ',
    imgList: ['movie1', 'movie2', 'movie3', 'movie4'],
  },

  {
    name: 'Org Issue App',
    color: '#2A9885',
    img: ['org1', 'org2'],
    git: 'https://github.com/eee0930/org_issue_app',
    url: 'https://eee0930.github.io/org_issue_app/',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
    ],
    des: '관심있는 라이브러리의 github issue들을 comment 수 순서대로 한번에 볼 수 있는 앱입니다.',
  },
  {
    name: 'MeowMeow Album',
    color: '#63C4F0',
    img: ['cat1', 'cat2'],
    git: 'https://github.com/eee0930/meowmeow_album',
    url: 'https://eee0930.github.io/meowmeow_album/',
    skill: ['JavaScript', 'HTML', 'CSS'],
    des: '폴더별로 정리한 고양이 앨범을 볼 수 있는 앱입니다. Vanilla JS Class Component 방식으로 개발하였습니다.',
  },
  {
    name: 'Momentum',
    color: '#0E6439',
    img: ['todo1', 'todo2'],
    git: 'https://github.com/eee0930/momentum_clone',
    url: 'https://eee0930.github.io/momentum_clone/',
    skill: ['JavaScript', 'HTML', 'CSS'],
    des: '아름다운 배경과 함께 명언, 현재 날씨를 제공해주며, 스케쥴을 정리할 수 있는 앱입니다. 배경과 명언은 랜덤으로 제공됩니다.',
  },
  // {
  //   name: 'playvoice.org',
  //   color: '#1b1f40',
  //   logo: 'playvoice.png',
  //   img: ['playvoice1'],
  //   git: 'https://github.com/eee0930/playvoice_project',
  //   url: 'https://playvoice.org/',
  //   skill: ['JavaScript, jQuery, Thymeleaf, BootStrap, CSS, Chart.js'],
  //   des: 'Playvoice는 언어 학습 이론과 AI기반 IT기술을 영어 학습에 적용한 회원 참여형 앱 기반 영어 플랫폼입니다. (현재 운영 중이지 않음)',
  // },
];

export const workInfo = [
  {
    name: 'Cheese Book',
    period: '2023.08.11 - 2023.09.20',
    Contribution: '100%',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
      'FramerMotion',
    ],
    list: [
      `<img src=${process.env.PUBLIC_URL}/works/cheese1.gif> <br/> <img src=${process.env.PUBLIC_URL}/works/cheese4.gif> <br/> Framer-motion을 이용한 각종 애니메이션 기능으로 사용자 interaction 유도`,
      `<img src=${process.env.PUBLIC_URL}/works/cheese2.gif> <br/> <img src=${process.env.PUBLIC_URL}/works/cheese3.gif> <br/> Home과 ’Best Sellers’, 'New Books' 에서 베스트셀러, 신작리스트, 추천 도서 제공`,
      `<img src=${process.env.PUBLIC_URL}/works/cheese5.gif> <br/> 책 미리보기 기능 (책 내용을 실제 책을 펼쳐서 보는 것처럼 16페이지 가량을 미리볼 수 있음)`,
      `<img src=${process.env.PUBLIC_URL}/works/cheese6.gif> <br/> 'Your Taste' 메뉴에서 나의 성격이나 취향에 맞는 책 추천 기능 (MBTI 테스트)`,
      `<img src=${process.env.PUBLIC_URL}/works/cheese7.gif> <br/> 책 좋아요 기능과 ’My Books’에서 좋아요한 책 리스트를 확인할 수 있음`,
      `<img src=${process.env.PUBLIC_URL}/works/cheese8.gif> <br/> 도서, 작가 검색 기능`,
      `<img src=${process.env.PUBLIC_URL}/works/cheese9.gif> <br/> 최근 본 책 리스트를 확인할 수 있음`,
      'Mobile과 PC 유저 모두를 위한 반응형 디자인',
    ],
    issue: [
      'Some Origin 정책에 의해 API를 불러오지 못하는 문제<br/> -> JsonP 방법을 이용하여 script 태그에 api url을 호출하고 callback 받은 함수의 매개변수로 데이터를 받아 화면에 표시함',
      'Home화면에서 5초마다 한번씩 배너를 변경하기 위헤 setTimeout 기능을 썼지만 timeout이 한번 발생될 때마다 state들이 모두 업데이트되는 버그 발생<br/> -> setTimeout을 정의한 변수를 담을 state를 정의한 후 useEffect 안에서 배너 변경 감지시 timeout 변수를 삭제한 후 다시 정의하여 해결',
      'Best Seller 탭에서 layout component를 따로 만들어 그 안에서 scroll이 움직이도록 구현하였기 때문에 useScroll hook이 적용되지 않는 문제가 생김<br/> -> useRef에 이동할 target div를 배열로 담아 scrollIntoView를 이용하여 스크롤 이동을 구현하여 해결함',
      '각 책들의 미리보기 이미지 정보를 미리 알 수 없음 (이미지의 404 에러를 통해 미리보기 이미지 유무를 알 수 있음)<br/>-> 이미지 url을 string으로 미리 만든 후 onError를 이용하여 cover 이미지로 교체함',
      '404에러가 난 이미지를 클릭시 index에 관한 정보기 없어 빈 화면이 나옴 <br/> -> 이미지 태그에 onError가 실행될 경우 index가 0일때만 prevent라는 state를 true로 변경, prevent가 true일 경우 이미지 클릭 이벤트를 preventDefault, return 시켜 해결',
      '검색한 keyword로 재 검색시 새로 데이터를 불러오는 문제 <br/> -> cashing 기능이 있는 react query 사용',
    ],
    use: '최신도서와 인기도서를 확인하고, 간단한 테스트를 통해 지인들에게 책을 추천할 수 있음',
  },
  {
    name: 'Netflix Clone',
    period: '2023.01.09 - 2023.01.20',
    Contribution: '100%',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'ReactHookForm',
      'StyledComponents',
      'FramerMotion',
    ],
    list: [
      `<img src=${process.env.PUBLIC_URL}/works/movie1.gif> <br/> movie, tv show, weekly trending 탭에서 각각의 최신 컨텐츠, 인기 컨텐츠 목록들을 확인할 수 있음`,
      `<img src=${process.env.PUBLIC_URL}/works/movie2.gif> <br/> 컨텐츠를 클릭 시 컨텐츠 정보와 배우 정보 등을 확인 할 수 있음`,
      `<img src=${process.env.PUBLIC_URL}/works/movie3.gif> <br/> 컨텐츠 상세보기의 이미지에 마우스를 올릴 시 관련 컨텐츠의 trailer 영상을 볼 수 있음`,
      `<img src=${process.env.PUBLIC_URL}/works/movie4.gif> <br/> 오른쪽 상단의 검색창을 통해 원하는 검색어를 입력하면 관련 movie, tv, actor 정보를 확인할 수 있음`,
    ],
    issue: [
      '상세보기 모달을 띄우고나서 닫을 시 모달의 위치가 정해진 이유때문에 스크롤이 방금 클릭한 컨텐츠에 위치하지 않는 문제가 생김<br/> -> framer-motion의 useScroll hook을 이용하여 현재 스크롤 위치 정보를 받아온 후 모달이 열리면 top을 해당 정보로 변경하여 해결',
      '다양한 컨텐츠를 보여주기 위해 슬라이드를 구현하였으나 슬라이드를 옆으로 넘기는 버튼을 빠르게 두번 클릭하면 component가 꼬여버리는 버그가 발생<br/>-> 슬라이드가 움직이고 있다는 의미를 가진 leaving 이라는 state를 정의하고 AnimatePresence의 onExitComplete prop을 사용하여 leaving이 true인 동안은 버튼이 동작하지 않게 구현',
      '화면을 리렌더링했을 때 component가 render 되어서 slider 버튼을 클릭하지 않았는데도 slider 애니메이션이 옆으로 넘어가는 버그가 생김<br/> -> framer-motion의 AnimatePresence에 initial prop을 이용하여 initial 값을 false로 설정하여 해결함. (리렌더링 될때 첫 애니메이션을 동작시키지 않겠다는 설정)',
    ],
    use: '네이버 영화 서비스의 종료로 최신 영화정보를 찾아볼 수 없는 아쉬움이 있었으나 해당 프로젝트로 최신 영화정보뿐만 아니라 trailer 영상도 함께 확인할 수 있어 지인들과 영화 정보 제공 앱으로 사용 중 ',
  },

  {
    name: 'Org Issue App',
    period: '2023.03.25 - 2023.03.27',
    Contribution: '100%',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
    ],
    list: [
      '관심있는 라이브러리의 github issue들을 comment 수 순서대로 한번에 볼 수 있는 앱.',
      '상단의 select로 원하는 라이브러리를 선택 가능',
      '하단의 load 버튼으로 원하는 만큼 issue를 불러올 수 있으며, reset 버튼으로 모든 issue list를 지울 수 있음',
      '오른쪽 상단의 버튼을 클릭하면 다크모드 또는 라이트모드로 변경할 수 있음',
    ],
    issue: [
      '한가지 라이브러리의 issue들을 가져올 땐 문제가 없었으나 원하는 라이브러리를 select로 선택하여 issue를 불러오면 현재 있는 데이터의 하단에 새로 불러온 데이터가 쌓이는 문제가 발생 <br/> -> Recoil의 selector를 이용하여 선택한 라이브러리의 데이터만 동적으로 가져오도록 구현',
      'API로 불러온 상세보기 내용이 markdown 된 내용임 <br/> -> marked-react 라이브러리를 이용하여 mark up 된 글로 변경',
    ],
    use: 'React, Angular, TypeScript 등의 issue들을 확인하여 최신 동향 또는 버그 확인 가능',
  },
  {
    name: 'MeowMeow Album',

    period: '2023.08.11 - 2023.09.20',
    Contribution: '100%',
    skill: ['JavaScript', 'HTML', 'CSS'],
    list: [
      '고양이 사진이 저장된 폴더들이 나오고, 폴더를 클릭하면 또다른 폴더 또는 사진 목록들이 나옴',
      '사진 아이콘을 클릭하면 코양이 사진을 볼 수 있음',
      '뒤로가기 또는 상단의 bread crumb를 클릭하여 위치 이동을 할 수 있음',
    ],
    issue: [
      'React의 component 방식을 Vanilla JS로 구현하기 위해 class 생성자로 각각의 component 파일을 만들어 js module로 불러오는 방식을 이용. 하지만 virtual DOM이 없어 각각의 component의 한 요소가 변경될 시 component 전체가 리로딩되는 문제 발생 <br/> -> 컴포넌트를 최대한 작은 단위로 쪼개서 리로딩 되는 범위를 줄임',
    ],
    use: 'id, name, type, filePath로 이루어진 객체의 배열로 api를 만들어 나만의 사진 폴더집을 만들 수 있음',
  },
  {
    name: 'Momentum',
    period: '2022.01.23 - 2022.01.27',
    Contribution: '100%',
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
      '1. 현재 시간을 받아온 후 setInterval을 통해 1초씩 시간을 변경하는 함수를 만들어 시간을 표시하였으나, 네트워크 환경에 따라 시간이 실제와 달라지는 버그가 발생 <br/> -> 현재 시간을 가져오는 함수 getClock을 만든 후 앱 실행과 동시에 getClock을 볼러와 시간을 표시한 후 setInterval로 해당 함수를 1초에 한번씩 불러오는 방법으로 변경',
      '2. 날씨 정보를 받아오려면 현재 나의 정확한 위치를 알아야함<br/> -> Event handler에서 기본으로 제공하는 event를 통해 coords.latitude, coords.longitude로 현재 위치를 받아옴 -> 내가 있는 동네 이름과 날씨 두가지 다 제공할 수 있게 되었음',
    ],
    use: '개인용 todo list 및 브라우저 탭 메인화면으로 활용',
  },
];
