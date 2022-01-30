import "reset-css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component key={pathname} {...pageProps} />;
    </AnimatePresence>
  );
}

export default MyApp;
