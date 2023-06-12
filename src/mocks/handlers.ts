import { rest } from "msw";
import { figuresMock } from "./figures/figures";
import { userTokenMock } from "./user/userMocks";
import { modalsMessage } from "../utils/modalsMessage/modalsMessage";
import pathList from "../utils/pathList/pathList";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${pathList.user}${pathList.login}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: userTokenMock }));
  }),

  rest.get(`${apiUrl}${pathList.figures}`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ figures: figuresMock }));
  }),

  rest.get(`${apiUrl}${pathList.figures}/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ figure: [figuresMock[0]] }));
  }),

  rest.delete(
    `${apiUrl}${pathList.figures}${pathList.delete}/:id`,
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ message: modalsMessage.removeCorrect })
      );
    }
  ),

  rest.post(
    `${apiUrl}${pathList.figures}${pathList.addFigure}`,
    (req, res, ctx) => {
      req.bodyUsed;

      return res(ctx.status(201), ctx.json({ figure: figuresMock }));
    }
  ),
];

export const errorHandlers = [
  rest.get(`${apiUrl}${pathList.figures}`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(
    `${apiUrl}${pathList.figures}${pathList.delete}/:id`,
    (_req, res, ctx) => {
      return res(ctx.status(404));
    }
  ),

  rest.post(
    `${apiUrl}${pathList.figures}${pathList.addFigure}`,
    (_req, res, ctx) => {
      return res(ctx.status(400));
    }
  ),

  rest.get(`${apiUrl}${pathList.figures}/:id`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
