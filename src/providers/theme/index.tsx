import React, { FC, useState } from "react";

import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

import breakpoints from "./breakpoints";
import createEmotionCache from "./createEmotionCache";
import GlobalStyles from "./globalStyles";
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";

// Create rtl cache
const cache = createEmotionCache();

function Provider(props: { children: React.ReactNode }) {
  return <CacheProvider value={cache}>{props.children}</CacheProvider>;
}

const ThemeProvider: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const lightTheme = createTheme({
    palette: palette.light,
    typography,
    shadows,
    breakpoints,
    // direction: "rtl",
    // @ts-ignore
    customShadows,
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [themeMode, setThemeMode] = useState("light");

  const handleThemeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setThemeMode(event.target.value as string);
  };

  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <Provider>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <Provider>
            <CssBaseline />
            <GlobalStyles />
            {children}
          </Provider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default ThemeProvider;
