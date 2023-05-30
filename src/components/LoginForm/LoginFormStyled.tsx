import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const LoginFormStyled = styled.form`
  background-color: ${(props) => props.theme.color.dark};
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
    border: 1px solid ${(props) => props.theme.color.borderInputs};
    background-color: ${(props) => props.theme.color.mainBackground};
    color: ${(props) => props.theme.color.light};
  }

  button {
    height: 48px;
    width: 237px;
    border-radius: 10px;
    font-size: ${toRem(18)};
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid ${(props) => props.theme.color.primary};
    background-color: ${(props) => props.theme.color.dark};
    color: ${(props) => props.theme.color.primary};
  }
`;

export default LoginFormStyled;
