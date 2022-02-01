import React from "react";
import styled from "styled-components";
import { Screen } from "../../media/Screen";
import { AppNav } from "./AppNav";

const Root = styled.footer`
  grid-area: app-footer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: min(20vw, 100px);
  padding: 2vw;

  color: white;
  background-image: var(--footer-gradient);

  @media screen and (min-width: 1200px) {
    background-image: none;
  }
`;

interface Props {
  className?: string;
}

export const AppFooter = (props: Props) => {
  return (
    <Root className={props.className}>
      {Screen.current() !== Screen.bigScreen && <AppNav></AppNav>}
    </Root>
  );
};
