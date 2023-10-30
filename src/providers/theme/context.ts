import { createContext } from "react";

export interface IThemeRouteContext {
  theme: "light" | "dark";
  handleChangeTheme: (theme: "light" | "dark") => void;
}

export default createContext<IThemeRouteContext>({
  theme: "light",
  handleChangeTheme: () => {},
});
