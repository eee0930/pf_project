import styled from 'styled-components';
import { backColors } from '../../assets/ment';
import { AnimatePresence, motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
`;
const BackgroundWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const BackVariant = {
  initial: (isNext: boolean) => {
    return {
      x: isNext ? '100%' : '-100%',
    };
  },
  animate: {
    x: 0,
    transition: {
      type: 'linear',
      duration: 0.5,
    },
  },
  exit: (isNext: boolean) => {
    return {
      x: isNext ? '-100%' : '100%',
    };
  },
};
interface IBackDivide {
  idx: number;
  prevIdx: number;
  isNext: boolean;
}
export default function BackDivide({ idx, prevIdx, isNext }: IBackDivide) {
  const backColor = backColors[idx];
  const prevBackColor = backColors[prevIdx];
  return (
    <BackgroundContainer>
      <AnimatePresence custom={isNext}>
        <BackgroundWrapper style={{ backgroundColor: prevBackColor }} />
        <BackgroundWrapper
          custom={isNext}
          key={idx}
          variants={BackVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ backgroundColor: backColor }}
        ></BackgroundWrapper>
      </AnimatePresence>
    </BackgroundContainer>
  );
}
