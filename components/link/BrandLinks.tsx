import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { AppLink } from "./AppLink";
import { HTMLMotionProps, motion } from "framer-motion";

const Root = styled(motion.aside)`
  grid-area: brand-links;
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Item = styled.li``;

const StyledLink = styled(AppLink)`
  color: var(--text-black);
  flex-direction: row;
`;

interface Props extends HTMLMotionProps<"aside"> {
  className?: string;
}

export const BrandLinks = (props: Props) => {
  return (
    <Root {...props}>
      <List>
        <Item>
          <StyledLink
            href="https://github.com/lundstromdavid"
            external
            target="_blank"
          >
            <FaGithub size={40} />
            GitHub
          </StyledLink>
        </Item>
        <Item>
          <StyledLink
            href="https://www.linkedin.com/in/david-lundstr%C3%B6m-53b863229/"
            external
            target="_blank"
          >
            <FaLinkedin size={40} />
            LinkedIn
          </StyledLink>
        </Item>
        <Item>
          <StyledLink href="mailto:david@lundstrom.eu" external target="_blank">
            <IoMdMail size={40} />
            david@lundstrom.eu
          </StyledLink>
        </Item>
      </List>
    </Root>
  );
};
