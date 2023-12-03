import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { backColors } from '../../assets/ment';

const BackgroundContainer = styled.div`
  height: 100vh;
`;
const BackgroundWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;
`;
const InnerPointer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 150%;
  top: -25%;
  &.right {
    background-color: rgba(255, 255, 255, 0.35);
  }
`;
const GuideMent = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  font-weight: 600;
  cursor: pointer;
  transform: translateX(-50%);
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const shapeVariants = {
  initial: {
    right: '-100%',
    borderRadius: '0',
  },
  hover: {
    right: '-60%',
    borderRadius: '50%',
    transition: {
      duration: 0.5,
    },
  },
};
const shapeVariants2 = {
  initial: {
    left: '-100%',
    borderRadius: '0',
  },
  hover: {
    left: '-60%',
    borderRadius: '50%',
    transition: {
      duration: 0.5,
    },
  },
};

export default function BackDivide() {
  const [backgroundIdx, setBackgroundIdx] = useState(0);
  return (
    <BackgroundContainer className="row">
      <BackgroundWrapper
        className="col-6"
        style={{ backgroundColor: backColors[backgroundIdx] }}
      >
        <InnerPointer
          variants={shapeVariants}
          initial="initial"
          whileHover="hover"
          style={{ backgroundColor: backColors[backgroundIdx + 1] }}
        />
        <GuideMent>Next</GuideMent>
      </BackgroundWrapper>
      <BackgroundWrapper
        className="col-6"
        style={{ backgroundColor: backColors[backgroundIdx] }}
      >
        <InnerPointer
          variants={shapeVariants2}
          initial="initial"
          whileHover="hover"
          className="right"
        />
        <GuideMent>Show!</GuideMent>
      </BackgroundWrapper>
    </BackgroundContainer>
  );
}
