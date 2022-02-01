import React from "react";
import styled from "styled-components";
import { AppLink } from "../link/AppLink";
import { FaParagraph, FaHome, FaBriefcase } from "react-icons/fa";

const Root = styled.nav`
  display: flex;
  gap: min(12vw, 75px);
  padding: 0 2vw;
`;

interface Props {
  className?: string;
}

export const AppNav = (props: Props) => {
  const iconSize = 30;

  return (
    <Root className={props.className}>
      <AppLink href="/">
        <FaHome size={iconSize} />
        Home
      </AppLink>

      <AppLink href="/portfolio">
        <FaBriefcase size={iconSize} />
        Portfolio
      </AppLink>
      <AppLink href="/about">
        <FaParagraph size={iconSize} />
        About
      </AppLink>
    </Root>
  );
};
