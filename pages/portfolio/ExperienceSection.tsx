import React from "react";
import styled from "styled-components";
import { PortfolioSection } from "./PortfolioSection";

interface Props {
  className?: string;
}

export const ExperienceSection = (props: Props) => {
  return (
    <PortfolioSection
      title="Experience"
      titleColor="#41656c"
      background="#41656c80"
      index={0}
    >
      Write about your exprience here love
    </PortfolioSection>
  );
};
