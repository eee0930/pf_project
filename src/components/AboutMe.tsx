import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { TitleCover } from '../assets/globalStyles';
import { introduction } from '../assets/ment';

const AboutMeSection = styled(motion.div)`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
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
const ImageSection = styled.div`
  text-align: center;
  align-self: center;
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
const SubTitle = styled.div`
  font-size: 4vmax;
  font-weight: 600;
  letter-spacing: -0.03em;
  word-spacing: 5px;
  margin-bottom: 2rem;
  line-height: 1.2;
`;
const Introduction = styled.div`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 2rem;
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
            <ImageSection className="col-12 col-md-5">
              <img
                src={`${process.env.PUBLIC_URL}/img/coding_hard.png`}
                alt="about me"
              />
            </ImageSection>
            <AboutSection className="col-12 col-md-7">
              <TitleCover>About</TitleCover>
              <SubTitle>
                Front-End Developer
                <br />
                HwaYeon Song
              </SubTitle>
              <Introduction
                dangerouslySetInnerHTML={{ __html: introduction }}
              />
            </AboutSection>
          </AboutMeContainer>
        </AboutMeWrapper>
      </AboutMeSection>
    </AnimatePresence>
  );
}
