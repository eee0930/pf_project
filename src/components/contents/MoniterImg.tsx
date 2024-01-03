import { styled } from 'styled-components';
import { backColors } from '../../assets/ment';
import { workList } from '../../assets/works';

interface IMoniterImg {
  idx: number;
}

const MoniterWrapper = styled.div`
  width: 100%;
  margin: 2rem auto;
  min-height: 1px;
  position: relative;
`;
const PCMoniter = styled.div`
  position: relative;
  width: 80%;
  padding: 2.5%;
  border-radius: 0.5rem;
  box-shadow: inset -3px -3px 8px rgba(0, 0, 0, 0.2),
    inset 1px 1px 4px rgba(0, 0, 0, 0.05), 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
const PcImg = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.2),
    2px 2px 6px rgba(255, 255, 255, 0.3);
`;
const MobileMoniter = styled.div`
  width: 30%;
  position: absolute;
  padding: 1.5%;
  border-radius: 0.5rem;
  position: absolute;
  bottom: -10%;
  right: 0%;
  box-shadow: inset -1px -1px 4px rgba(0, 0, 0, 0.2),
    3px 3px 7px rgba(0, 0, 0, 0.2);

  animation: updown 01.6s ease infinite;

  @keyframes updown {
    0%,
    100% {
      transform: translateY(-5%);
    }
    50% {
      transform: translateY(0%);
    }
  }
`;
const MobileImg = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.2),
    1px 1px 3px rgba(255, 255, 255, 0.2);
`;
export default function MoniterImg({ idx }: IMoniterImg) {
  const work = workList[idx];
  const bgStyle = { backgroundColor: backColors[idx] };
  const workImgs = {
    pc: `${process.env.PUBLIC_URL}/works/${work.img[0]}.png`,
    mobile: `${process.env.PUBLIC_URL}/works/${work.img[1]}.png`,
  };
  return (
    <MoniterWrapper>
      <PCMoniter style={bgStyle}>
        <PcImg src={workImgs.pc} alt={work.name} />
      </PCMoniter>
      {workImgs?.mobile && (
        <MobileMoniter style={bgStyle}>
          <MobileImg src={workImgs.mobile} alt={work.name} />
        </MobileMoniter>
      )}
    </MoniterWrapper>
  );
}
