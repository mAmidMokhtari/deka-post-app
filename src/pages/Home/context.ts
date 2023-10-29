// components
import { IBreadcrumbsItems } from "components";

import React, { createContext } from "react";

export interface IConfig {
  pageName: string;
  breadcrumbsItems: IBreadcrumbsItems[];
}
export interface IPublicRouteContext {
  config: IConfig;
  setConfig: React.Dispatch<React.SetStateAction<IConfig>>;
}

export default createContext<IPublicRouteContext>({
  config: {
    pageName: "",
    breadcrumbsItems: [],
  },
  setConfig: () => {},
});
