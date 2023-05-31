import {
  UserCredentialsStructure,
  UserLoggedStructured,
  UserTokenStructure,
} from "../../types";

export const userMockCredentials: UserCredentialsStructure = {
  username: "Xavi",
  password: "xavi123",
};

export const userMockIncorrectCredentials: UserCredentialsStructure = {
  username: "Xavi",
  password: "papi123",
};

export const initialUserMock: UserLoggedStructured = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const userDataLoginMock: UserTokenStructure = {
  id: "123456",
  username: "Xavi",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYifQ.TLrOsSPaTcczzGH097NbtBvcPtZULz3PIBXS_RorIug",
};

export const userDataLoggedMock: UserLoggedStructured = {
  ...userDataLoginMock,
  isLogged: true,
};

export const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTYifQ.TLrOsSPaTcczzGH097NbtBvcPtZULz3PIBXS_RorIug";
