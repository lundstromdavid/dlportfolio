import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { BrandLinks } from "../link/BrandLinks";

const Root = styled.footer`
  grid-area: app-footer;

  display: flex;
  align-items: flex-end;

  width: 100%;
  height: 20vw;

  padding: 0.7rem;
  padding-top: 2rem;

  color: white;
  border: 1px solid yellow;
  background-image: var(--footer-gradient);

  @media screen and (min-width: 1200px) {
    background-image: none;
  }
`;

const Links = styled(BrandLinks)`
  color: white;
  margin-left: 0;
  margin-right: auto;

  & * {
    color: white;
  }

  & > ul {
    flex-direction: row;
  }
`;

interface Props {
  className?: string;
}

export const AppFooter = (props: Props) => {
  const { pathname } = useRouter();

  return (
    <Root className={props.className}>
      {/* <AnimatePresence initial={false}>
        {pathname !== "/" && (
          <Links
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></Links>
        )}
      </AnimatePresence> */}
    </Root>
  );
};
