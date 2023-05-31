import React, { useState } from "react";
import LoginFormStyled from "./LoginFormStyled";
import { UserCredentialsStructure } from "../../types";

interface LoginFormProps {
  actionOnClick: (user: UserCredentialsStructure) => void;
}

const LoginForm = ({ actionOnClick }: LoginFormProps): React.ReactElement => {
  const initialUserCredentials = {
    username: "",
    password: "",
  };

  const [userCredentials, setUserCredentials] = useState(
    initialUserCredentials
  );

  const { username, password } = userCredentials;

  const isNotDisabled = username !== "" && password !== "";

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.id]: event.target.value,
    });
  };

  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    actionOnClick(userCredentials);
    setUserCredentials(initialUserCredentials);
  };

  return (
    <LoginFormStyled onSubmit={handleLoginSubmit}>
      <h2>
        Welcome to,
        <br /> <span>FIGURAniS</span>
      </h2>
      <span>
        Log in to your account to
        <br /> access your figures
      </span>

      <input
        aria-label="username"
        type="text"
        id="username"
        autoComplete="off"
        placeholder="Username"
        onChange={onChangeUserData}
        value={username}
      />

      <input
        aria-label="password"
        type="password"
        id="password"
        autoComplete="off"
        placeholder="Password"
        onChange={onChangeUserData}
        value={password}
      />

      <button className="login" type="submit" disabled={!isNotDisabled}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
