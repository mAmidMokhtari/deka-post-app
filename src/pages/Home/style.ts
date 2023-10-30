import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    pageContainer: {
      padding: theme.spacing(1),
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(2),
    },
    leftContainer: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
    },
    center: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    header: {
      height: "90px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: `${theme.spacing(1)} !important`,
      padding: `${theme.spacing(2)} !important`,
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        height: "140px",
        paddingBottom: theme.spacing(5) + "!important",
        gap: theme.spacing(1),
      },
    },
    notificationIcon: {
      color: theme.palette.error.light,
      width: "23px!important",
      height: "23px!important",
    },
    personContainer: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(0.5),
      justifyContent: "center",
      alignItems: "center",
    },
    profileMenu: {
      position: "absolute!important" as any,
      top: "95px",
      left: "5px",
      padding: theme.spacing(1, 1.5),
      minWidth: "200px",
      maxWidth: "300px",
      marginRight: "auto",
      boxShadow: theme.shadows[24],
      border: `1px solid ${theme.palette.secondary.main}`,
      zIndex: theme.zIndex.tooltip + "!important",
      [theme.breakpoints.down("sm")]: { top: "140px" },
    },
    detail: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(0.5),
    },
    profileImage: {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: "5px",
    },
    detailsContainer: {
      borderBottom: `1px dashed ${theme.palette.secondary.main}`,
      paddingBottom: theme.spacing(1),
      paddingTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      position: "relative",
    },
    closeButton: {
      position: "absolute!important" as any,
      top: "-5px",
      right: "-10px",
      width: "20px",
      height: "20px",
    },
    closeIcon: {
      width: "18px!important",
      height: "18px!important",
    },
    avatar: {
      cursor: "pointer",
    },
  };
});
