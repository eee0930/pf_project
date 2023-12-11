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
`;

const hoverVariant = {
  initial: {
    scale: 1,
    rotateZ: 0,
  },
  hover: {
    scale: 1.1,
    rotateZ: 5,
    transition: {
      duration: 0.2,
    },
  },
};
export default function Card({ children, callback }: ICard) {
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
