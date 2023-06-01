import { rest } from "msw";
import { userMockCredentials, userTokenMock } from "./user/userMocks";
import { UserCredentialsStructure } from "../types";

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
];
