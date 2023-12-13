import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

interface ICard {
  children: React.ReactNode;
  callback: () => void;
}

const CardCover = styled(motion.div)`
  width: 280px;
  height: 450px;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transform: perspective(300px);
  @media (min-width: 1200px) {
    width: 300px;
    height: 500px;
  }
`;

const hoverVariant = {
  initial: {
    scale: 1,
    rotateZ: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.1,
    rotateZ: -10,
    rotateY: 30,
    transition: {
      duration: 0.4,
    },
  },
};
export function Card({ children, callback }: ICard) {
  return (
    <CardCover
      onClick={callback}
      variants={hoverVariant}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </CardCover>
  );
}

const BackCardCover = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 1.5rem;
  transform: translate(-50%, -50%) perspective(300px);
  width: 280px;
  height: 450px;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  &:nth-child(3n + 2) {
    transform: translate(-50%, -50%) rotateZ(9deg) perspective(300px);
  }
  &:nth-child(3n) {
    transform: translate(-50%, -50%) rotateZ(6deg) perspective(300px);
  }
  &:nth-child(3n + 1) {
    transform: translate(-50%, -50%) rotateZ(3deg) perspective(300px);
  }
  @media (min-width: 1200px) {
    width: 300px;
    height: 500px;
  }
`;
interface IBackCard {
  children?: React.ReactNode;
}
export function BackCard({ children }: IBackCard) {
  return <BackCardCover>{children}</BackCardCover>;
}

interface IEmptyCard {
  idx: number;
}
export function EmptyCard({ idx }: IEmptyCard) {
  return (
    <BackCardCover>
      <motion.div
        layoutId={`workCard${idx}`}
        style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
      />
    </BackCardCover>
  );
}

interface IDisplayCard {
  idx: number;
  children: React.ReactNode;
  callback: () => void;
}

const cardBigVariant = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
    },
  },
};
export function DisplayCard({ idx, children, callback }: IDisplayCard) {
  return (
    <CardCover
      layoutId={`workCard${idx}`}
      onClick={callback}
      variants={cardBigVariant}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </CardCover>
  );
}
