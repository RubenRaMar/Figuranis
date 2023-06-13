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

export const LazyAddFigurePage = lazy(
  () => import("../../pages/AddFigurePage/AddFigurePage")
);

export const LazyDetailsFigurePage = lazy(
  () => import("../../pages/DetailsFigurePage/DetailsFigurePage")
);

export const LazyUpdateFigurePage = lazy(
  () => import("../../pages/UpdateFigurePage/UpdateFigurePage")
);
