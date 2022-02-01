import React from "react";
import styled from "styled-components";
import { Avatar } from "../components/Avatar";
import { AppFooter } from "../components/layout/AppFooter";
import { AppHeader } from "../components/layout/AppHeader";
import { AppMain } from "../components/layout/AppMain";
import { BrandLinks } from "../components/link/BrandLinks";
import { useScreenSize } from "../hooks/MediaHooks";
import { Screen } from "../media/Screen";

const Main = styled(AppMain)`
  display: grid;
  grid-template-rows: 0.5fr auto minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "avatar"
    "text-section"
    "brand-links";

  padding: 0;

  background-image: linear-gradient(#dfd2b9cc, #dfd2b9cc),
    url("man-under-tree.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;

  gap: 1rem;
  overflow: auto;

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
const StyledAvatar = styled(Avatar)`
  margin: auto auto 0 auto;
`;

const StyledBrandLinks = styled(BrandLinks)`
  align-items: flex-start;
`;

interface Props {
  className?: string;
}

export const Home = (props: Props) => {
  const screen = useScreenSize();

  return (
    <>
      <AppHeader />
      <Main>
        {/*  {screen !== Screen.bigScreen && <StyledAvatar />} */}
        <TextSection>
          <H1>Hi! I'm David,</H1>
          <H2>
            a freelancing <Developer>developer</Developer>
          </H2>
        </TextSection>
        <StyledBrandLinks></StyledBrandLinks>
      </Main>
      <AppFooter></AppFooter>
    </>
  );
};

export default Home;
