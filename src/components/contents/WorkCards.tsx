import { styled } from 'styled-components';
import { Card, BackCard, EmptyCard } from './Card';
import { AnimatePresence, motion } from 'framer-motion';
import WorkModal from '../WorkModal';
import { workList, workLen } from '../../assets/works';
import { TitleCover2 } from '../../assets/globalStyles';
import { backColors } from '../../assets/ment';
import MoniterImg from './MoniterImg';
import { useState } from 'react';
import {
  CardNum,
  Eng,
  Logo,
  LogoSection,
  Title,
  TitleSection,
} from '../../assets/cardStyles';

const Wrapper = styled.div`
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
    };
  },
  animate: {
    x: 0,
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
}

export default function WorkCards({ idx, nextIdx, isNext }: IWorkCards) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const callback = () => setModalOpen(false);
  const { name, eng } = workList[idx];
  const nextWork = workList[nextIdx];
  return (
    <>
      <Wrapper>
        <BackCards>
          {Array.from(Array(workLen), (_, i) => (
            <EmptyCard idx={i} key={i} />
          ))}
          <BackCard>
            <TitleSection>
              <CardNum style={{ color: backColors[nextIdx] }}>
                {nextIdx + 1}
              </CardNum>
              <TitleCover2
                style={{ backgroundColor: backColors[nextIdx], color: '#fff' }}
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
            <Card callback={openModal}>
              <TitleSection>
                <CardNum style={{ color: backColors[idx] }}>{idx + 1}</CardNum>
                <TitleCover2
                  style={{ backgroundColor: backColors[idx], color: '#fff' }}
                >
                  {name}
                </TitleCover2>
                {workList[idx]?.logo ? (
                  <LogoSection>
                    <Logo
                      src={`${process.env.PUBLIC_URL}/works/logo/${workList[idx]?.logo}`}
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
      {modalOpen && <WorkModal idx={idx} callback={callback} />}
    </>
  );
}
