// constants
import {
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  TODO_ROUTE,
  WEATHER_ROUTE,
} from "constants/routes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import CloudIcon from "@mui/icons-material/Cloud";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export const useData = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const menuItems = [
    {
      name: t("mainLayout.sidebar.dashboard"),
      path: DASHBOARD_ROUTE,
      icon: <DashboardIcon />,
    },
    {
      name: t("mainLayout.sidebar.todo"),
      path: TODO_ROUTE,
      icon: <PlaylistAddCheckIcon />,
    },
    {
      name: t("mainLayout.sidebar.weather"),
      path: WEATHER_ROUTE,
      icon: <CloudIcon />,
    },
    {
      name: t("mainLayout.sidebar.profile"),
      path: PROFILE_ROUTE,
      icon: <PersonIcon />,
    },
  ];

  const navigateToPage = (route: string) => {
    navigate(route);
  };

  return {
    menuItems,
    isLoading: false,
    navigateToPage,
  };
};
