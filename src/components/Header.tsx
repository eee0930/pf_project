import styled from 'styled-components';
import { gitSvg } from '../assets/svgs';
import { gitUrl } from '../assets/ment';
import { useState } from 'react';
import AboutMe from './AboutMe';

const PortfolioHeader = styled.header`
  padding: 1.5rem 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 1rem;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
`;
const AboutMeSection = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  color: rgba(0, 0, 0, 0.35);
  align-self: center;
  svg {
    fill: rgba(0, 0, 0, 0.35);
    width: 30px;
    height: 30px;
    &:hover {
      fill: rgba(255, 255, 255, 1);
    }
  }
  span {
    margin-right: 1rem;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;
const AboutMeBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 3px 8px;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.35);
  font-weight: 600;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;
const ContactMeSection = styled.div`
  text-align: right;
  padding: 0 2rem;
  color: rgba(0, 0, 0, 0.35);
  align-self: center;
  span {
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export default function Header() {
  const [openAboutMe, setOpenAboutMe] = useState(false);
  return (
    <>
      <PortfolioHeader className="row">
        <AboutMeSection className="col-6">
          <span>
            <AboutMeBtn onClick={() => setOpenAboutMe(true)}>
              About Me
            </AboutMeBtn>
          </span>
          <span>
            <a
              href={gitUrl}
              dangerouslySetInnerHTML={{ __html: gitSvg }}
              target="_blank"
              rel="noreferrer"
            />
          </span>
        </AboutMeSection>
        <ContactMeSection className="col-6">Contact</ContactMeSection>
      </PortfolioHeader>
      {openAboutMe && <AboutMe />}
    </>
  );
}
