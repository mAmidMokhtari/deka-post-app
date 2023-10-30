import { useEffect, useState } from "react";

import { WEATHER_ROUTE } from "constants/routes";
import useMainLayout from "hooks/useMainLayout";
import { getWeather } from "providers/api/http";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

interface IWeather {
  main: { temp: number };
  weather: { description: string }[];
}

export const useData = () => {
  const { setConfig } = useMainLayout();
  const { t } = useTranslation();

  const [enterCity, setEnterCity] = useState("Tehran");
  const [city, setCity] = useState("Tehran");

  const navigate = useNavigate();

  const {
    data: weatherCity,
    isLoading,
    isError,
    error,
  } = useQuery<IWeather, Error>(
    ["weather", city],
    async () => await getWeather(city),
    {
      enabled: city.length > 0,
    }
  );

  if (isError && error.message.includes("404")) {
    navigate("/not-found");
  }

  useEffect(() => {
    setConfig({
      pageName: WEATHER_ROUTE,
      breadcrumbsItems: [
        {
          title: t("mainLayout.sidebar.weather"),
        },
      ],
    });
  }, []);

  return { isLoading, enterCity, setCity, weatherCity, setEnterCity, city };
};
