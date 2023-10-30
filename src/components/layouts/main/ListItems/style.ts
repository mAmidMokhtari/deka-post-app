import { makeStyles } from "tss-react/mui";

interface ITheme {
  isClose: boolean;
}

export const useStyles = makeStyles<ITheme>()((theme, { isClose }) => {
  return {
    root: {
      width: "240px",
      [theme.breakpoints.down("sm")]: { width: "100%" },
    },
    listItem: {
      cursor: "pointer",
    },
    logo: {
      width: "110px",
      margin: "10px auto",
    },
    menuLoadingContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    loadingIcon: {
      color: theme.palette.common.white,
    },
    itemIcon: {
      display: "flex",
      alignItems: "center",
      marginRight: isClose ? theme.spacing(0) : theme.spacing(1),
    },
    itemText: {
      maxWidth: "fit-content",
      display: isClose ? "none" : "block",
    },
  };
});
