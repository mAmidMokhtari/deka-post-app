import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      minHeight: '100vh',
    },
    logo: {
      width: "120px",
      marginBottom: theme.spacing(2),
    },
    title: {
      letterSpacing: 40,
      '& span': {
        fontSize: 110,
      },
    },
    zeroNumber: {
      color: theme.palette.info.main,
    },
    link: {
      display: 'inline-block',
      marginTop: theme.spacing(3),
      '& p': {
        fontWeight: 400,
      }
    },
  };
});
