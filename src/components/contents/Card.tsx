import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';

interface ICard {
  children: React.ReactNode;
  callback: () => void;
}

const CardCover = styled(motion.div)`
  width: 280px;
  height: 450px;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media (min-width: 1200px) {
    width: 350px;
    height: 562.5px;
  }
`;

const hoverVariant = {
  initial: {
    scale: 1,
    rotateZ: 0,
  },
  hover: {
    scale: 1.05,
    rotateZ: -5,
    rotateY: 20,
    perspective: 300,
    transition: {
      duration: 0.2,
    },
  },
};
export function Card({ children, callback }: ICard) {
  return (
    <CardCover
      onClick={callback}
      layoutId="work"
      variants={hoverVariant}
      initial="initial"
      whileHover="hover"
    >
      {children}
    </CardCover>
  );
}

const BackCardCover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 450px;
  border-radius: 1.5rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &:nth-child(1) {
    transform: translate(-50%, -50%) rotateZ(9deg);
  }
  &:nth-child(2) {
    transform: translate(-50%, -50%) rotateZ(6deg);
  }
  &:nth-child(3) {
    transform: translate(-50%, -50%) rotateZ(3deg);
  }
  @media (min-width: 1200px) {
    width: 350px;
    height: 562.5px;
  }
`;
interface IBackCard {
  children?: React.ReactNode;
}
export function BackCard({ children }: IBackCard) {
  return <BackCardCover>{children}</BackCardCover>;
}
