import { styled } from 'styled-components';
import { introTitle } from '../assets/ment';

const IntroContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  color: #000;
  width: 90vw;

  @media (min-width: 768px) {
    width: 60vw;
  }

  @media (min-width: 991px) {
    width: 40vw;
  }
`;

const JumboTitle = styled.h1`
  font-size: 7vmin;
  text-align: center;
  line-height: 1.2;
  font-weight: bold;
`;
const NameTitle = styled.h3`
  font-size: 3vmin;
  text-align: center;
  line-height: 1.2;
  margin-top: 3rem;
`;

export default function Intro() {
  return (
    <IntroContainer>
      <ContentWrapper>
        <JumboTitle>{introTitle.title}</JumboTitle>
        <NameTitle>{introTitle.name}</NameTitle>
      </ContentWrapper>
    </IntroContainer>
  );
}
