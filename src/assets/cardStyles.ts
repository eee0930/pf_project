import { styled } from 'styled-components';

export const TitleSection = styled.div`
  position: relative;
`;
export const CardNum = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 2rem;
  font-weight: 600;
  transform: rotateZ(3deg);
`;
export const LogoSection = styled.div`
  width: 100%;
  text-align: center;
`;
export const Logo = styled.img`
  height: 80px;
  margin: 0 auto 1rem;
  @media (min-width: 1200px) {
    height: 100px;
  }
`;
export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.03em;
  margin-bottom: 2rem;
`;
export const Eng = styled.div`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;
