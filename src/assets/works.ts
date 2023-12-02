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
    name: 'Momentum',
    color: '#0E6439',
    img: ['todo1', 'todo2'],
    git: 'https://github.com/eee0930/momentum_clone',
    url: 'https://eee0930.github.io/momentum_clone/',
    skill: ['JavaScript', 'HTML', 'CSS'],
    des: '아름다운 배경과 함께 명언, 현재 날씨를 제공해주며, 스케쥴을 정리할 수 있는 앱입니다. 배경과 명언은 랜덤으로 제공됩니다.',
  },
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
    name: 'Movie Booth',
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
    name: 'Crypto Tracker',
    color: '#2F3640',
    img: ['cripto1', 'cripto2'],
    git: 'https://github.com/eee0930/crypto_tracker',
    url: 'https://eee0930.github.io/crypto_tracker/',
    skill: [
      'ReactJS',
      'TypeScript',
      'Recoil',
      'ReactQuery',
      'StyledComponents',
    ],
    des: '다양한 종류의 코인과 코인의 현재 시세를 차트로 제공하는 사이트입니다. ',
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
];
