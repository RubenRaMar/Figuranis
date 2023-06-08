import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const GenericButtonStyled = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 700;
  background: #000000;
  border-radius: 10px;
  font-size: ${toRem(18)};
  text-transform: uppercase;

  &.add {
    border: 2px solid ${themeColors.primary};
    color: ${themeColors.primary};
    box-shadow: 0px 1px 8px 0px #24acf070;

    &--disabled {
      border: 1px solid #0084c7;
      background-color: ${themeColors.dark};
      color: #0084c7;
    }
  }

  &.delete {
    border: 2px solid ${themeColors.error};
    box-shadow: 0px 1px 8px 0px #c80c0cb3;
  }
`;

export default GenericButtonStyled;
