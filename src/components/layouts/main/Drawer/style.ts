import useTranslate from "hooks/useTranslate";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  const { language } = useTranslate();

  return {
    root: {},
    openRoot: {
      width: "240px",
      [theme.breakpoints.down("sm")]: { width: "100%" },
    },
    closeRoot: {
      width: "50px",
      [theme.breakpoints.down("sm")]: { width: "0" },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    logo: {
      width: "110px",
      margin: "0 auto",
    },
    paper: {
      position: "relative",
      whiteSpace: "nowrap",
    },
    openPaper: {
      overflowX: "auto",
      width: "240px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        opacity: 1,
        transition: theme.transitions.create("opacity", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    },
    closePaper: {
      overflowX: "hidden",
      [theme.breakpoints.down("sm")]: {
        width: "0%",
        opacity: 0,
        transition: theme.transitions.create("opacity", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    },
    toolbarMobile: {
      display: "none!important",
      [theme.breakpoints.down("sm")]: {
        display: "flex!important",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute!important" as any,
        top: "110px",
        right: "0",
        zIndex: theme.zIndex.tooltip,
        width: "100%",
        height: "30px!important",
        minHeight: "30px!important",
      },
    },
    toolbarMobileOpen: {
      display: "none!important",
      position: "absolute!important" as any,
    },
  };
});
