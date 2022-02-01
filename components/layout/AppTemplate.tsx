import React from "react";
import styled from "styled-components";
import { useScreenSize } from "../../hooks/MediaHooks";
import { Screen } from "../../media/Screen";
import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";
import { AppMain } from "./AppMain";
import { AppSidebar } from "./AppSidebar";

interface Props {
  className?: string;
}

export const AppTemplate: React.FC<Props> = (props) => {
  const screen = useScreenSize();

  return (
    <>
      <AppHeader />
      <AppMain className={props.className}>{props.children}</AppMain>
      {screen === Screen.smallScreenLandscape ? (
        <AppSidebar></AppSidebar>
      ) : (
        <AppFooter></AppFooter>
      )}
    </>
  );
};
