import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Root = styled(motion.a)`
  display: flex;
  flex-direction: column;
  gap: min(5vw, 1rem);
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

interface Props extends HTMLMotionProps<"a"> {
  external?: boolean;
  className?: string;
  color?: string;
}

export const AppLink: React.FC<Props> = (props) => {
  const { pathname } = useRouter();

  const Wrapper = ({ children }: { children: React.ReactElement }) => {
    if (props.external) {
      return <>{children}</>;
    } else {
      return <Link href={props.href || "/"}>{children}</Link>;
    }
  };

  const { external, color, ...rest } = props;

  const isCurrent = () => pathname === props.href;

  const isCurrentOrExternal = () => props.external || isCurrent();

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
            color: "var(--text-red)",
          }}
          animate={{
            opacity: isCurrentOrExternal() ? 1 : 0.6,
            color:
              isCurrent() && !props.external
                ? "var(--text-red)"
                : color || "#ffffff",
          }}
          whileTap={{ scale: 0.75 }}
        >
          {props.children}
        </Root>
      </Wrapper>
    </AnimatePresence>
  );
};
