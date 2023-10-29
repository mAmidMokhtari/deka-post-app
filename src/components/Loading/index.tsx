import CircularProgress from "@mui/material/CircularProgress";

import { useStyles } from "./style";

interface ILoadingProps {}

export const Loading: React.FC<ILoadingProps> = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loadingContainer}>
      <CircularProgress />
    </div>
  );
};
