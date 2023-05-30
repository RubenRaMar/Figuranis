import {
  initialUserMock,
  userDataLoggedMock,
  userDataLoginMock,
} from "../../mocks/user/userMocks";
import { userLoginActionCreator, userReducer } from "./userSlice";

describe("Given a userLogin minireducer", () => {
  describe("When its invoked with the data of a user who is not logged in", () => {
    test("Then it should return a logged in user", () => {
      const loggedUser = userReducer(
        initialUserMock,
        userLoginActionCreator(userDataLoginMock)
      );

      expect(loggedUser).toStrictEqual(userDataLoggedMock);
    });
  });
});
