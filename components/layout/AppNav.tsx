import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { AppLink } from "../link/AppLink";
import { FaParagraph, FaHome, FaBriefcase } from "react-icons/fa";
import { useRouteLoading } from "../../hooks/RoutingHooks";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingIndicator } from "../LoadingIndicator";

const Root = styled(motion.nav)`
  display: flex;
  gap: min(12vmin, 75px);
  padding: 0 2vw;
`;

const StyledLoadingIndicator = styled(LoadingIndicator)`
  margin-top: 0.5rem;
`;

interface Props {
  className?: string;
}

export const AppNav = (props: Props) => {
  const routeLoading = useRouteLoading();
  const iconSize = 28;

  const navRef = useRef<HTMLElement | null>(null);
  const latestNavWidth = useRef<number>(0);

  useEffect(() => {
    if (navRef.current) {
      latestNavWidth.current = navRef.current.clientWidth;
    }
  });

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {routeLoading ? (
        <StyledLoadingIndicator
          key="loading"
          initial={{ opacity: 0, width: latestNavWidth.current || "auto" }}
          animate={{ opacity: 1, width: latestNavWidth.current || "auto" }}
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
