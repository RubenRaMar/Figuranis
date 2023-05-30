import { lazy } from "react";

export const lazyLoginPage = lazy(
  () => import("../../pages/LoginPage/LoginPage")
);
