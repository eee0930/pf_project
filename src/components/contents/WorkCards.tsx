import { styled } from 'styled-components';
import { Card, BackCard } from './Card';
import { AnimatePresence, motion } from 'framer-motion';
import WorkModal from '../WorkModal';
import { workList } from '../../assets/works';
import { TitleCover } from '../../assets/globalStyles';
import { backColors } from '../../assets/ment';
import MoniterImg from './MoniterImg';
import { useState } from 'react';

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
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
`;

const Logo = styled.img`
  height: 100px;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const slideVariants = {
  initial: (isNext: boolean) => {
    return {
      x: isNext ? 0 : -500,
      transform: 'translateY(-50%)',
    };
  },
  animate: {
    x: 0,
    transform: 'translate(-50%,-50%)',
    transition: {
      type: 'spring',
      delay: 0.1,
      duration: 1,
    },
  },
  exit: (isNext: boolean) => {
    return {
      x: isNext ? -500 : 0,
      transform: 'translateY(-50%)',
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
  const work = workList[idx];
  const nextWork = workList[nextIdx];
  return (
    <>
      <Wrapper>
        <BackCards>
          <BackCard />
          <BackCard />
          <BackCard>
            <TitleCover
              style={{ backgroundColor: backColors[nextIdx], color: '#fff' }}
            >
              {nextWork.name}
            </TitleCover>
            {nextWork.logo ? (
              <Logo
                src={`${process.env.PUBLIC_URL}/works/logo/${nextWork.logo}`}
                alt="logo"
              />
            ) : (
              <Title>{nextWork.name}</Title>
            )}
            <MoniterImg idx={nextIdx} />
          </BackCard>
        </BackCards>
        <AnimatePresence initial={false} custom={isNext}>
          <PointCard
            key={idx}
            custom={isNext}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Card callback={openModal}>
              <TitleCover
                style={{ backgroundColor: backColors[idx], color: '#fff' }}
              >
                {work.name}
              </TitleCover>
              {work.logo ? (
                <Logo
                  src={`${process.env.PUBLIC_URL}/works/logo/${work.logo}`}
                  alt="logo"
                />
              ) : (
                <Title>{work.name}</Title>
              )}
              <MoniterImg idx={idx} />
            </Card>
          </PointCard>
        </AnimatePresence>
      </Wrapper>
      {modalOpen && <WorkModal idx={idx} callback={callback} />}
    </>
  );
}
