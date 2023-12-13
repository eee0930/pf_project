import styled from 'styled-components';
import { backColors } from '../assets/ment';
import { motion } from 'framer-motion';
import { TitleCover } from '../assets/globalStyles';
import { workList } from '../assets/works';
import MoniterImg from './contents/MoniterImg';
import Playvoice from './works/Playvoice';
import Projects from './works/Projects';
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
`;
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalWrapper = styled(motion.div)`
  position: relative;
  width: calc(100vw - 15%);
  min-height: calc(100vh - 2rem);
  margin: 5rem auto;
  background-color: #fff;
  border-radius: 2rem;
  z-index: 1005;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
  }
  @media (min-width: 991px) {
    padding: 5rem;
  }
  @media (min-width: 1200px) {
    padding: 10rem;
  }
`;
const CloseButton = styled.button`
  position: fixed;
  top: 6rem;
  right: calc(1rem + 7.5%);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
  font-size: 2rem;
  text-align: center;
  cursor: pointer;
  z-index: 500;
  @media (min-width: 768px) {
    left: calc(0.5rem + 7.5%);
  }
  @media (min-width: 1200px) {
    top: 8rem;
    left: calc(2rem + 7.5%);
  }
`;

const ModalContentSection = styled(motion.div)``;
const DefaultInfoSection = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 3rem;
  margin-bototm: 3rem;
`;
const MoniterSection = styled.div`
  padding-left: 1rem;
  margin-top: 3rem;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
const LogoSection = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
const Logo = styled.img`
  height: 120px;
  margin: 0 auto 1rem;
  @media (min-width: 768px) {
    margin: 0 0 1rem;
  }
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;
const UrlContent = styled.div`
  margin-top: 2rem;
  line-height: 1.8;
  letter-spacing: -0.02em;
  font-size: 15px;
  span {
    color: ${(props) => props.theme.main2};
    font-weight: 600;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
const DesContent = styled.div`
  margin-top: 2rem;
  font-size: 15px;
  line-height: 1.5;
  color: #000;
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
const widthVariant = {
  initial: {
    width: '280px',
    height: '450px',
  },
  animate: {
    width: 'calc(100vw - 15%)',
    height: 'auto',
  },
};
const fadeVariant = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};
interface IWorkModal {
  idx: number;
  callback: () => void;
}
export default function WorkModal({ idx, callback }: IWorkModal) {
  const work = workList[idx];
  return (
    <ModalContainer>
      <BackgroundContainer
        style={{ backgroundColor: backColors[idx] }}
        onClick={callback}
      ></BackgroundContainer>
      <ModalWrapper
        variants={widthVariant}
        initial="initial"
        animate="animate"
        layoutId="work"
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <CloseButton onClick={callback}>&times;</CloseButton>
        <ModalContentSection
          variants={fadeVariant}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <DefaultInfoSection className="row">
            <div className="col-12 col-md-6">
              <TitleCover
                style={{ backgroundColor: backColors[idx], color: '#fff' }}
              >
                {work.name}
              </TitleCover>
              <LogoSection>
                {work.logo ? (
                  <Logo
                    src={`${process.env.PUBLIC_URL}/works/logo/${work.logo}`}
                    alt="logo"
                  />
                ) : (
                  <Title>{work.name}</Title>
                )}
              </LogoSection>
              <UrlContent>
                <span>Git :</span>{' '}
                <a href={work.git} target="_blank" rel="noreferrer">
                  {work.git}
                </a>
                <br />
                <span>Website :</span>{' '}
                {idx === 5 ? (
                  `${work.url} (현재 운영 중이지 않음)`
                ) : (
                  <a href={work.url} target="_blank" rel="noreferrer">
                    {work.url}
                  </a>
                )}
              </UrlContent>
              <DesContent>{work.des}</DesContent>
            </div>
            <MoniterSection className="col-12 col-md-6 align-self-center">
              <MoniterImg idx={idx} />
            </MoniterSection>
          </DefaultInfoSection>
          {idx === 5 ? <Playvoice /> : <Projects idx={idx} />}
        </ModalContentSection>
      </ModalWrapper>
    </ModalContainer>
  );
}
