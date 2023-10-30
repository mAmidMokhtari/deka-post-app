import { useEffect } from "react";

import { PROFILE_ROUTE } from "constants/routes";
import useMainLayout from "hooks/useMainLayout";
import useTheme from "hooks/useTheme";
import useTranslate from "hooks/useTranslate";
import useUser from "hooks/useUser";
import { useTranslation } from "react-i18next";

import { SelectChangeEvent } from "@mui/material/Select";

export const useData = () => {
  const { setConfig } = useMainLayout();
  const { t } = useTranslation();
  const { handleChangeLanguage, language } = useTranslate();
  const { handleChangeTheme, theme } = useTheme();
  const { username } = useUser();

  const handleLanguage = (event: SelectChangeEvent<string>) => {
    handleChangeLanguage(event.target.value as "en" | "fa");
  };
  const handleTheme = (event: SelectChangeEvent<string>) => {
    handleChangeTheme(event.target.value as "light" | "dark");
  };

  const saveChangeHandler = () => {
    const userData = {
      language,
      theme,
      username,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  useEffect(() => {
    setConfig({
      pageName: PROFILE_ROUTE,
      breadcrumbsItems: [
        {
          title: t("mainLayout.sidebar.profile"),
        },
      ],
    });
  }, [language]);

  return {
    language,
    theme,
    handleLanguage,
    handleTheme,
    saveChangeHandler,
  };
};
