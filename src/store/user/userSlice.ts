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
  },
});

export const { userLogin: userLoginActionCreator } = userSlice.actions;

export const userReducer = userSlice.reducer;
