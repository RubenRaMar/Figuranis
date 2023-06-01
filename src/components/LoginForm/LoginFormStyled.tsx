import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const LoginFormStyled = styled.form`
  background-color: ${themeColors.dark};
  display: flex;
  flex-direction: column;
  font-size: ${toRem(16)};
  padding: 30px 20px;
  border-radius: 16px;
  gap: 27px;
  box-shadow: 0px 0px 8px 1px rgba(11, 253, 180, 0.3);

  h2 {
    font-size: ${toRem(24)};
    line-height: ${toRem(32)};
    font-weight: 100;
    span {
      font-weight: bold;
    }
  }

  input {
    height: 48px;
    width: 237px;
    padding-left: 12px;
    border-radius: 4px;
    font-size: ${toRem(16)};
    border: 1px solid ${themeColors.borderInputs};
    background-color: ${themeColors.mainBackground};
    color: ${themeColors.light};
  }

  input::placeholder {
    color: ${themeColors.placeholder};
  }

  input:focus-visible {
    outline: #24acf0 2px;
    outline-style: inset;
  }

  .login {
    height: 48px;
    width: 237px;
    border-radius: 10px;
    font-size: ${toRem(18)};
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid ${themeColors.primary};
    background-color: ${themeColors.dark};
    color: ${themeColors.primary};

    &--disabled {
      height: 48px;
      width: 237px;
      border-radius: 10px;
      font-size: ${toRem(18)};
      text-transform: uppercase;
      font-weight: bold;
      border: 1px solid #0a374e;
      background-color: ${themeColors.dark};
      color: #0a374e;
    }
  }
`;

export default LoginFormStyled;
