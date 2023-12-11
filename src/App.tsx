import styled from 'styled-components';
import Intro from './components/Intro';
import Header from './components/Header';
import ContentSection from './components/ContentSection';

const ContentContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: ${(props) => props.theme.main1};
`;

function App() {
  return (
    <>
      <ContentContainer>
        <Header />
        <ContentSection />
      </ContentContainer>
      <Intro />
    </>
  );
}

export default App;
