import styled from 'styled-components';
import BackDivide from './contents/BackDivide';
import WorkCards from './contents/WorkCards';
import { useEffect, useState } from 'react';

const ContentContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;
const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const NextButtonSection = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 100%;
`;
const Button = styled.button`
  position: absolute;
  top: -1rem;
  height: 45px;
  border: none;
  color: #fff;
  padding: 5px 15px;
  background-color: transparent;
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
  z-index: 5;
`;
const PrevButton = styled(Button)`
  left: 3rem;
  @media (min-width: 768px) {
    left: 7rem;
  }
  @media (min-width: 1200px) {
    left: 15rem;
  }
`;
const NextButton = styled(Button)`
  right: 3rem;
  @media (min-width: 768px) {
    right: 7rem;
  }
  @media (min-width: 1200px) {
    right: 15rem;
  }
`;
export default function ContentSection() {
  const [idx, setIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [prevIdx, setPrevIdx] = useState(5);
  const [isNext, setIsNext] = useState(true);
  const getNextIdx = (isNext: boolean) => {
    if (isNext) {
      setIsNext(true);
      setIdx((prev) => (prev + 1 > 5 ? 0 : prev + 1));
    } else {
      setIsNext(false);
      setIdx((prev) => (prev - 1 < 0 ? 5 : prev - 1));
    }
  };
  useEffect(() => {
    setNextIdx(() => {
      if (isNext) {
        return idx + 1 > 5 ? 0 : idx + 1;
      } else {
        return idx - 1 < 0 ? 5 : idx - 1;
      }
    });
    setPrevIdx(() => {
      if (isNext) {
        return idx - 1 < 0 ? 5 : idx - 1;
      } else {
        return idx + 1 > 5 ? 0 : idx + 1;
      }
    });
  }, [idx, isNext]);

  return (
    <ContentContainer>
      <AbsoluteWrapper>
        <BackDivide idx={idx} prevIdx={prevIdx} isNext={isNext} />
      </AbsoluteWrapper>
      <AbsoluteWrapper>
        <NextButtonSection>
          <PrevButton onClick={() => getNextIdx(false)}>prev</PrevButton>
          <NextButton onClick={() => getNextIdx(true)}>next</NextButton>
        </NextButtonSection>
        <WorkCards idx={idx} nextIdx={nextIdx} isNext={isNext} />
      </AbsoluteWrapper>
    </ContentContainer>
  );
}
