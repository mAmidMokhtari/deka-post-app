import React from "react";

import { useTranslation } from "react-i18next";

import { Typography } from "@mui/material";

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography variant="h3" color="error.main">
        {t("mainLayout.dashboard.user")}
      </Typography>
    </div>
  );
};

export default Dashboard;
