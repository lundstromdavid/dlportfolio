import React from "react";
import styled from "styled-components";
import { AppNav } from "./AppNav";

const Root = styled.aside`
  grid-area: app-sidebar;

  display: flex;
  justify-content: center;
  align-items: center;

  width: min(18vw, 80px);
  height: 100%;
  padding: 2vw;

  color: white;
  background-image: var(--footer-gradient);

  background: var(--dark-blue);
`;

const StyledAppNav = styled(AppNav)`
  flex-direction: column;
`;

interface Props {
  className?: string;
}

export const AppSidebar = (props: Props) => {
  return (
    <Root className={props.className}>
      <StyledAppNav></StyledAppNav>
    </Root>
  );
};
