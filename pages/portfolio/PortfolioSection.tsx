import React from "react";
import styled from "styled-components";
import { AppFooter } from "../../components/layout/AppFooter";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const Header = styled.header`
  padding: 0 3vw;
`;

const H2 = styled.h2``;

const Main = styled.main`
  padding: 2vw;
  width: 700px;
  max-width: 100%;
`;

const List = styled.ul``;

interface Props {
  className?: string;
  title: string;
}

export const PortfolioSection: React.FC<Props> = (props) => {
  return (
    <Root className={props.className}>
      <Main>
        <List>{props.children}</List>
      </Main>
    </Root>
  );
};
