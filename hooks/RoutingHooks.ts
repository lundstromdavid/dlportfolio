import { Router } from "next/router";
import { useEffect, useState } from "react";

export function useRouteLoading(): boolean {
  const [loading, setLoading] = useState<boolean>(false);

  // The "react way" would be to put this in a ref, but I don't think it matters in this case?
  let timeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    Router.events.on("routeChangeStart", onRouteChangeStart);
    Router.events.on("routeChangeComplete", onRouteChangeCompleted);
    Router.events.on("routeChangeError", onRouteChangeError);

    return () => {
      Router.events.off("routeChangeStart", onRouteChangeStart);
      Router.events.off("routeChangeComplete", onRouteChangeCompleted);
      Router.events.off("routeChangeError", onRouteChangeError);
    };
  });

  function onRouteChangeStart() {
    if (!timeout) {
      timeout = setTimeout(() => {
        setLoading(true);
      }, 100);
    }
  }

  function onRouteChangeCompleted() {
    onRouteChangeEnd();
  }

  function onRouteChangeError() {
    onRouteChangeEnd();
  }

  function onRouteChangeEnd() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    setLoading(false);
  }

  return loading;
}
