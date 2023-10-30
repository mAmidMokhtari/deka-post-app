import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      width: "240px",
    },
    closeRoot: {
      width: "50px",
    },
    paper: {
      position: "relative",
      whiteSpace: "nowrap",
    },
    openPaper: {
      overflowX: "auto",
      width: "240px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    closePaper: {
      overflowX: "hidden",
      width: "50px",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  };
});
