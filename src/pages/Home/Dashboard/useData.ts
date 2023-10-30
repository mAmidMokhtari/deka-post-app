import { useEffect } from "react";

import { DASHBOARD_ROUTE } from "constants/routes";
import useMainLayout from "hooks/useMainLayout";
import useUser from "hooks/useUser";
import { useTranslation } from "react-i18next";

export const useData = () => {
  const { username } = useUser();
  const { setConfig } = useMainLayout();
  const currentDate = new Date();
  const { t } = useTranslation();

  const displayTime = () => {
    return `${String(currentDate.getHours()).padStart(2, "0")}:${String(
      currentDate.getMinutes()
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    setConfig({
      pageName: DASHBOARD_ROUTE,
      breadcrumbsItems: [
        {
          title: t("mainLayout.sidebar.dashboard"),
        },
      ],
    });
  }, []);

  return { displayTime, username };
};
