import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Root = styled(motion.div)`
  display: flex;
`;

const Rotating = styled(motion.div)`
  width: 50px;
  height: 50px;
  border: none;
  border-top: 4px solid white;
  border-radius: 50%;
  margin: auto;
`;

interface Props extends HTMLMotionProps<"div"> {
  className?: string;
}

export const LoadingIndicator = (props: Props) => {
  return (
    <Root {...props}>
      <AnimatePresence initial={true}>
        <Rotating
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 1.3,
          }}
        ></Rotating>
      </AnimatePresence>
    </Root>
  );
};
