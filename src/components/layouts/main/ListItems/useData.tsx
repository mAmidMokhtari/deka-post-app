// constants
import {
  DASHBOARD_ROUTE,
  PROFILE_ROUTE,
  TODO_ROUTE,
  WEATHER_ROUTE,
} from "constants/routes";
import { useNavigate } from "react-router-dom";

import CloudIcon from "@mui/icons-material/Cloud";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

export const useData = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "dashboard",
      path: DASHBOARD_ROUTE,
      icon: <DashboardIcon />,
    },
    {
      name: "profile",
      path: PROFILE_ROUTE,
      icon: <PersonIcon />,
    },
    {
      name: "weather",
      path: WEATHER_ROUTE,
      icon: <CloudIcon />,
    },
    {
      name: "todo",
      path: TODO_ROUTE,
      icon: <PlaylistAddCheckIcon />,
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
