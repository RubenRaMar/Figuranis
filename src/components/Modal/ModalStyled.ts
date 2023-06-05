import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const ModalStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  z-index: 11;
  font-size: ${toRem(17)};
  min-width: 100vw;
  min-height: 100vh;
  background-color: #000000eb;
  position: fixed;

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    width: 259px;
    padding: 20px;
    border: 3px solid ${themeColors.secundary};
    border-radius: 9px;
    background-color: ${themeColors.dark};
    gap: 15px;

    &__closeButton {
      position: absolute;
      top: 11px;
      right: 11px;
      background-color: transparent;
      border: none;
    }
  }

  .error {
    border: 3px solid ${themeColors.error};
    background-color: #1a0000;
  }
`;

export default ModalStyled;
