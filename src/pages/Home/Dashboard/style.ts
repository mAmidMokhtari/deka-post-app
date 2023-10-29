import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      flexDirection: "column",
      gap: theme.spacing(5),
      height: "60vh",
    },
    userContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(1),
    },
  };
});
