import { HTMLMotionProps, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Root = styled(motion.a)`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin: auto;
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  transform-origin: 50% 50%;

  &:focus {
    outline: none;
  }
`;

const Text = styled.span``;

interface Props extends HTMLMotionProps<"a"> {
  external?: boolean;
  className?: string;
}

export const AppLink: React.FC<Props> = (props) => {
  const router = useRouter();

  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    if (props.external) {
      return <>{children}</>;
    } else {
      return <Link href={props.href || "/"}>{children}</Link>;
    }
  };

  const { external, ...rest } = props;

  return (
    <Wrapper>
      <Root
        {...rest}
        whileHover={{
          scale: 1.1,
          color: "var(--text-red)",
        }}
        whileFocus={{
          borderBottom: "1px solid var(--text-red)",
          scale: 1.1,
        }}
        animate={{
          fontWeight: router.pathname === props.href ? "bold" : "normal",
        }}
        whileTap={{ scale: 0.75 }}
      >
        {props.children}
      </Root>
    </Wrapper>
  );
};
