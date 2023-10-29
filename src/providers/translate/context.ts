import { createContext } from 'react';

export interface ITranslateRouteContext {
  language: "fa" | "en";
  handleChangeLanguage: (language: "fa" | "en") => void;
}

export default createContext<ITranslateRouteContext>({
  language: "en",
  handleChangeLanguage: () => {},
});
