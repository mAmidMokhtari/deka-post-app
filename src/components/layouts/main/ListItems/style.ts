import { makeStyles } from 'tss-react/mui';

interface ITheme {
  isClose: boolean
}

export const useStyles = makeStyles<ITheme>()((theme, {isClose}) => {
  return {
    root: {
      color: theme.palette.common.black,
      width: "240px",
      [theme.breakpoints.down("sm")]: { width: "100%" },
      "& a.active": {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black + "!important",
        "& svg": {
          color: theme.palette.common.black + "!important",
          fill: theme.palette.common.black + "!important",
        },
      },
    },
    listItem: {
      color: theme.palette.common.white + "!important",
      cursor: "pointer",
      "& svg": {
        color: theme.palette.common.white + "!important",
        fill: theme.palette.common.white + "!important",
      },
    },
    listItemError: {
      backgroundColor: theme.palette.error.main + "!important",
      color: theme.palette.common.white + "!important",
      "& svg": {
        color: theme.palette.common.white + "!important",
        fill: theme.palette.common.white + "!important",
      },
    },
    listItemChildren: {
      color: theme.palette.common.white + "!important",
      marginRight: theme.spacing(1),
      "& svg": {
        color: theme.palette.common.white + "!important",
        fill: theme.palette.common.white + "!important",
      },
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
      color: theme.palette.common.white + "!important",
    },
    itemIcon: {
      display: "flex",
      alignItems: "center",
      marginRight: isClose ? theme.spacing(0) : theme.spacing(1),
    },
    itemText: {
      maxWidth: "fit-content",
      display: isClose ? "none" : "block"
    }
  };
});
