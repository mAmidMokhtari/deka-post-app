import React from "react";

import { Loading } from "components";
import { useTranslation } from "react-i18next";

import { Card, TextField, Typography } from "@mui/material";

import { useStyles } from "./style";
import { useData } from "./useData";

const Weather = () => {
  const data = useData();
  const { t } = useTranslation();
  const { classes } = useStyles();

  if (data.isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.wrapper}>
      <Card>
        <div className={classes.root}>
          <TextField
            label={t("mainLayout.weather.city")}
            value={data.enterCity}
            onChange={(e) => data.setEnterCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && data.setCity(data.enterCity)}
          />
          {data.weatherCity && data.city && (
            <div className={classes.container}>
              <Typography variant="h3">{data.city}</Typography>
              <Typography variant="h4">
                {data.weatherCity && Math.trunc(data.weatherCity?.main.temp)} °C
              </Typography>
              <Typography variant="h4">
                {data.weatherCity?.weather[0].description}
              </Typography>
            </div>
          )}
          {!data.city && (
            <Typography variant="h5" color="error" textAlign="center">
              Please Enter city
            </Typography>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Weather;
