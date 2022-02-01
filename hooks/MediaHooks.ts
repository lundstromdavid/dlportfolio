import { useEffect, useState } from "react";
import { Screen } from "../media/Screen";

export function useScreenSize(): Screen {
  const [screen, setScreen] = useState<Screen>(Screen.current());

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  });

  function onResize() {
    const current = Screen.current();
    if (screen !== current) {
      setScreen(current);
    }
  }

  return screen;
}
