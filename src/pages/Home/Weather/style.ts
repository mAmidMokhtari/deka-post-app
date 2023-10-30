import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    wrapper: {
      width: "70%",
      margin: "auto",
      paddingTop: 30,
    },
    root: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(1),
      margin: theme.spacing(1),
      gap: theme.spacing(5),
      height: "60vh",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(1),
      textTransform: "uppercase",
    },
  };
});
