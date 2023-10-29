import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
      width: "80%",
      alignItems: "center",
      flexDirection: "column",
      gap: theme.spacing(1),
      height: "60vh",
      margin: "auto",
      border: "1px solid",
      borderRadius: "8px",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
      gap: theme.spacing(1),
      width: "100%",
    },
    title: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(1),
      borderBottom: "1px solid",
      width: "100%",
      "& svg": {
        width: "1.7rem",
        height: "1.7rem",
        cursor: "pointer",
      },
    },
    item: {
      width: "90%",
      padding: theme.spacing(1),
      borderBottom: "1px solid #ccc",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "4px",
    },
    actions: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(1),
    },
    input: {
      width: "90%",
    },
  };
});
