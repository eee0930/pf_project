import styled from 'styled-components';
import { playvoiceWork } from '../../assets/works';
import { backColors } from '../../assets/ment';

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
  margin-bottom: 5rem;
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
  @media (min-width: 1200px) {
    margin-bottom: 5rem;
    font-size: 16px;
  }
`;
const ContentSection = styled.div`
  margin-top: 5rem;
  line-height: 1.5;
  img {
    max-width: 500px;
    margin-bottom: 0.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;
const Title = styled.div`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.main2};
  font-weight: 600;
  font-size: 18px;

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
const Ol = styled.ol`
  line-height: 1.2;
  font-size: 15px;
  li {
    position: relative;
    margin-bottom: 1rem;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
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
const ImageSection = styled.div`
  img {
    display: block;
    margin: 1rem 0;
    max-width: 500px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }
`;
export default function Playvoice() {
  return (
    <ProjectWrapper>
      {playvoiceWork.list.map((pro) => (
        <DefaultTitleSection key={pro.name}>
          <Title>{pro.name}</Title>
          <span>Period : </span> {pro.period} <br />
          <span>Contribution : </span> {pro.contribute} <br />
          <span>Skills : </span>{' '}
          {pro.skill.map((s) => (
            <label
              key={s}
              style={{
                backgroundColor: backColors[5],
              }}
            >
              {s}
            </label>
          ))}
          <div>
            <span>개발한 프로덕트의 기능 및 특징</span>
            <br />
            {pro.des.map((d, i) => (
              <p key={i}>{d}</p>
            ))}
          </div>
          <ImageSection>
            {pro.img.map((image, i) => (
              <img
                key={i}
                src={`${process.env.PUBLIC_URL}/works/playvoice/${image}`}
                alt={pro.name}
              />
            ))}
          </ImageSection>
        </DefaultTitleSection>
      ))}
      <DefaultTitleSection>
        <div>
          <span>ETC</span>
          <br />
          {playvoiceWork.des.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
        <ImageSection>
          {playvoiceWork.img.map((image, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/works/playvoice/${image}`}
              alt="mypage"
            />
          ))}
        </ImageSection>
      </DefaultTitleSection>

      <ContentSection>
        <Title>개발 과정에서의 어려움 및 해결 방법</Title>
        <Ol>
          {playvoiceWork.issue.map((w, i) => (
            <li key={i}>
              <Number>{i + 1}</Number>
              <span dangerouslySetInnerHTML={{ __html: w }} />
            </li>
          ))}
        </Ol>
      </ContentSection>
      <ContentSection>
        <Title>개발한 프로덕트의 활용 사례</Title>
        <div>{playvoiceWork.use}</div>
      </ContentSection>
    </ProjectWrapper>
  );
}
