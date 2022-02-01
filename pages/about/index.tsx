import React from "react";
import styled from "styled-components";
import { AppFooter } from "../../components/layout/AppFooter";
import { AppHeader } from "../../components/layout/AppHeader";
import { AppMain } from "../../components/layout/AppMain";
import { useScreenSize } from "../../hooks/MediaHooks";

interface Props {
  className?: string;
}

export const About = (props: Props) => {
  const screen = useScreenSize();

  return (
    <>
      <AppHeader></AppHeader>
      <AppMain>About</AppMain>
      <AppFooter></AppFooter>
    </>
  );
};

export default About;
