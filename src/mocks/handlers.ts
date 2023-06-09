import { rest } from "msw";
import { figuresMock } from "./figures/figures";
import { userTokenMock } from "./user/userMocks";
import { modalsMessage } from "../utils/modalsMessage/modalsMessage";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: userTokenMock }));
  }),

  rest.get(`${apiUrl}/figures`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ figures: figuresMock }));
  }),

  rest.delete(`${apiUrl}/figures/delete/:id`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ message: modalsMessage.removeCorrect })
    );
  }),

  rest.post(`${apiUrl}/figures/add`, (req, res, ctx) => {
    req.bodyUsed;

    return res(ctx.status(201), ctx.json({ figures: figuresMock }));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}/figures`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}/figures/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),

  rest.post(`${apiUrl}/figures/add`, (_req, res, ctx) => {
    return res(ctx.status(400));
  }),
];
