import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
  return {
    loadingContainer: {
      margin: theme.spacing(2,'auto', 1),
      width: '100%',
      '& > span': {
        margin: 'auto',
        display: 'block',
      }
    },
  };
});
