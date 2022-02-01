export enum Screen {
  smallScreenPortrait = "(max-width: 1200px) and (orientation: portrait)",
  smallScreenLandscape = "(max-width: 1200px) and (orientation: landscape)",
  bigScreen = "(min-width: 1200px)",
}

export namespace Screen {
  function match(screen: Screen): boolean {
    return window.matchMedia(screen).matches;
  }

  export function current() {
    if (typeof window === "undefined") return Screen.smallScreenPortrait;

    if (match(Screen.smallScreenPortrait)) {
      return Screen.smallScreenPortrait;
    } else if (match(Screen.smallScreenLandscape)) {
      return Screen.smallScreenLandscape;
    } else {
      return Screen.bigScreen;
    }
  }
}
