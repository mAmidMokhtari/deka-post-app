import { FC } from "react";

import { Link } from "react-router-dom";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
// mui
import {
  Breadcrumbs as MuiBreadcrumbs,
  CircularProgress,
  Typography,
} from "@mui/material";

import { useStyles } from "./style";

export interface IBreadcrumbsItems {
  href?: string;
  onClick?: () => void;
  title: string;
  isLoading?: boolean;
}
export interface IBreadcrumbs {
  items: IBreadcrumbsItems[];
}

export const Breadcrumbs: FC<IBreadcrumbs> = ({ items = [] }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <MuiBreadcrumbs
        separator={<NavigateBeforeIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {items.map((item, index) => {
          if (item.isLoading)
            return (
              <CircularProgress
                className={classes.loadingIcon}
                color="inherit"
              />
            );
          if (!item.href)
            return (
              <Typography key={item.title} color="text.primary">
                {item.title}
              </Typography>
            );
          else
            return (
              <Link
                key={item.title}
                // underline="hover"
                color="inherit"
                to={item.href || "#"}
                onClick={() => {
                  item.onClick && item.onClick();
                }}
              >
                {item.title}
              </Link>
            );
        })}
      </MuiBreadcrumbs>
    </div>
  );
};
