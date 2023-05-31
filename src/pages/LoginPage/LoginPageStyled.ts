import styled from "styled-components";
import { themeColors } from "../../styles/theme/theme";

const LoginPageStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid ${themeColors.primary};
`;

export default LoginPageStyled;
