import { AnimatePresence, motion } from 'framer-motion';
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
const Switch = styled(motion.div)`
  display: inline-flex;
  position: absolute;
  top: 4px;
  left: 4px;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: #000;
  color: #fff;
  flex-wrap: wrap;
  > span > span {
    background: #fff;
  }
  &.active {
    background-color: #fff;
    > span > span {
      background: #000;
    }
  }
`;
const Switch2 = styled(Switch)`
  left: unset;
  right: 4px;
`;
const DotCover = styled.span`
  column-gap: 3px;
  display: -webkit-box;
  display: flex;
  flex-wrap: wrap;
  height: 15px;
  row-gap: 3px;
  width: 15px;
`;
const ModeIcon = styled.span`
  background: #000;
  border-radius: 2px;
  display: inline-block;
  height: 16px;
  width: 12px;
`;
const DotIcon = styled.span`
  background: #fff;
  border-radius: 50%;
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
      <AnimatePresence>
        <Switch
          layoutId="switch"
          onClick={() => handleClickSwitch(true)}
          className={`${leftActive ? 'active' : ''}`}
        >
          <span>
            <ModeIcon />
          </span>
        </Switch>
        <Switch2
          layoutId="switch"
          onClick={() => handleClickSwitch(false)}
          className={`${leftActive ? '' : 'active'}`}
        >
          <DotCover>
            <DotIcon />
            <DotIcon />
            <DotIcon />
            <DotIcon />
          </DotCover>
        </Switch2>
      </AnimatePresence>
    </ButtonWrapper>
  );
}
