import styled from 'styled-components';
import BackDivide from './contents/BackDivide';
import WorkCards from './contents/WorkCards';
import { useEffect, useState } from 'react';
import { workLen } from '../assets/works';
import DisplayButton from './DisplayButton';
import DisplayCards from './contents/DisplayCards';
import { backColors } from '../assets/ment';

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
const NowBack = styled.div`
  position: fixed;
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
  color: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  background-color: transparent;
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
  z-index: 5;
  transition: color 0.3s ease;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
const PrevButton = styled(Button)`
  left: 3rem;
  @media (min-width: 768px) {
    left: 7rem;
  }
  @media (min-width: 991px) {
    left: 9rem;
  }
  @media (min-width: 1200px) {
    left: 18rem;
  }
`;
const NextButton = styled(Button)`
  right: 3rem;
  @media (min-width: 768px) {
    right: 7rem;
  }
  @media (min-width: 991px) {
    right: 9rem;
  }
  @media (min-width: 1200px) {
    right: 18rem;
  }
`;

const DisplayButtonWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem 0;
`;

export default function ContentSection() {
  const [idx, setIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [prevIdx, setPrevIdx] = useState(workLen - 1);
  const [isNext, setIsNext] = useState(true);
  const [isGather, setIsGather] = useState(true);
  const getNextIdx = (isNext: boolean) => {
    if (isNext) {
      setIsNext(true);
      setIdx((prev) => (prev + 1 > workLen - 1 ? 0 : prev + 1));
    } else {
      setIsNext(false);
      setIdx((prev) => (prev - 1 < 0 ? workLen - 1 : prev - 1));
    }
  };
  useEffect(() => {
    setNextIdx(() => (idx + 1 > workLen - 1 ? 0 : idx + 1));
    setPrevIdx(() => {
      if (isNext) {
        return idx - 1 < 0 ? workLen - 1 : idx - 1;
      } else {
        return idx + 1 > workLen - 1 ? 0 : idx + 1;
      }
    });
  }, [idx, isNext]);

  return (
    <ContentContainer>
      <AbsoluteWrapper>
        <BackDivide idx={idx} prevIdx={prevIdx} isNext={isNext} />
      </AbsoluteWrapper>
      {!isGather && <NowBack style={{ backgroundColor: backColors[idx] }} />}
      <AbsoluteWrapper>
        {isGather ? (
          <>
            <NextButtonSection className="d-none d-md-block">
              <PrevButton onClick={() => getNextIdx(false)}>prev</PrevButton>
              <NextButton onClick={() => getNextIdx(true)}>next</NextButton>
            </NextButtonSection>
            <WorkCards
              idx={idx}
              nextIdx={nextIdx}
              isNext={isNext}
              callBackNext={getNextIdx}
            />
          </>
        ) : (
          <DisplayCards />
        )}
      </AbsoluteWrapper>
      <DisplayButtonWrapper>
        <DisplayButton
          handleOpen={() => setIsGather(false)}
          handleGather={() => setIsGather(true)}
        />
      </DisplayButtonWrapper>
    </ContentContainer>
  );
}
