import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Root = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  align-items: center;

  margin: auto;
  font-size: 0.9rem;
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

  const isCurrentOrExternal = () =>
    props.external || router.pathname === props.href;

  return (
    <AnimatePresence initial={false}>
      <Wrapper>
        <Root
          {...rest}
          initial={{
            opacity: 0.6,
          }}
          whileHover={{
            scale: 1.1,
            color: "var(--text-red)",
            opacity: 1,
          }}
          whileFocus={{
            borderBottom: "1px solid var(--text-red)",
            scale: 1.1,
          }}
          animate={{
            // Framer complains when animating font weight
            //fontWeight: isCurrent() ? "600" : "400",
            opacity: isCurrentOrExternal() ? 1 : 0.6,
          }}
          whileTap={{ scale: 0.75 }}
        >
          {props.children}
        </Root>
      </Wrapper>
    </AnimatePresence>
  );
};
