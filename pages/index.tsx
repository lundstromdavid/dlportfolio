import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { AppHeader } from "../components/layout/AppHeader";
import { AppMain } from "../components/layout/AppMain";
import { BrandLinks } from "../components/link/BrandLinks";
import { VscSmiley } from "react-icons/vsc";
import { AppFooter } from "../components/layout/AppFooter";

const Main = styled(AppMain)`
  display: grid;
  grid-template-rows: minmax(0, 0.6fr) minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "text-section"
    "brand-links";

  padding: 0;

  background-image: url("man-under-tree.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 85%;

  overflow: auto;

  & > * {
    @media screen and (max-width: 1200px) {
      background: #dfd2b9cc;
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    background-size: 40%;
  }
`;

const TextSection = styled.section`
  grid-area: text-section;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  padding-bottom: 4vw;
  /* padding: 5vw 4rem 4rem 13vw; */
`;

const H1 = styled.h1``;
const H2 = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Developer = styled.span`
  color: var(--text-red);
`;

const StyledBrandLinks = styled(BrandLinks)`
  align-items: flex-start;
`;

const Smiley = styled(VscSmiley)`
  /* color: var(--brown-yellow); */
`;

interface Props {
  className?: string;
}

export const Home = (props: Props) => {
  return (
    <>
      <AppHeader>Test</AppHeader>
      <Main>
        <TextSection>
          <H1>Hi! I'm David,</H1>
          <H2>
            a freelancing <Developer>developer</Developer>
            <Smiley size="30"></Smiley>
          </H2>
        </TextSection>
        <StyledBrandLinks></StyledBrandLinks>
      </Main>
    </>
  );
};

export default Home;
