import { useEffect, useState } from "react";
import { Screen } from "../media/Screen";

export function useScreenSize(): Screen {
  const [screen, setScreen] = useState<Screen>(Screen.current());

  console.log("useScreenSize()");

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  });

  function onResize() {
    const current = Screen.current();
    console.log("onResize");
    if (screen !== current) {
      console.log("Updating screen to: " + current);
      setScreen(current);
    }
  }

  return screen;
}
