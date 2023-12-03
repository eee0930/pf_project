import styled from 'styled-components';
import BackDivide from './contents/BackDivide';
import WorkCards from './contents/WorkCards';

const ContentContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;
const AbsoluteWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default function ContentSection() {
  return (
    <ContentContainer>
      <AbsoluteWrapper>
        <BackDivide />
      </AbsoluteWrapper>
      {/* <AbsoluteWrapper>
        <WorkCards />
      </AbsoluteWrapper> */}
    </ContentContainer>
  );
}
