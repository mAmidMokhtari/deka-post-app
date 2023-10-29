import { FC } from "react";

// constants
import { HOME_ROUTE } from "constants/routes";
import { useTranslation } from "react-i18next";
// hooks
import { Link } from "react-router-dom";

// mui
import { Grid, Typography } from "@mui/material";

import { useStyles } from "./style";

interface INotFoundProps {}

const NotFound: FC<INotFoundProps> = () => {
  const { t } = useTranslation();
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
          {t("mainLayout.notFound.notFound")}
        </Typography>

        <Link to={HOME_ROUTE} className={classes.link}>
          <Typography variant="h3" component="p">
            {t("mainLayout.notFound.returnText")}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default NotFound;
