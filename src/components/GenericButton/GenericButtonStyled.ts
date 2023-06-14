import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const GenericButtonStyled = styled.button`
  width: 100%;
  height: 48px;
  font-weight: 700;
  background: ${themeColors.dark};
  border-radius: 10px;
  font-size: ${toRem(18)};
  text-transform: uppercase;

  &.add,
  &.modify {
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

  &.delete-card {
    border: 2px solid ${themeColors.error};
    box-shadow: 0px 1px 8px 0px #c80c0cb3;
    position: relative;
    bottom: 69px;
    width: 237px;
  }

  &.previous {
    border: 2px solid ${themeColors.primary};
    color: ${themeColors.primary};
    box-shadow: 0px 1px 8px 0px #24acf070;
    text-transform: none;
    &--disabled {
      text-transform: none;
      border: 1px solid #00a9ff;
      background-color: ${themeColors.dark};
      color: #00a9ff;
    }
  }

  &.next {
    border: 2px solid ${themeColors.secundary};
    color: ${themeColors.secundary};
    box-shadow: 0px 1px 8px 0px #0bfdb442;
    text-transform: none;
    &--disabled {
      text-transform: none;
      border: 1px solid #0bfdb4b3;
      background-color: ${themeColors.dark};
      color: #0bfdb4b3;
    }
  }
`;

export default GenericButtonStyled;
