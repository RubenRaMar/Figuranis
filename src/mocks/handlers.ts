import { rest } from "msw";
import { userMockCredentials, userTokenMock } from "./user/userMocks";
import { UserCredentialsStructure } from "../types";
import { figuresMock } from "./figures/figures";

const apiUrl = import.meta.env.VITE_API_URL;

interface CustomRequest {
  body: UserCredentialsStructure;
}

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (req: CustomRequest, res, ctx) => {
    return req.body.password === userMockCredentials.password &&
      req.body.username === userMockCredentials.username
      ? res(ctx.status(200), ctx.json({ token: userTokenMock }))
      : res(ctx.status(401), ctx.json({ message: "Wrong credentials" }));
  }),

  rest.get(`${apiUrl}/figures`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ figures: figuresMock }));
  }),
];

export const errorHandlers = [
  rest.get(`${apiUrl}/figures`, (_req, res, ctx) => {
    const invalidAuthorization = "Invalid totoken";

    ctx.set(`Authorization`, invalidAuthorization);
    return res(ctx.status(401));
  }),
];
