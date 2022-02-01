import React from "react";
import styled from "styled-components";
import { AppTemplate } from "../components/layout/AppTemplate";
import { BrandLinks } from "../components/link/BrandLinks";

const Template = styled(AppTemplate)`
  display: grid;
  grid-template-rows: minmax(0, 0.6fr) minmax(0, 1fr);
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas:
    "text-section"
    "brand-links";

  padding: 0;

  background-image: linear-gradient(#dfd2b9cc, #dfd2b9cc),
    url("man-under-tree.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;

  gap: 2rem;
  overflow: auto;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    background-image: url("man-under-tree.svg");
    background-size: 40%;
    background-position: 85%;
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

interface Props {
  className?: string;
}

export const Home = (props: Props) => {
  return (
    <Template>
      <TextSection>
        <H1>Hi! I'm David,</H1>
        <H2>
          a freelancing <Developer>developer</Developer>
        </H2>
      </TextSection>
      <StyledBrandLinks></StyledBrandLinks>
    </Template>
  );
};

export default Home;
