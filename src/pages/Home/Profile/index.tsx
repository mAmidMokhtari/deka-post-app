import React from "react";

import useTranslate from "hooks/useTranslate";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";

const Profile = () => {
  const { handleChangeLanguage } = useTranslate();
  const { t } = useTranslation();
  return (
    <div>
      <Button
        onClick={() => {
          handleChangeLanguage("en");
        }}
      >
        {t("mainLayout.profile.english")}
      </Button>
      <Button
        onClick={() => {
          handleChangeLanguage("fa");
        }}
      >
        {t("mainLayout.profile.farsi")}
      </Button>
    </div>
  );
};

export default Profile;
