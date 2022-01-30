import React from "react";
import styled from "styled-components";
import { PortfolioSection } from "./PortfolioSection";

interface Props {
  className?: string;
}

const StyledSection = styled(PortfolioSection)`
  & > main {
    background: #849d8caa;
  }
`;

const Logo = styled.img`
  display: none;

  grid-area: logo;
  margin: 1rem;
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

  padding-bottom: 3vw;
  padding-top: 3vw;

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

const Header = styled.h3`
  grid-area: header;
  margin-top: auto;
`;
const Subheader = styled.h4`
  grid-area: subheader;
`;
const Time = styled.span`
  font-style: italic;
`;

const Description = styled.p``;

export const EducationSection = (props: Props) => {
  return (
    <StyledSection title="Education">
      <Item>
        <Logo src="logo/coursera.png" width={150} height={150} />
        <Header>Foundations of User Experience (UX) Design</Header>
        <Subheader>
          coursera, <Time>2022 - present</Time>
        </Subheader>
      </Item>
      <Item>
        <Logo src="logo/uu.png" width={150} height={150} />
        <Header>Bachelor's Programme in Computer Science</Header>
        <Subheader>
          Uppsala University, <Time>2020 - 2022</Time>
        </Subheader>
      </Item>
    </StyledSection>
  );
};
