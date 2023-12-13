import styled from 'styled-components';
import { workList } from '../../assets/works';
import { DisplayCard } from './Card';
import {
  CardNum,
  Eng,
  Logo,
  LogoSection,
  Title,
  TitleSection,
} from '../../assets/cardStyles';
import { TitleCover2 } from '../../assets/globalStyles';
import MoniterImg from './MoniterImg';
import { backColors } from '../../assets/ment';
import { useState } from 'react';
import WorkModal from '../WorkModal';
import { AnimatePresence, motion } from 'framer-motion';

const DisplayCardsWrapper = styled.div`
  width: 100%;
  overflow: auto;
  margin: 5rem auto;
  padding-bottom: 8rem;
  @media (min-width: 768px) {
    max-width: 90%;
  }
  @media (min-width: 991px) {
    max-width: 100%;
  }
  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;
const CardWrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  padding: 2rem 0;
`;

export default function DisplayCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (idx: number) => {
    setNowIdx(idx);
    setModalOpen(true);
  };
  const callback = () => setModalOpen(false);
  const [nowIdx, setNowIdx] = useState(0);
  return (
    <>
      <AnimatePresence>
        <DisplayCardsWrapper className="row">
          {workList.map((work, i) => (
            <motion.div className="col-12 col-md-6 col-lg-4" key={work.id}>
              <CardWrapper>
                <DisplayCard idx={i} callback={() => openModal(i)}>
                  <TitleSection>
                    <CardNum style={{ color: backColors[i] }}>{i + 1}</CardNum>
                    <TitleCover2
                      style={{ backgroundColor: backColors[i], color: '#fff' }}
                    >
                      {work.name}
                    </TitleCover2>
                    {work.logo ? (
                      <LogoSection>
                        <Logo
                          src={`${process.env.PUBLIC_URL}/works/logo/${work.logo}`}
                          alt="logo"
                        />
                      </LogoSection>
                    ) : (
                      <Title>{work.name}</Title>
                    )}
                    <Eng>{work.eng}</Eng>
                  </TitleSection>
                  <MoniterImg idx={i} />
                </DisplayCard>
              </CardWrapper>
            </motion.div>
          ))}
        </DisplayCardsWrapper>
        {modalOpen && <WorkModal idx={nowIdx} callback={callback} />}
      </AnimatePresence>
    </>
  );
}
