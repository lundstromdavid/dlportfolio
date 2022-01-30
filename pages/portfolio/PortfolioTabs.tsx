import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { EPortfolioRoute, PortfolioRoute } from ".";

const Root = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Tab = styled(motion.button)`
  padding: 1vw;
  font-weight: bold;
  font-size: 1rem;
  color: var(--text-black);
  cursor: pointer;
  border: none;
  background: transparent;
`;

const Divider = styled.span`
  border: 1px solid black;
`;

interface Props {
  className?: string;
}

export const PortfolioTabs = (props: Props) => {
  const Tabs = () => {
    const values = Object.values(EPortfolioRoute);
    const length = values.length;

    return values.map((en, i) => {
      return (
        <>
          <Tab key={en} whileHover={{ color: "var(--text-red)" }}>
            {en}
          </Tab>
          {i < length - 1 && <Divider />}
        </>
      );
    });
  };

  return <Root className={props.className}>{Tabs()}</Root>;
};
