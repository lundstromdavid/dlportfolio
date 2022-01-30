import React from "react";
import styled from "styled-components";
import { AppHeader } from "../../components/layout/AppHeader";
import { AppMain } from "../../components/layout/AppMain";

interface Props {
  className?: string;
}

export const About = (props: Props) => {
  return (
    <>
      <AppHeader></AppHeader>
      <AppMain>About</AppMain>
    </>
  );
};

export default About;
