import styled from "styled-components";
import { themeColors } from "../../styles/theme/theme";
import toRem from "../../styles/functions/toRem";

const FigureCardStyled = styled.li`
  .figure,
  .figure--pending {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${themeColors.dark};
    border-radius: 18px;
    padding-bottom: 15px;
    box-shadow: 0px 0px 8px 1px rgba(11, 253, 180, 0.3);

    &--pending {
      box-shadow: 0px 0px 8px 1px rgba(224, 115, 14, 0.3);
    }

    &__image {
      width: 277px;
      border-radius: 18px 18px 0 0;
      height: 292px;
      object-fit: cover;
    }

    &__data {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      gap: 15px;

      &__purchased,
      &__pending {
        font-size: ${toRem(23)};
        font-family: lora;
        font-weight: bold;
        height: 46px;
        display: flex;
        align-items: center;
        border-block: 1px solid ${themeColors.secundary};
        color: ${themeColors.secundary};
        width: 100%;
        justify-content: center;
        text-transform: uppercase;
        letter-spacing: 3px;
      }

      &__purchased {
        border-block: 1px solid ${themeColors.secundary};
        color: ${themeColors.secundary};
      }

      &__pending {
        border-block: 1px solid ${themeColors.pending};
        color: ${themeColors.pending};
      }

      &__franchise {
        font-size: ${toRem(16)};
        font-weight: bold;
        text-transform: uppercase;
        color: ${themeColors.lightGrey};
      }

      &__title {
        width: 237px;
        text-align: center;
        font-size: ${toRem(19)};
      }

      &__price {
        border: 2px solid rgb(57, 57, 57);
        padding: 4px 18px;
        font-size: 23px;
        font-weight: bold;
        border-radius: 8px;
        max-width: 200px;
        overflow: auto;
        margin: 4px;
      }
    }
  }
`;

export default FigureCardStyled;
