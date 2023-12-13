import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { TitleCover } from '../assets/globalStyles';
import { introduction } from '../assets/ment';
import { introSvgs } from '../assets/svgs';

const AboutMeSection = styled(motion.div)`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  @media (min-width: 991px) {
    overflow-y: hidden;
  }
`;
const CloseButton = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
  z-index: 500;
  @media (min-width: 768px) {
    top: 1.5rem;
    left: 2rem;
  }
  @media (min-width: 1200px) {
    top: 2rem;
    left: 4rem;
  }
`;
const AboutMeWrapper = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  height: calc(100vh - 2rem);
  margin: 1rem auto;
  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    height: calc(100vh - 4rem);
    margin: 2rem auto;
  }
`;
const AboutMeContainer = styled.div`
  width: 100%;
  min-height: 100%;
`;
const ImageSection = styled(motion.div)`
  text-align: center;
  align-self: center;
  position: relative;
  img {
    border-radius: 50%;
    width: 90%;
    max-width: 300px;
    margin: 1rem auto;
  }
`;
const AboutSection = styled.div`
  align-self: center;
  color: #000;
`;
const SubTitle = styled(motion.div)`
  font-size: 4vmax;
  font-weight: 600;
  letter-spacing: -0.03em;
  word-spacing: 5px;
  margin-bottom: 2rem;
  line-height: 1.2;
`;
const Introduction = styled(motion.div)`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 2rem;
  span,
  a {
    font-weight: 600;
  }
  span {
    color: ${(props) => props.theme.main3};
  }
  a {
    color: ${(props) => props.theme.main6};
  }
  @media (min-width: 768px) {
    margin-right: 1rem;
  }
  @media (min-width: 1200px) {
    margin-right: 5rem;
  }
`;

const Shapes = styled.div`
  position: absolute;
  animation-name: ship;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
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
    top: 85%;
    left: 0%;
  }
  &.shape1 {
    top: 80%;
    right: 5%;
  }
  &.shape2 {
    bottom: 70%;
    left: 4%;
  }
  &.shape3 {
    bottom: 90%;
    right: 10%;
  }
  @media (min-width: 1200px) {
    &.shape0 {
      top: 85%;
      left: 15%;
    }
    &.shape1 {
      top: 80%;
      right: 15%;
    }
    &.shape2 {
      bottom: 70%;
      left: 5%;
    }
    &.shape3 {
      bottom: 90%;
      right: 10%;
    }
  }
  svg {
    display: none;
    @media (min-width: 768px) {
      display: block;
      width: 70px;
      height: 70px;
    }
    @media (min-width: 1200px) {
      display: block;
      width: 80px;
      height: 80px;
    }
  }
`;

const backVariants = {
  initial: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
  },
  animate: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  exit: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
  },
};
const fadeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
};
const up1Variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};
const up2Variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 0.4,
      duration: 0.8,
    },
  },
};
const up3Variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 0.6,
      duration: 0.8,
    },
  },
};

interface IAboutMe {
  callback: () => void;
}
export default function AboutMe({ callback }: IAboutMe) {
  return (
    <AnimatePresence>
      <AboutMeSection
        variants={backVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloseButton onClick={callback}>&times;</CloseButton>
        <AboutMeWrapper>
          <AboutMeContainer className="row">
            <ImageSection
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              className="col-12 col-md-5"
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/coding_hard.png`}
                alt="about me"
              />
              {introSvgs.map((svg, i) => (
                <Shapes
                  className={`shape${i}`}
                  key={i}
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
              ))}
            </ImageSection>
            <AboutSection className="col-12 col-md-7">
              <TitleCover
                variants={up1Variants}
                initial="initial"
                animate="animate"
              >
                About
              </TitleCover>
              <SubTitle
                variants={up2Variants}
                initial="initial"
                animate="animate"
              >
                Front-End Developer
                <br />
                HwaYeon Song
              </SubTitle>
              <Introduction
                variants={up3Variants}
                initial="initial"
                animate="animate"
                dangerouslySetInnerHTML={{ __html: introduction }}
              />
            </AboutSection>
          </AboutMeContainer>
        </AboutMeWrapper>
      </AboutMeSection>
    </AnimatePresence>
  );
}
