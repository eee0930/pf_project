import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { introTitle } from '../assets/ment';
import { introSvgs } from '../assets/svgs';

const IntroContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentWrapper = styled(motion.div)`
  color: #000;
  position: relative;
  text-align: center;
  animation-delay: 1.5s;
  animation-name: anti-rotate;
  animation-duration: 0.5s;

  @keyframes anti-rotate {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }
    100% {
      -webkit-transform: rotateZ(-90deg);
      transform: rotateZ(-90deg);
    }
  }
`;

const JumboTitle = styled.h1`
  font-size: 8vmin;
  font-weight: 600;
  max-width: 520px;
  line-height: 1;
  letter-spacing: -2px;
  word-spacing: 2px;
  span {
    display: block;
  }
  @media (min-width: 768px) {
    font-size: 6.5vmin;
    max-width: 100%;
  }
`;
const NameTitle = styled.h3`
  font-size: 4vmin;
  margin-top: 2.5rem;
  line-height: 1.2;
  letter-spacing: -1px;
  @media (min-width: 768px) {
    font-size: 2.8vmin;
  }
`;
const SplashShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
const Shapes = styled.div`
  position: absolute;
  animation-name: rotate;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.32, 0.6, 0.49, 0.79), ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, forwards;
  &:nth-child(1) {
    animation-delay: calc(0.12s * 1), calc(0.12s * 1 + 0.36s);
  }
  &:nth-child(2) {
    animation-delay: calc(0.12s * 2), calc(0.12s * 2 + 0.36s);
  }
  &:nth-child(3) {
    animation-delay: calc(0.12s * 3), calc(0.12s * 3 + 0.36s);
  }
  &:nth-child(4) {
    animation-delay: calc(0.12s * 4), calc(0.12s * 4 + 0.36s);
  }

  &.shape0 {
    top: -100%;
    left: -10%;
    @media (min-width: 768px) {
      top: -60%;
      left: -25%;
    }
    @media (min-width: 1200px) {
      top: -60%;
      left: -20%;
    }
  }
  &.shape1 {
    top: -115%;
    right: -3%;
    @media (min-width: 768px) {
      top: -45%;
      right: -35%;
    }
    @media (min-width: 1200px) {
      top: -40%;
      right: -30%;
    }
  }
  &.shape2 {
    bottom: -110%;
    left: -5%;
    @media (min-width: 768px) {
      bottom: -55%;
      left: -15%;
    }
    @media (min-width: 1200px) {
      bottom: -55%;
      left: -5%;
    }
  }
  &.shape3 {
    bottom: -100%;
    right: -10%;
    @media (min-width: 768px) {
      bottom: -50%;
      right: -25%;
    }
    @media (min-width: 1200px) {
      bottom: -45%;
      right: -15%;
    }
  }

  svg {
    transform: scale(0.75);
    display: block;
    @media (min-width: 768px) {
      transform: scale(1);
    }
  }
`;

const fadeVariants = {
  initial: {
    opacity: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  animate: {
    opacity: 0,
    backgroundColor: 'rgba(255,209,106, 0)',
    transition: {
      delay: 2,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    backgroundColor: 'rgba(255,209,106, 0)',
  },
};

const rotateVariants = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    rotate: 180,
    scale: 0,
    transition: {
      delay: 2,
      duration: 0.3,
    },
  },
  exit: {
    rotate: 180,
    scale: 0,
  },
};

export default function Intro() {
  const [introLife, setIntroLife] = useState(true);
  useEffect(() => {
    const introLifeTimeout = setTimeout(() => {
      setIntroLife(false);
    }, 2500);
    return () => clearTimeout(introLifeTimeout);
  }, []);

  return (
    <>
      {introLife && (
        <AnimatePresence>
          <IntroContainer
            variants={fadeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ContentWrapper variants={rotateVariants}>
              <JumboTitle
                dangerouslySetInnerHTML={{ __html: introTitle.title }}
              />
              <NameTitle>{introTitle.name}</NameTitle>
              <SplashShapes>
                {introSvgs.map((svg, i) => (
                  <Shapes
                    className={`shape${i}`}
                    key={i}
                    dangerouslySetInnerHTML={{ __html: svg }}
                  />
                ))}
              </SplashShapes>
            </ContentWrapper>
          </IntroContainer>
        </AnimatePresence>
      )}
    </>
  );
}
