import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import { LazyLoginPage } from "./lazyPages/lazyPages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/user/login"} replace /> },
      { path: "/user/login", element: <LazyLoginPage /> },
      { path: "/figures", element: <LazyLoginPage /> },
      { path: "/addFigures", element: <LazyLoginPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
