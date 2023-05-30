import {
  UserCredentialsStructure,
  UserLoggedStructured,
  UserTokenStructure,
} from "../../types";

export const userMockCredentials: UserCredentialsStructure = {
  username: "Xavi",
  password: "champion",
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
  token: "$2y$10$ZjvNKsgp65c00/qWQhm2EuCXxnQ2QtAKPJDeZOGAlXIOZ6jrmxKXG",
};

export const userDataLoggedMock: UserLoggedStructured = {
  ...userDataLoginMock,
  isLogged: true,
};
