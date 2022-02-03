import React from "react";
import styled from "styled-components";
import { AppLink } from "../../components/link/AppLink";
import { PortfolioSection } from "./PortfolioSection";
import { SiNextdotjs } from "react-icons/si";

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
  min-height: 150px;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
    "header"
    "subheader"
    "description";

  padding: 0.5rem 0;

  &:not(:first-child) {
    border-top: 1px solid black;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 150px 1fr;
    grid-template-areas:
      "logo header"
      "logo subheader"
      "logo description";
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
  gap: 0.5rem;
  display: flex;
`;
const Time = styled.span`
  font-style: italic;
`;

const Description = styled.p`
  grid-area: description;
  margin-bottom: auto;
`;

const StyledLink = styled.a`
  color: var(--text-black);
  font-size: inherit;
  margin-bottom: auto;
`;

const NextIcon = styled(SiNextdotjs)`
  display: none;
  grid-area: logo;
  margin: auto;

  @media screen and (min-width: 1200px) {
    display: initial;
  }
`;

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
        <Heading>
          <StyledLink
            href="https://www.coursera.org/learn/foundations-user-experience-design"
            target="_blank"
          >
            Foundations of User Experience (UX) Design
          </StyledLink>
        </Heading>
        <SubHeading>
          <StyledLink href="https://www.coursera.org/" target="_blank">
            coursera,
          </StyledLink>{" "}
          <Time>2022 - present</Time>
        </SubHeading>
        <Description>
          Learning about the four Cs of UX: consistency, continuity, context,
          and complementary.
        </Description>
      </Item>
      <Item>
        <NextIcon size={100}></NextIcon>
        <Heading>
          <StyledLink
            href="https://fireship.io/courses/react-next-firebase/"
            target="_blank"
          >
            Next.js Firebase Full Course
          </StyledLink>
        </Heading>
        <SubHeading>
          <StyledLink href="https://fireship.io/" target="_blank">
            fireship,
          </StyledLink>{" "}
          <Time>2022 - present</Time>
        </SubHeading>
        <Description>
          Learning about SEO and best practices in server-side rendering using
          the Next.js framework
        </Description>
      </Item>
      <Item>
        <Logo src="logo/uu.png" width={150} height={150} />
        <Heading>Computer Science</Heading>
        <SubHeading>
          <StyledLink href="https://www.uu.se/en/?languageId=1" target="_blank">
            Uppsala University,
          </StyledLink>
          <Time>2020 - 2022</Time>
        </SubHeading>
        <Description>
          The first half of the{" "}
          <StyledLink
            href="https://www.uu.se/en/admissions/master/selma/program/?pKod=TDV1K"
            target="_blank"
          >
            Bachelor's Programme in Computer Science
          </StyledLink>
        </Description>
      </Item>
    </PortfolioSection>
  );
};
