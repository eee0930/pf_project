import styled from 'styled-components';
import { workInfo } from '../../assets/works';
import { backColors } from '../../assets/ment';

interface IProject {
  idx: number;
}

const ProjectWrapper = styled.div`
  padding: 3rem 0;
`;
const DefaultTitleSection = styled.div`
  line-height: 1.8;
  letter-spacing: -0.02em;
  font-size: 15px;
  span {
    color: ${(props) => props.theme.main2};
    font-weight: 600;
  }
  label {
    padding: 2px 5px;
    color: #fff;
    border-radius: 2px;
    margin-right: 5px;
    font-size: 14px;
  }
`;
const ContentSection = styled.div`
  margin-top: 3rem;
  img {
    max-width: 500px;
    margin-bottom: 0.5rem;
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
  font-size: 15px;
  li {
    position: relative;
    margin-bottom: 1rem;
  }
`;
const Number = styled.span`
  position: absolute;
  top: 0;
  left: -1rem;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.main2};
`;
export default function Projects({ idx }: IProject) {
  const work = workInfo[idx];
  return (
    <ProjectWrapper>
      <DefaultTitleSection>
        <span>Period : </span> {work.period} <br />
        <span>Contribution : </span> {work.Contribution} <br />
        <span>Skills : </span>{' '}
        {work.skill.map((s) => (
          <label
            key={s}
            style={{
              backgroundColor: backColors[idx],
              color: idx === 0 ? '#000' : '',
            }}
          >
            {s}
          </label>
        ))}
      </DefaultTitleSection>
      <ContentSection>
        <Title>개발한 프로덕트의 기능 및 특징</Title>
        <Ol>
          {work.list.map((w, i) => (
            <li key={i}>
              <Number>{i + 1}</Number>
              <span dangerouslySetInnerHTML={{ __html: w }} />
            </li>
          ))}
        </Ol>
      </ContentSection>
      <ContentSection>
        <Title>개발 과정에서의 어려움 및 해결 방법</Title>
        <Ol>
          {work.issue.map((w, i) => (
            <li key={i}>
              <Number>{i + 1}</Number>
              <span dangerouslySetInnerHTML={{ __html: w }} />
            </li>
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
