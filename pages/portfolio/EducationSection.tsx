import React from "react";
import styled from "styled-components";
import { PortfolioSection } from "./PortfolioSection";

interface Props {
  className?: string;
}

const Logo = styled.img`
  display: none;

  grid-area: logo;
  object-fit: contain;

  @media screen and (min-width: 1200px) {
    display: initial;
  }
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  grid-template-rows: auto auto;
  grid-template-areas:
    "header"
    "subheader";
  padding: 0.5rem 0;

  &:not(:first-child) {
    border-top: 1px solid black;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto 1fr;
    grid-template-areas:
      "logo header"
      "logo subheader";
  }
`;

const Heading = styled.h3`
  grid-area: header;
  margin-top: auto;
  font-size: min(1.1rem, 3.7vw);
`;
const SubHeading = styled.h4`
  grid-area: subheader;
  font-size: min(1rem, 3.4vw);
`;
const Time = styled.span`
  font-style: italic;
`;

const Description = styled.p``;

export const EducationSection = (props: Props) => {
  return (
    <PortfolioSection
      title="Education"
      titleColor="#849d8c"
      background="#849d8c60"
      index={2}
    >
      <Item>
        <Logo src="logo/coursera.png" width={150} height={150} />
        <Heading>Foundations of User Experience (UX) Design</Heading>
        <SubHeading>
          coursera, <Time>2022 - present</Time>
        </SubHeading>
      </Item>
      <Item>
        <Logo src="logo/uu.png" width={150} height={150} />
        <Heading>Computer Science</Heading>
        <SubHeading>
          Uppsala University, <Time>2020 - 2022</Time>
        </SubHeading>
      </Item>
    </PortfolioSection>
  );
};
