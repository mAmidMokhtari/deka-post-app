import "./core/i18n";

import { Suspense } from "react";

import { Loading } from "components";
import ApiProvider from "providers/api";
import TextProvider from "providers/text";
import ThemeProvider from "providers/theme";
import TranslateProvider from "providers/translate";
import UserProvider from "providers/user";
import Router from "routers";

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loading />}>
        <ApiProvider>
          <TextProvider>
            <UserProvider>
              <TranslateProvider>
                <Router />
              </TranslateProvider>
            </UserProvider>
          </TextProvider>
        </ApiProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
