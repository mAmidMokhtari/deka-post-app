import { withStyles } from "@mui/styles";

// ----------------------------------------------------------------------

const GlobalStyles = withStyles((theme: any) => ({
  "@global": {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      scrollBehavior: "smooth",
      textAlign: "left",

      "&::-webkit-scrollbar": {
        width: "5px",
        height: "5px",
      },
      "&::-webkit-scrollbar-track": {
        background: "transparent",
      },
    },
    html: {
      width: "100%",
      height: "100%",
      "-ms-text-size-adjust": "100%",
      "-webkit-overflow-scrolling": "touch",
    },
    body: {
      width: "100%",
      height: "100%",
      // direction: 'rtl',
      overflowX: "hidden",
    },
    "#root": {
      width: "100%",
      height: "100%",
    },
    input: {
      "&[type=number]": {
        MozAppearance: "textfield",
        "&::-webkit-outer-spin-button": { margin: 0, WebkitAppearance: "none" },
        "&::-webkit-inner-spin-button": { margin: 0, WebkitAppearance: "none" },
      },
      "&:-webkit-autofill": {
        boxShadow: "0 0 0 30px white inset !important",
      },
    },
  },
}))(() => null);

export default GlobalStyles;
