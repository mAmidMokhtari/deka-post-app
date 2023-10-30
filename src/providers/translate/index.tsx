import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import Context from "./context";

const TranslateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<"fa" | "en">("en");

  const handleChangeLanguage = (language: "fa" | "en") => {
    setLanguage(language);
    i18n.changeLanguage(language);
    document.dir = language === "fa" ? "rtl" : "ltr";
    document.body.dataset.sidebarPosition =
      language === "fa" ? "right" : "left";
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const parsedUserData = userData && JSON.parse(userData);

    parsedUserData && handleChangeLanguage(parsedUserData.language);
  }, []);

  return (
    <Context.Provider value={{ language, handleChangeLanguage }}>
      {children}
    </Context.Provider>
  );
};

export default TranslateProvider;
