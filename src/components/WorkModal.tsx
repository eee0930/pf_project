import styled from 'styled-components';
import { backColors } from '../assets/ment';
import { motion } from 'framer-motion';
import { TitleCover } from '../assets/globalStyles';
import { workList } from '../assets/works';
import MoniterImg from './contents/MoniterImg';
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
  width: calc(100vw - 10%);
  min-height: calc(100vh - 2rem);
  margin: 5rem auto 1rem;
  background-color: #fff;
  border-radius: 2rem;
  z-index: 1005;
  padding: 2rem;
  @media (min-width: 768px) {
    padding: 4rem;
  }
`;
const CloseButton = styled.button`
  position: fixed;
  top: 6rem;
  left: calc(0.5rem + 5%);
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
`;

const ModalContentSection = styled.div``;
const Logo = styled.img`
  margin-top: 3rem;
  height: 150px;
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`;
const UrlContent = styled.div`
  margin-top: 2rem;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-size: 15px;
  span {
    color: ${(props) => props.theme.main2};
    font-weight: 600;
  }
`;
const DesContent = styled.div`
  margin-top: 2rem;
  font-size: 15px;
  line-height: 1.5;
  color: #000;
`;
const widthVariant = {
  initial: {
    width: '280px',
  },
  animate: {
    width: 'calc(100vw - 10%)',
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
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
      >
        <CloseButton onClick={callback}>&times;</CloseButton>
        <ModalContentSection>
          <div className="row">
            <div className="col-12 col-md-6">
              <TitleCover
                style={{ backgroundColor: backColors[idx], color: '#fff' }}
              >
                {work.name}
              </TitleCover>
              <div>
                {work.logo ? (
                  <Logo
                    src={`${process.env.PUBLIC_URL}/works/logo/${work.logo}`}
                    alt="logo"
                  />
                ) : (
                  <Title>{work.name}</Title>
                )}
              </div>
              <UrlContent>
                <span>Git :</span>{' '}
                <a href={work.git} target="_blank" rel="noreferrer">
                  {work.git}
                </a>
                <br />
                <span>Website :</span>{' '}
                <a href={work.url} target="_blank" rel="noreferrer">
                  {work.url}
                </a>
              </UrlContent>
              <DesContent>{work.des}</DesContent>
            </div>
            <div className="col-12 col-md-6 align-self-center">
              <MoniterImg idx={idx} />
            </div>
          </div>
        </ModalContentSection>
      </ModalWrapper>
    </ModalContainer>
  );
}
