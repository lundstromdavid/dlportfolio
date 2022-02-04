import Link from "next/link";
import React, { ReactType } from "react";
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
  const color = "#000000";

  const LocalLink = (props: { children: React.ReactNode; href: string }) => (
    <StyledLink href={props.href} external target="_blank" color={color}>
      {props.children}
    </StyledLink>
  );

  return (
    <Root {...props}>
      <List>
        <Item>
          <LocalLink href="https://github.com/lundstromdavid">
            <FaGithub size={40} />
            GitHub
          </LocalLink>
        </Item>
        <Item>
          <LocalLink href="https://www.linkedin.com/in/david-lundstr%C3%B6m-53b863229/">
            <FaLinkedin size={40} />
            LinkedIn
          </LocalLink>
        </Item>
        <Item>
          <LocalLink href="mailto:david@lundstrom.eu">
            <IoMdMail size={40} />
            david@lundstrom.eu
          </LocalLink>
        </Item>
      </List>
    </Root>
  );
};
