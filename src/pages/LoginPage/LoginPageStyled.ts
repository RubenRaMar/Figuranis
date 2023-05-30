import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${(prop) => prop.theme.color.primary};
  h1 {
    font-size: ${toRem(22)};
    padding: 31px;
  }
`;

export default LoginPageStyled;
