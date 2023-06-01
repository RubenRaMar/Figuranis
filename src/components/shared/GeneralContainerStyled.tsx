import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const GeneralContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 22px 31px;

  h1 {
    font-size: ${toRem(22)};
    width: 100vw;
    padding: 31px;
    border-block: 1px solid ${themeColors.primary};
    text-align: center;
    margin-bottom: 31px;
  }
`;

export default GeneralContainerStyled;
