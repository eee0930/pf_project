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
import { motion } from 'framer-motion';

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
const CardGrid = styled(motion.div)``;
const CardWrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  margin: 0 auto;
  padding: 2rem 0;
`;

export default function DisplayCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nowIdx, setNowIdx] = useState(0);
  const handleOpenModal = (idx: number) => {
    setNowIdx(idx);
    setIsModalOpen(true);
  };
  const callback = () => setIsModalOpen(false);
  return (
    <>
      <DisplayCardsWrapper className="row">
        {workList.map((work, i) => (
          <CardGrid className="col-12 col-md-6 col-lg-4" key={work.id}>
            <CardWrapper>
              <DisplayCard idx={i} callback={() => handleOpenModal(i)}>
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
          </CardGrid>
        ))}
      </DisplayCardsWrapper>
      {isModalOpen && <WorkModal idx={nowIdx} callback={callback} />}
    </>
  );
}
