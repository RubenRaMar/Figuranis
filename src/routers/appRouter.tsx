import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { LazyFiguresPage, LazyLoginPage } from "./lazyPages/lazyPages";
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
        path: `${pathList.addFigures}`,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
