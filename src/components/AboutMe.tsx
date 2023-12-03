import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const AboutMeSection = styled(motion.div)`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
};
export default function AboutMe() {
  return (
    <AboutMeSection
      variants={backVariants}
      initial="initial"
      animate="animate"
    ></AboutMeSection>
  );
}
