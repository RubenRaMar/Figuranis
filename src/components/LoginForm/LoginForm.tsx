import React from "react";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = (): React.ReactElement => {
  return (
    <LoginFormStyled>
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
      />

      <input
        aria-label="password"
        type="password"
        id="password"
        autoComplete="off"
        placeholder="Password"
      />

      <button className="login" type="submit">
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
