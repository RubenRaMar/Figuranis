import styled from "styled-components";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${(prop) => prop.theme.color.primary};
`;

export default LoginPageStyled;
