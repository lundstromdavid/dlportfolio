import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Root = styled(motion.section)`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  width: 100%;
  height: 80%;
  max-width: 700px;
`;

const Header = styled.header`
  padding: 0 min(3vw, 20px);
`;

const H2 = styled(motion.h2)`
  text-shadow: 1px 1px white;
`;

const Main = styled(motion.main)`
  padding: 2vw;
  max-width: 100%;
  border-radius: 0.5rem;
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const List = styled.ul``;

interface Props {
  className?: string;
  title: string;
  titleColor: string;
  background: string;
  index: number;
}

export const PortfolioSection: React.FC<Props> = (props) => {
  return (
    <Root
      className={props.className}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: (props.index + 1) * 0.2,
      }}
    >
      <Header>
        <H2
          animate={{
            color: props.titleColor,
          }}
        >
          {props.title}
        </H2>
      </Header>
      <Main
        initial={{
          scaleY: 0,
          transformOrigin: "50% 0%",
        }}
        animate={{
          scaleY: 1,
          backgroundColor: props.background,
        }}
        transition={{
          delay: (props.index + 1) * 0.25,
        }}
      >
        <List>{props.children}</List>
      </Main>
    </Root>
  );
};
