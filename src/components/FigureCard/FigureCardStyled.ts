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
    position: relative;
    box-shadow: 0px 0px 8px 1px rgba(11, 253, 180, 0.3);

    &--pending {
      box-shadow: 0px 0px 8px 1px rgba(224, 115, 14, 0.3);
    }

    &__image {
      border-radius: 18px 18px 0 0;
      object-fit: cover;
    }

    &__data {
      display: flex;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      gap: 15px;
      padding-block: 15px;

      &__purchased,
      &__pending {
        font-size: ${toRem(23)};
        font-family: lora;
        font-weight: bold;
        height: 46px;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        position: absolute;
        top: 336px;
        background-color: ${themeColors.dark};
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
        text-align: center;
        max-width: 237px;
        overflow: auto;
      }

      &__title {
        max-width: 237px;
        text-align: center;
        font-size: ${toRem(19)};
        overflow: auto;
      }

      &__price {
        border: 2px solid rgb(57, 57, 57);
        padding: 4px 18px;
        font-size: 23px;
        font-weight: bold;
        border-radius: 8px;
        max-width: 200px;
        text-align: center;
        overflow: auto;
        margin: 4px;
      }
    }
  }
`;

export default FigureCardStyled;
