import { rest } from "msw";
import { figuresMock } from "./figures/figuresMocks";
import { userTokenMock } from "./user/userMocks";
import { modalsMessage } from "../utils/modalsData/modalsData";
import pathList from "../utils/pathList/pathList";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${pathList.user}${pathList.login}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: userTokenMock }))
  ),

  rest.get(`${apiUrl}${pathList.figures}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ figures: figuresMock }))
  ),

  rest.get(`${apiUrl}${pathList.figures}/:id`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ figure: [figuresMock[0]] }))
  ),

  rest.put(`${apiUrl}${pathList.figures}`, (_req, res, ctx) =>
    res(ctx.status(200), ctx.json({ message: modalsMessage.modifyCorrect }))
  ),

  rest.delete(
    `${apiUrl}${pathList.figures}${pathList.delete}/:id`,
    (_req, res, ctx) =>
      res(ctx.status(201), ctx.json({ message: modalsMessage.removeCorrect }))
  ),

  rest.post(
    `${apiUrl}${pathList.figures}${pathList.addFigure}`,
    (_req, res, ctx) => res(ctx.status(201), ctx.json({ figure: figuresMock }))
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${pathList.figures}`, (_req, res, ctx) =>
    res(ctx.status(401))
  ),
  rest.delete(
    `${apiUrl}${pathList.figures}${pathList.delete}/:id`,
    (_req, res, ctx) => res(ctx.status(404))
  ),
  rest.post(
    `${apiUrl}${pathList.figures}${pathList.addFigure}`,
    (_req, res, ctx) => res(ctx.status(400))
  ),
  rest.get(`${apiUrl}${pathList.figures}/:id`, (_req, res, ctx) =>
    res(ctx.status(400))
  ),
];
