import styled from "styled-components";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid ${(prop) => prop.theme.color.primary};
`;

export default LoginPageStyled;
