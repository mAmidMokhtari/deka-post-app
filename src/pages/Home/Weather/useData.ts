import { useLayoutEffect } from "react";

import { WEATHER_ROUTE } from "constants/routes";
import useMainLayout from "hooks/useMainLayout";
import { useTranslation } from "react-i18next";

export const useData = () => {
  const { setConfig } = useMainLayout();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    setConfig({
      pageName: WEATHER_ROUTE,
      breadcrumbsItems: [
        {
          title: t("mainLayout.sidebar.weather"),
        },
      ],
    });
  }, []);

  return {};
};
