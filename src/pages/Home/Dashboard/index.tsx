import React from "react";

import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

import { useStyles } from "./style";
import { useData } from "./useData";

const Dashboard = () => {
  const { t } = useTranslation();
  const data = useData();
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" color="common.black">
        {data.displayTime()}
      </Typography>
      <div className={classes.userContainer}>
        <Typography variant="h2" color="common.black">
          {t("mainLayout.dashboard.good morning")}
        </Typography>
        <Typography variant="h2" color="common.black">
          {data.username}
        </Typography>
      </div>
    </div>
  );
};

export default Dashboard;
