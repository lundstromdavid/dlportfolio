import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Root = styled(motion.main)`
  grid-area: app-main;
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

interface Props {
  className?: string;
}

export const AppMain: React.FC<Props> = (props) => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  return (
    <Root
      className={props.className}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
    >
      {props.children}
    </Root>
  );
};
