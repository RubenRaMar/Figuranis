import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import React from "react";
import "@fontsource/lexend";
import { theme } from "./styles/theme/theme.js";
import GlobalStyle from "./styles/GlobalStyle.js";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
