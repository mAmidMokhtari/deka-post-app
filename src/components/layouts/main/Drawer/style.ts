import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      "& a": {
        color: theme.palette.common.white,
        "&.active": {
          backgroundColor: theme.palette.common.white,
          color: theme.palette.secondary.main,
        },
      },
    },
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
      backgroundColor: theme.palette.primary.light + "!important",
      color: theme.palette.common.white,
    },
    openPaper: {
      overflowX: "auto",
      width: "240px",
      // transition:
      //   theme.transitions.create("width", {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.enteringScreen,
      //   }) + "!important",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        opacity: 1,
        transition:
          theme.transitions.create("opacity", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }) + "!important",
      },
    },
    closePaper: {
      overflowX: "hidden",
      width: "50px",
      // transition:
      //   theme.transitions.create("width", {
      //     easing: theme.transitions.easing.sharp,
      //     duration: theme.transitions.duration.leavingScreen,
      //   }) + "!important",
      [theme.breakpoints.down("sm")]: {
        width: "0%",
        opacity: 0,
        transition:
          theme.transitions.create("opacity", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }) + "!important",
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
        backgroundColor: theme.palette.secondary.main,
      },
    },
    toolbarMobileOpen: {
      display: "none!important",
      position: "absolute!important" as any,
    },
  };
});
