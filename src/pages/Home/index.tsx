import { FC, Suspense, useState } from "react";

import { Breadcrumbs, Loading } from "components";
// components
import Layout from "components/layouts/main";
import { Outlet } from "react-router-dom";

// mui
import { Card } from "@mui/material";

import Context, { IConfig } from "./context";
// locals
import { useStyles } from "./style";
import { useData } from "./useData";

const HomeLayout: FC = () => {
  const { classes } = useStyles();
  useData();

  const [config, setConfig] = useState<IConfig>({
    pageName: "",
    breadcrumbsItems: [],
  });

  const renderBreadcrumbs = () => {
    if (config.breadcrumbsItems.length)
      return (
        <div className={classes.container}>
          <Breadcrumbs items={config.breadcrumbsItems} />
        </div>
      );
  };

  return (
    <Context.Provider
      value={{
        config,
        setConfig,
      }}
    >
      <Layout>
        <Suspense
          fallback={
            <div className={classes.center}>
              <Loading />
            </div>
          }
        >
          <Card className={classes.header}>{renderBreadcrumbs()}</Card>
          <div className={classes.pageContainer}>
            <Outlet />
          </div>
        </Suspense>
      </Layout>
    </Context.Provider>
  );
};

export default HomeLayout;
