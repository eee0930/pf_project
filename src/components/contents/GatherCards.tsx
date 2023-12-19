import { useCallback, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import WorkModal from '../WorkModal';
import { workList, workLen } from '../../assets/works';
import { TitleCover2 } from '../../assets/globalStyles';
import MoniterImg from './MoniterImg';
import { Card, BackCard, EmptyCard } from './Card';
import {
  CardNum,
  Eng,
  Logo,
  LogoSection,
  Title,
  TitleSection,
} from '../../assets/cardStyles';

const Wrapper = styled(motion.div)`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const BackCards = styled.div`
  position: relative;
`;
const PointCard = styled(motion.div)`
  position: absolute;
  top: calc(50% - 225px);
  left: calc(50% - 140px);
  z-index: 200;
  @media (min-width: 1200px) {
    top: calc(50% - 250px);
    left: calc(50% - 150px);
  }
`;

const slideVariants = {
  initial: (isNext: boolean) => {
    return {
      x: isNext ? 0 : -100,
      rotate: isNext ? '3deg' : 0,
    };
  },
  animate: {
    x: 0,
    rotate: 0,
  },
  exit: (isNext: boolean) => {
    return {
      x: isNext ? -1000 : 0,
    };
  },
};

interface IWorkCards {
  idx: number;
  nextIdx: number;
  isNext: boolean;
  callBackNext: (isNext: boolean) => void;
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function GatherCards({
  idx,
  nextIdx,
  isNext,
  callBackNext,
}: IWorkCards) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, color, eng, logo } = useMemo(() => workList[idx], [idx]);
  const nextWork = useMemo(() => workList[nextIdx], [nextIdx]);

  const handleDragEnd = useCallback((swipe: number) => {
    if (swipe < -swipeConfidenceThreshold) {
      callBackNext(true);
    } else if (swipe > swipeConfidenceThreshold) {
      callBackNext(false);
    }
  }, []);

  return (
    <>
      <Wrapper
        drag="x"
        dragConstraints={{ left: 1, right: 1 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          e.stopPropagation();
          const swipe = swipePower(offset.x, velocity.x);
          handleDragEnd(swipe);
        }}
      >
        <BackCards>
          {Array.from(Array(workLen), (_, i) => (
            <EmptyCard idx={i} key={i} />
          ))}
          <BackCard>
            <TitleSection>
              <CardNum style={{ color: nextWork.color[0] }}>
                {nextIdx + 1}
              </CardNum>
              <TitleCover2
                style={{ backgroundColor: nextWork.color[1], color: '#fff' }}
              >
                {name}
              </TitleCover2>
              {nextWork.logo ? (
                <LogoSection>
                  <Logo
                    src={`${process.env.PUBLIC_URL}/works/logo/${nextWork.logo}`}
                    alt="logo"
                  />
                </LogoSection>
              ) : (
                <Title>{nextWork.name}</Title>
              )}
              <Eng>{nextWork.eng}</Eng>
            </TitleSection>
            <MoniterImg idx={nextIdx} />
          </BackCard>
        </BackCards>
        <AnimatePresence initial={false} custom={isNext}>
          <PointCard
            key={idx}
            custom={isNext}
            layoutId="work"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Card callback={() => setIsModalOpen(true)}>
              <TitleSection>
                <CardNum style={{ color: color[0] }}>{idx + 1}</CardNum>
                <TitleCover2
                  style={{ backgroundColor: color[1], color: '#fff' }}
                >
                  {name}
                </TitleCover2>
                {logo ? (
                  <LogoSection>
                    <Logo
                      src={`${process.env.PUBLIC_URL}/works/logo/${logo}`}
                      alt="logo"
                    />
                  </LogoSection>
                ) : (
                  <Title>{name}</Title>
                )}
                <Eng>{eng}</Eng>
              </TitleSection>
              <MoniterImg idx={idx} />
            </Card>
          </PointCard>
        </AnimatePresence>
      </Wrapper>
      {isModalOpen && (
        <WorkModal idx={idx} callback={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
