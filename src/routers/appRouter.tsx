import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import {
  LazyAddFigurePage,
  LazyDetailsFigurePage,
  LazyFiguresPage,
  LazyLoginPage,
  LazyNotFoundError,
  LazyUpdateFigurePage,
} from "./lazyPages/lazyPages";
import { Suspense } from "react";
import pathList from "../utils/pathList/pathList";

const routes: RouteObject[] = [
  {
    path: `${pathList.root}`,
    element: <App />,
    children: [
      { index: true, element: <Navigate to={`${pathList.figures}`} replace /> },
      {
        path: `${pathList.user}${pathList.login}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: `${pathList.figures}`,
        element: (
          <Suspense>
            <LazyFiguresPage />
          </Suspense>
        ),
      },
      {
        path: `${pathList.addFigure}`,
        element: (
          <Suspense>
            <LazyAddFigurePage />
          </Suspense>
        ),
      },
      {
        path: `${pathList.figures}${pathList.update}/:id`,
        element: (
          <Suspense>
            <LazyUpdateFigurePage />
          </Suspense>
        ),
      },
      {
        path: `${pathList.figures}${pathList.details}/:id`,
        element: (
          <Suspense>
            <LazyDetailsFigurePage />
          </Suspense>
        ),
      },
      {
        path: "/*",
        element: (
          <Suspense>
            <LazyNotFoundError />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
