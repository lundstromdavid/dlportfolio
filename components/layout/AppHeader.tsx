import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { AppLink } from "../link/AppLink";

const Root = styled(motion.header)`
  grid-area: app-header;

  display: flex;

  width: 100%;
  height: clamp(80px, 18vw, 250px);
`;

const Avatar = styled.img`
  border-radius: 50%;
  padding: 1vw;
  padding-bottom: 0;
  height: 100%;
  max-height: 160px;
  z-index: 10;
  background: var(--dark-blue);
  border: 4px solid var(--brown-yellow);
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  margin-top: 5vw;
  margin-right: 2vw;
  margin-bottom: auto;
  margin-left: auto;
  gap: 2vw;
`;

interface Props {
  className?: string;
}

export const AppHeader: React.FC<Props> = (props) => {
  const { pathname } = useRouter();

  return (
    <Root className={props.className}>
      <Avatar src="portrait.png"></Avatar>
      <Nav>
        <AppLink href="/">Home</AppLink>
        <AppLink href="/portfolio">Portfolio</AppLink>
        <AppLink href="/about">About</AppLink>
      </Nav>
    </Root>
  );
};
