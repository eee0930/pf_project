import styled from 'styled-components';
import { workInfo } from '../../assets/works';
import { titles } from '../../assets/ment';
import { useMemo } from 'react';

interface IProject {
  idx: number;
}

const ProjectWrapper = styled.div`
  padding: 3rem 0;
  @media (min-width: 1200px) {
    padding: 5rem 0;
  }
`;
const DefaultTitleSection = styled.div`
  line-height: 1.8;
  letter-spacing: -0.02em;
  font-size: 15px;
  span {
    font-weight: 600;
    display: inline-block;
    margin: 0.2rem 0;
  }
  label {
    padding: 2px 5px;
    color: #fff;
    border-radius: 2px;
    margin-right: 5px;
    font-size: 13px;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
    label {
      font-size: 14px;
    }
  }
`;
const ContentSection = styled.div`
  margin-top: 5rem;
  line-height: 1.2;
  img {
    width: 100%;
    max-width: 300px;
    margin: 0 auto 0.5rem;
  }
  @media (min-width: 768px) {
    img {
      max-width: 500px;
      margin: 0.5rem 0 0;
    }
  }
  @media (min-width: 1200px) {
    margin-top: 5rem;
    img {
      max-width: 700px;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 18px;
  @media (min-width: 991px) {
    position: relative;
    &:after {
      content: '●';
      position: absolute;
      color: inherit;
      top: 25%;
      font-size: 10px;
      left: -1.5rem;
    }
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
const Ol = styled.ol`
  font-size: 15px;
  li {
    position: relative;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
const Number = styled.span`
  position: absolute;
  top: 0;
  left: -1rem;
  font-size: 18px;
  font-weight: 600;
  @media (min-width: 768px) {
    left: -1.2rem;
  }
  @media (min-width: 991px) {
    left: -1.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
export default function Projects({ idx }: IProject) {
  const { period, contribution, skill, color, list, issue, use } = useMemo(
    () => workInfo[idx],
    [idx]
  );
  return (
    <ProjectWrapper>
      <DefaultTitleSection>
        <span style={{ color }}>{titles.p} : </span> {period} <br />
        <span style={{ color }}>{titles.c} : </span> {contribution} <br />
        <span style={{ color }}>{titles.s} : </span>{' '}
        {skill.map((s) => (
          <label key={s} style={{ backgroundColor: color }}>
            {s}
          </label>
        ))}
      </DefaultTitleSection>
      <ContentSection>
        <Title style={{ color }}>{titles.functions}</Title>
        <Ol>
          {list.map((w, i) => (
            <li key={i}>
              <Number style={{ color }}>{i + 1}</Number>
              <span dangerouslySetInnerHTML={{ __html: w }} />
            </li>
          ))}
        </Ol>
      </ContentSection>
      <ContentSection>
        <Title style={{ color }}>{titles.issues}</Title>
        <Ol>
          {issue.map((w, i) => (
            <li key={i}>
              <Number style={{ color }}>{i + 1}</Number>
              <span dangerouslySetInnerHTML={{ __html: w }} />
            </li>
          ))}
        </Ol>
      </ContentSection>
      <ContentSection>
        <Title style={{ color }}>{titles.uses}</Title>
        <div>{use}</div>
      </ContentSection>
    </ProjectWrapper>
  );
}
