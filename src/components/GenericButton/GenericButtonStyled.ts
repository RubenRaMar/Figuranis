import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const GenericButtonStyled = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 700;
  background: #000000;
  border: 2px solid ${themeColors.error};
  border-radius: 10px;
  font-size: ${toRem(18)};
  text-transform: uppercase;
  box-shadow: 0px 1px 8px 0px #c80c0cb3;

  &.add {
    border: 2px solid ${themeColors.primary};
    color: ${themeColors.primary};
    box-shadow: 0px 1px 8px 0px #24acf070;
  }
`;

export default GenericButtonStyled;
