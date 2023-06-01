import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserLoggedStructured, UserTokenStructure } from "../../types";

const initialUserState: UserLoggedStructured = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    userLogin: (
      _currentUserState,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),

    userLogout: (currentUserState) => ({
      ...currentUserState,
      ...initialUserState,
    }),
  },
});

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
