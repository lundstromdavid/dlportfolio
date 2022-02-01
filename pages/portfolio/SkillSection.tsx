import React from "react";
import styled from "styled-components";
import { PortfolioSection } from "./PortfolioSection";

interface Props {
  className?: string;
}

export const SkillSection = (props: Props) => {
  return (
    <PortfolioSection
      title="Skills"
      titleColor="#c01450"
      background="#c01450bb"
      index={1}
    >
      Write about your skills here baby
    </PortfolioSection>
  );
};
