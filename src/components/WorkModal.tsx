import { useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TitleCover } from '../assets/globalStyles';
import { workLen, workList } from '../assets/works';
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
const BackgroundContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 0.3s ease;
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
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    padding: 4rem;
  }
  @media (min-width: 991px) {
    padding: 6rem;
  }
  @media (min-width: 1200px) {
    padding: 10rem;
  }
`;
const CloseButton = styled.button`
  position: fixed;
  top: 1.5rem;
  left: calc(10% - 0.5rem);
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  cursor: pointer;
  z-index: 500;
  @media (min-width: 768px) {
    top: 6rem;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    font-size: 2rem;
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
  height: 100px;
  margin: 0 auto 1rem;
  @media (min-width: 768px) {
    height: 120px;
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
    display: inline-block;
    margin: 0.2rem 0;
    font-weight: 600;
  }
  a {
    overflow-wrap: break-word;
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
const backgroundVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

const LINK_DEFAULT = {
  target: '_blank',
  rel: 'noreferrer',
};

interface IWorkModal {
  idx: number;
  callback: () => void;
}
export default function WorkModal({ idx, callback }: IWorkModal) {
  const { name, color, logo, git, url, des } = useMemo(
    () => workList[idx],
    [idx]
  );
  return (
    <ModalContainer>
      <BackgroundContainer
        variants={backgroundVariant}
        initial="initial"
        animate="animate"
        style={{ backgroundColor: color[0] }}
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
              <TitleCover style={{ backgroundColor: color[1], color: '#fff' }}>
                {name}
              </TitleCover>
              <LogoSection>
                {logo ? (
                  <Logo
                    src={`${process.env.PUBLIC_URL}/works/logo/${logo}`}
                    alt="logo"
                  />
                ) : (
                  <Title>{name}</Title>
                )}
              </LogoSection>
              <UrlContent>
                <span style={{ color: color[1] }}>Git :</span>{' '}
                <a href={git} {...LINK_DEFAULT}>
                  {git}
                </a>
                <br />
                <span style={{ color: color[1] }}>Website :</span>{' '}
                {idx === workLen - 1 ? (
                  `${url} (현재 운영 중이지 않음)`
                ) : (
                  <a href={url} {...LINK_DEFAULT}>
                    {url}
                  </a>
                )}
              </UrlContent>
              <DesContent>{des}</DesContent>
            </div>
            <MoniterSection className="col-12 col-md-6 align-self-center">
              <MoniterImg idx={idx} />
            </MoniterSection>
          </DefaultInfoSection>
          {idx === workLen - 1 ? <Playvoice /> : <Projects idx={idx} />}
        </ModalContentSection>
      </ModalWrapper>
    </ModalContainer>
  );
}
