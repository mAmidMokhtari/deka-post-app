import React, { useState } from "react";

import { Loading } from "components";
import { useQuery } from "react-query";

import { Card, TextField, Typography } from "@mui/material";

import { useStyles } from "./style";
import { useData } from "./useData";

const Weather = () => {
  useData();
  const { classes } = useStyles();
  const [city, setCity] = useState("tehran");
  const { data, isLoading, isError } = useQuery(["weather", city], async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27a93eaa7de7f0c81455007507d6240b&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching weather data</div>;
  }

  return (
    <Card>
      <div className={classes.root}>
        <TextField
          label="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <div className={classes.container}>
          <Typography variant="h1">{city}</Typography>
          <Typography variant="h2">{data.main.temp} °C</Typography>
          <Typography variant="h2">{data.weather[0].description}</Typography>
        </div>
      </div>
    </Card>
  );
};

export default Weather;
