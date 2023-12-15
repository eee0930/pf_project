import styled from 'styled-components';
import { gitSvg, introSvgs } from '../assets/svgs';
import { gitUrl } from '../assets/ment';
import { useState } from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';

const PortfolioHeader = styled.header`
  padding: 1rem 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 1rem;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
  @media (min-width: 768px) {
    padding: 1.5rem 0;
  }
  @media (min-width: 1200px) {
    padding: 2rem 0;
  }
`;
const AboutMeSection = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: rgba(0, 0, 0, 0.5);
  align-self: center;
  svg {
    fill: rgba(0, 0, 0, 0.5);
    width: 30px;
    height: 30px;
    transition: color 0.3s ease;
    &:hover {
      fill: rgba(255, 255, 255, 1);
    }
  }
  span {
    margin-right: 0.5rem;
    transition: color 0.3s ease;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1200px) {
    padding: 0 2rem;
  }
`;
const AboutMeBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 3px 3px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  transition: color 0.3s ease;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  @media (min-width: 768px) {
    padding: 3px 8px;
  }
  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 3px 10px;
  }
`;
const ContactMeSection = styled.div`
  text-align: right;
  padding: 0 1rem;
  color: rgba(0, 0, 0, 0.5);
  align-self: center;
  a {
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  @media (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 0 4rem;
  }
`;
const IconSection = styled.div`
  padding: 0 1rem;
  align-self: center;
  text-align: center;
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  @media (min-width: 1200px) {
    padding: 0 4rem;
  }
`;
const Shapes = styled.span`
  position: absolute;
  top: -15px;
  svg {
    width: 30px;
    height: 30px;
    margin: 0 5px;
  }
  animation-name: ship;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards, forwards;
  &:nth-child(1) {
    left: calc(50% - 60px - 15px);
    animation-delay: calc(0.12s * 1), calc(0.12s * 1 + 0.36s);
  }
  &:nth-child(2) {
    left: calc(50% - 20px - 15px);
    animation-delay: calc(0.12s * 2), calc(0.12s * 2 + 0.36s);
  }
  &:nth-child(3) {
    left: calc(50% + 20px - 15px);
    animation-delay: calc(0.12s * 3), calc(0.12s * 3 + 0.36s);
  }
  &:nth-child(4) {
    left: calc(50% + 60px - 15px);
    animation-delay: calc(0.12s * 4), calc(0.12s * 4 + 0.36s);
  }
`;
export default function Header() {
  const [openAboutMe, setOpenAboutMe] = useState(false);
  const [openContactMe, setOpenContactMe] = useState(false);
  const closeAboutMeModal = () => setOpenAboutMe(false);
  const closeContactMeModal = () => setOpenContactMe(false);
  return (
    <>
      <PortfolioHeader className="row">
        <AboutMeSection className="col-6 col-md-3">
          <span>
            <AboutMeBtn
              onClick={() => setOpenAboutMe(true)}
              title="about 송화연"
            >
              About Me
            </AboutMeBtn>
          </span>
          <span>
            <a
              href={gitUrl}
              dangerouslySetInnerHTML={{ __html: gitSvg }}
              target="_blank"
              rel="noreferrer"
              title="github으로 이동"
            />
          </span>
        </AboutMeSection>
        <IconSection className="d-none d-md-inline-block col-md-6">
          {introSvgs.map((svg, i) => (
            <Shapes
              className={`shape${i}`}
              key={i}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ))}
        </IconSection>
        <ContactMeSection className="col-6 col-md-3">
          <AboutMeBtn
            onClick={() => setOpenContactMe(true)}
            title="연락주세요!"
          >
            Contact
          </AboutMeBtn>
        </ContactMeSection>
      </PortfolioHeader>
      {openAboutMe && <AboutMe callback={closeAboutMeModal} />}
      {openContactMe && <ContactMe callback={closeContactMeModal} />}
    </>
  );
}
