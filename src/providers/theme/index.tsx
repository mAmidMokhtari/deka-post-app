import React, { FC, useEffect, useState } from "react";

import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import context from "./context";
import createEmotionCache from "./createEmotionCache";
import GlobalStyles from "./globalStyles";

// Create rtl cache
const cache = createEmotionCache();

function Provider(props: { children: React.ReactNode }) {
  return <CacheProvider value={cache}>{props.children}</CacheProvider>;
}

const ThemeProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleChangeTheme = (themeMode: "light" | "dark") => {
    setTheme(themeMode);
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const parsedUserData = userData && JSON.parse(userData);

    parsedUserData && handleChangeTheme(parsedUserData.theme);
  }, []);

  const muiTheme: any = theme === "dark" ? darkTheme : lightTheme;

  return (
    <context.Provider value={{ handleChangeTheme, theme }}>
      <Provider>
        <StyledEngineProvider injectFirst>
          <MuiThemeProvider theme={muiTheme}>
            <Provider>
              <CssBaseline />
              <GlobalStyles />
              {children}
            </Provider>
          </MuiThemeProvider>
        </StyledEngineProvider>
      </Provider>
    </context.Provider>
  );
};

export default ThemeProvider;
