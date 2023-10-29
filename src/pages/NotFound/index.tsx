import { FC } from "react";

// constants
import { HOME_ROUTE } from "constants/routes";
// hooks
import useText from "hooks/useText";
import { Link } from "react-router-dom";

// mui
import { Grid, Typography } from "@mui/material";

import { useStyles } from "./style";
import { texts } from "./texts";

interface INotFoundProps {}

const NotFound: FC<INotFoundProps> = () => {
  const { TX } = useText();
  const { classes } = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.container}
    >
      <Grid item className={classes.title}>
        <Typography variant="h1" component="span">
          4
        </Typography>
        <Typography
          variant="h1"
          component="span"
          className={classes.zeroNumber}
        >
          0
        </Typography>
        <Typography variant="h1" component="span">
          4
        </Typography>
      </Grid>

      <Grid item textAlign="center">
        <Typography variant="h1" component="p">
          {TX(texts.notFound)}
        </Typography>

        <Link to={HOME_ROUTE} className={classes.link}>
          <Typography variant="h3" component="p">
            {TX(texts.returnText)}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default NotFound;
