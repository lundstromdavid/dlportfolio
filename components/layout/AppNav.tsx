import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AppLink } from "../link/AppLink";
import { FaParagraph, FaHome, FaBriefcase } from "react-icons/fa";
import { useRouteLoading } from "../../hooks/RoutingHooks";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingIndicator } from "../LoadingIndicator";

const Root = styled(motion.nav)`
  display: flex;
  gap: min(12vw, 75px);
  padding: 0 2vw;

  @media screen and (orientation: landscape) and (max-width: 1200px) {
    gap: min(12vh, 75px);
  }
`;

const StyledLoadingIndicator = styled(LoadingIndicator)`
  margin: auto 0;
`;

interface Props {
  className?: string;
}

export const AppNav = (props: Props) => {
  const routeLoading = useRouteLoading();
  const iconSize = 28;

  const navRef = useRef<HTMLElement | null>(null);

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {routeLoading ? (
        <StyledLoadingIndicator
          key="loading"
          initial={{ opacity: 0, width: navRef.current?.clientWidth || "auto" }}
          animate={{ opacity: 1, width: navRef.current?.clientWidth || "auto" }}
          exit={{ opacity: 0 }}
        />
      ) : (
        <Root
          ref={navRef}
          key="nav"
          className={props.className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          <AppLink href="/">
            <FaHome size={iconSize} />
            Home
          </AppLink>

          <AppLink href="/portfolio">
            <FaBriefcase size={iconSize} />
            Portfolio
          </AppLink>
          <AppLink href="/about">
            <FaParagraph size={iconSize} />
            About
          </AppLink>
        </Root>
      )}
    </AnimatePresence>
  );
};
