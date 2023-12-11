import { styled } from 'styled-components';
import Card from './Card';
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
const BackCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 450px;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  &:nth-child(1) {
    transform: translate(-50%, -50%) rotateZ(9deg);
  }
  &:nth-child(2) {
    transform: translate(-50%, -50%) rotateZ(6deg);
  }
  &:nth-child(3) {
    transform: translate(-50%, -50%) rotateZ(3deg);
  }
`;
const PointCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 200;
  transform: translate(-50%, -50%);
`;
const AnimationCover = styled(motion.div)``;
const Logo = styled.img`
  height: 100px;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const slideVariants = {
  initial: {
    x: '-500',
  },
  animate: {
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
  exit: {
    x: '500',
  },
};

interface IWorkCards {
  idx: number;
  isNext: boolean;
}
export default function WorkCards({ idx, isNext }: IWorkCards) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const callback = () => setModalOpen(false);
  return (
    <>
      <Wrapper>
        <BackCards>
          <BackCard />
          <BackCard />
          <BackCard />
        </BackCards>
        <PointCard>
          <AnimatePresence>
            <AnimationCover
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Card callback={openModal}>
                <TitleCover
                  style={{ backgroundColor: backColors[idx], color: '#fff' }}
                >
                  {workList[idx].name}
                </TitleCover>
                {workList[idx].logo ? (
                  <Logo
                    src={`${process.env.PUBLIC_URL}/works/logo/${workList[idx].logo}`}
                    alt="logo"
                  />
                ) : (
                  <Title>{workList[idx].name}</Title>
                )}
                <MoniterImg idx={idx} />
              </Card>
            </AnimationCover>
          </AnimatePresence>
        </PointCard>
      </Wrapper>
      {modalOpen && <WorkModal idx={idx} callback={callback} />}
    </>
  );
}
