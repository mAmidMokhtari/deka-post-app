import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      display: "flex",
    },
    container: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    wellcome: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      "& svg": {
        transform: "scaleX(-1)",
      },
    },
  };
});
