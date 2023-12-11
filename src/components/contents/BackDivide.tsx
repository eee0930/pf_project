import styled from 'styled-components';
import { backColors } from '../../assets/ment';

const BackgroundContainer = styled.div`
  height: 100vh;
`;
const BackgroundWrapper = styled.div`
  overflow: hidden;
  height: 100%;
  position: relative;
`;

interface IBackDivide {
  idx: number;
}
export default function BackDivide({ idx }: IBackDivide) {
  return (
    <BackgroundContainer className="row">
      <BackgroundWrapper
        className="col-12"
        style={{ backgroundColor: backColors[idx] }}
      ></BackgroundWrapper>
    </BackgroundContainer>
  );
}
