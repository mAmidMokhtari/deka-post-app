import { alpha } from "@mui/material/styles";
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
      "&::-webkit-scrollbar-thumb": {
        background: theme.palette.grey[300],
        borderRadius: "3px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: alpha(theme.palette.primary.main, 0.5),
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
    textarea: {
      "&::-webkit-input-placeholder": { color: theme.palette.text.disabled },
      "&::-moz-placeholder": { opacity: 1, color: theme.palette.text.disabled },
      "&:-ms-input-placeholder": { color: theme.palette.text.disabled },
      "&::placeholder": { color: theme.palette.text.disabled },
    },
    a: { color: theme.palette.primary.main },
    img: { display: "block", maxWidth: "100%" },

    // Lazy Load Img
    ".blur-up": {
      WebkitFilter: "blur(5px)",
      filter: "blur(5px)",
      transition: "filter 400ms, -webkit-filter 400ms",
    },
    ".blur-up.lazyloaded ": {
      WebkitFilter: "blur(0)",
      filter: "blur(0)",
    },
    mark: {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
  },
}))(() => null);

export default GlobalStyles;
