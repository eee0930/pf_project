import styled from 'styled-components';
import { workInfo } from '../../assets/works';

interface IProject {
  idx: number;
}

const ProjectWrapper = styled.div`
  padding: 3rem 0;
`;
const DefaultTitleSection = styled.div`
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-size: 15px;
  span {
    color: ${(props) => props.theme.main2};
    font-weight: 600;
  }
`;
const ContentSection = styled.div`
  margin-top: 3rem;
  img {
    max-width: 500px;
  }
`;
const Title = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.main2};
  font-weight: 600;
  font-size: 18px;
`;
const Ol = styled.ol`
  line-height: 1.2;
  font-size: 16px;
  li {
    margin-bottom: 1rem;
  }
`;
export default function Projects({ idx }: IProject) {
  const work = workInfo[idx];
  return (
    <ProjectWrapper>
      <DefaultTitleSection>
        <span>Period : </span> {work.period} <br />
        <span>Contribution : </span> {work.Contribution} <br />
      </DefaultTitleSection>
      <ContentSection>
        <Title>개발한 프로덕트의 기능 및 특징</Title>
        <Ol>
          {work.list.map((w, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: w }} />
          ))}
        </Ol>
      </ContentSection>
      <ContentSection>
        <Title>개발 과정에서의 어려움 및 해결 방법</Title>
        <Ol>
          {work.issue.map((w, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: w }} />
          ))}
        </Ol>
      </ContentSection>
      <ContentSection>
        <Title>개발한 프로덕트의 활용 사례</Title>
        <div>{work.use}</div>
      </ContentSection>
    </ProjectWrapper>
  );
}
