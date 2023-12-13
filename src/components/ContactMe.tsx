import { AnimatePresence, motion } from 'framer-motion';
import { styled } from 'styled-components';
import { TitleCover } from '../assets/globalStyles';
import { email } from '../assets/ment';
import { useState } from 'react';

const ContactMeSection = styled(motion.div)`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  @media (min-width: 991px) {
    overflow-y: hidden;
  }
`;
const CloseButton = styled.div`
  position: fixed;
  top: 1rem;
  left: 1rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
  z-index: 500;
  @media (min-width: 768px) {
    top: 1.5rem;
    left: 2rem;
  }
  @media (min-width: 1200px) {
    top: 2rem;
    left: 4rem;
  }
`;
const ContactMeWrapper = styled.div`
  position: relative;
  width: calc(100% - 2rem);
  height: calc(100vh - 2rem);
  margin: 1rem auto;
  @media (min-width: 768px) {
    width: calc(100% - 4rem);
    height: calc(100vh - 4rem);
    margin: 2rem auto;
  }
`;
const ContactMeContainer = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    width: fit-content;
    max-width: 500px;
  }
  @media (min-width: 991px) {
    max-width: 650px;
  }
  @media (min-width: 1200px) {
    max-width: 750px;
  }
`;
const Introduction = styled(motion.div)`
  line-height: 1.7;
  color: #000;
  .email {
    font-size: 7vmin;
  }
  @media (min-width: 768px) {
    .email {
      font-size: 4vmax;
    }
  }
`;
const ButtonSection = styled(motion.div)`
  margin-top: 3rem;
  display: flex;

  @media (min-width: 991.5px) {
    margin-top: 5rem;
  }
`;
const Button = styled.a`
  border: 2px solid #000;
  background-color: #000;
  color: #fff;
  border-radius: 25px;
  height: 50px;
  width: 150px;
  padding: 1px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  outline: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-right: 1rem;
  position: relative;
  &:hover {
    background-color: #fff;
    color: #000;
    div {
      border-color: #000;
      &:after {
        border-color: #000;
      }
    }
  }
  &.clone {
    width: 50px;
    position: relative;
  }
`;
const ButtonMsg = styled.div`
  background-color: #f1f3f4;
  color: #000;
  border-radius: 5px;
  font-size: 14px;
  width: 205px;
  padding: 5px 5px;
  position: absolute;
  top: 0;
  left: calc(100% + 0.5rem);
`;
const CloneIcon = styled.div`
  border-radius: 3px;
  width: 20px;
  height: 20px;
  border: solid 2px #fff;
  position: absolute;
  top: calc(50% - 11.5px);
  left: calc(50% - 11.5px);
  &:after {
    content: '';
    border-radius: 3px;
    width: 100%;
    height: 100%;
    border: solid 2px #fff;
    position: absolute;
    top: 3px;
    left: 3px;
  }
`;

const backVariants = {
  initial: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
  },
  animate: {
    backgroundColor: `rgba(255, 255, 255, 1)`,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
  exit: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
  },
};
const fadeVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.5,
    },
  },
};
const up1Variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};
const up2Variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 0.4,
      duration: 0.8,
    },
  },
};
const up3Variants = {
  initial: { y: 500, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: 0.6,
      duration: 0.8,
    },
  },
};

interface IContactMe {
  callback: () => void;
}

const EMAIL_BTN_VALUE = 'Email 보내기';
const CLONE_VALUE = '클립보드에 복사되었습니다.';
export default function ContactMe({ callback }: IContactMe) {
  const [openMsg, setOpenMsg] = useState(false);
  const handleClickClone = () => {
    setOpenMsg(true);
    navigator.clipboard.writeText(email).catch((err) => {
      console.log('Something went wrong', err);
    });
    const timeout = setTimeout(() => {
      setOpenMsg(false);
      clearTimeout(timeout);
    }, 1500);
  };
  return (
    <AnimatePresence>
      <ContactMeSection
        variants={backVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CloseButton onClick={callback}>&times;</CloseButton>
        <ContactMeWrapper>
          <ContactMeContainer
            variants={fadeVariants}
            initial="initial"
            animate="animate"
          >
            <TitleCover
              variants={up1Variants}
              initial="initial"
              animate="animate"
            >
              Contact Me
            </TitleCover>
            <Introduction>
              <motion.div
                variants={up2Variants}
                initial="initial"
                animate="animate"
                className="email"
              >
                {email}
              </motion.div>
              <ButtonSection
                variants={up3Variants}
                initial="initial"
                animate="animate"
              >
                <Button href={`mailto:${email}`}>{EMAIL_BTN_VALUE}</Button>
                <Button
                  as="button"
                  onClick={handleClickClone}
                  className="clone"
                  disabled={openMsg}
                >
                  <CloneIcon />
                  {openMsg && <ButtonMsg>{CLONE_VALUE}</ButtonMsg>}
                </Button>
              </ButtonSection>
            </Introduction>
          </ContactMeContainer>
        </ContactMeWrapper>
      </ContactMeSection>
    </AnimatePresence>
  );
}
