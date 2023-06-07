import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const GeneralContainerStyled = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 22px 31px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-size: ${toRem(22)};
    width: 100vw;
    height: 93px;
    border-block: 1px solid ${themeColors.primary};
    margin-bottom: 31px;
  }
`;

export default GeneralContainerStyled;
