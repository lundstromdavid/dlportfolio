import "reset-css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { AppHeader } from "../components/layout/AppHeader";
import { useScreenSize } from "../hooks/MediaHooks";
import { Screen } from "../media/Screen";
import { AppSidebar } from "../components/layout/AppSidebar";
import { AppFooter } from "../components/layout/AppFooter";

function MyApp({ Component, pageProps }: AppProps) {
  const screen = useScreenSize();
  const { pathname } = useRouter();

  return (
    <>
      <AppHeader />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component key={pathname} {...pageProps} />;
      </AnimatePresence>
      {screen === Screen.smallScreenLandscape ? <AppSidebar /> : <AppFooter />}
    </>
  );
}

export default MyApp;
