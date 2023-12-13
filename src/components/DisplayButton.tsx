import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

interface IDisplayButton {
  handleOpen: () => void;
  handleGather: () => void;
}
const ButtonWrapper = styled.div`
  width: 88px;
  height: 48px;
  border-radius: 48px;
  background-color: #000;
  margin: 0 auto;
  cursor: pointer;
  flex-wrap: wrap;
  position: relative;
`;
const Switch = styled.div`
  display: inline-flex;
  position: absolute;
  top: 4px;
  left: 4px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  color: #fff;
  flex-wrap: wrap;
  > span > span {
    background: #fff;
  }
  &.active {
    > span > span {
      background: #000;
    }
  }
`;
const Switch2 = styled(Switch)`
  left: 44px;
`;
const Active = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 0;
`;
const ModeCover = styled.span`
  position: relative;
`;
const ModeIcon = styled.span`
  border-radius: 2px;
  display: inline-block;
  height: 16px;
  width: 12px;
`;
const DotCover = styled.span`
  position: relative;
  column-gap: 3px;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  height: 15px;
  row-gap: 3px;
  width: 15px;
`;
const DotIcon = styled.span`
  border-radius: 20%;
  display: block;
  height: 6px;
  width: 6px;
`;
export default function DisplayButton({
  handleOpen,
  handleGather,
}: IDisplayButton) {
  const [leftActive, setLeftActive] = useState(true);
  const handleClickSwitch = (isLeft: boolean) => {
    if (isLeft) {
      setLeftActive(true);
      handleGather();
    } else {
      setLeftActive(false);
      handleOpen();
    }
  };
  return (
    <ButtonWrapper>
      <Switch
        onClick={() => handleClickSwitch(true)}
        className={`${leftActive ? 'active' : ''}`}
      >
        {leftActive && <Active layoutId="switch" />}
        <ModeCover>
          <ModeIcon />
        </ModeCover>
      </Switch>
      <Switch2
        onClick={() => handleClickSwitch(false)}
        className={`${leftActive ? '' : 'active'}`}
      >
        {!leftActive && <Active layoutId="switch" />}
        <DotCover>
          <DotIcon />
          <DotIcon />
          <DotIcon />
          <DotIcon />
        </DotCover>
      </Switch2>
    </ButtonWrapper>
  );
}
