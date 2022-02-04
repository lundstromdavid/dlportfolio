import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Screen } from "../../media/Screen";
import { AppNav } from "./AppNav";

const Root = styled(motion.header)`
  grid-area: app-header;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  height: clamp(80px, 18vw, 210px);
  padding-top: 2rem;
  padding-right: 10vw;

  @media screen and (max-width: 1200px) {
    background: var(--dark-blue);
  }
`;

interface Props {
  className?: string;
}

export const AppHeader: React.FC<Props> = (props) => {
  if (Screen.current() !== Screen.bigScreen) {
    return <></>;
  }

  return (
    <Root className={props.className}>
      <AppNav></AppNav>
    </Root>
  );
};
