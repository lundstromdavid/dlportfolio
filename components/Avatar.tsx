import React from "react";
import styled from "styled-components";

const Root = styled.img`
  grid-area: "avatar";
  border-radius: 50%;
  padding: 1vw;
  padding-bottom: 0;
  height: 100%;
  max-height: 160px;
  z-index: 10;
  background: var(--dark-blue);
  border: 4px solid var(--brown-yellow);
`;

interface Props {
  className?: string;
}

export const Avatar = (props: Props) => {
  return <Root className={props.className} src="portrait.png" />;
};
