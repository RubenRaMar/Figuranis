import { lazy } from "react";

export const LazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);

export const LazyFiguresPage = lazy(
  () => import("../../pages/FiguresPage/FiguresPage")
);
export const LazyNotFoundError = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);
