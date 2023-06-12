import styled from "styled-components";
import toRem from "../../styles/functions/toRem";
import { themeColors } from "../../styles/theme/theme";

const NavegationMenuStyled = styled.nav`
  padding: 22px;
  height: 142px;
  border-top: 1px solid rgb(36, 172, 240);
  background-color: rgb(13, 13, 13);
  display: flex;
  justify-content: center;

  .navbar {
    &__list {
      display: flex;
      justify-content: space-between;
      width: 275px;
    }

    &__icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${toRem(18)};
      gap: 8px;
    }
  }

  button {
    border: none;
    background-color: transparent;
  }

  .active {
    color: ${themeColors.primary};
  }

  .pending {
    color: #e0730e;
  }

  @media (min-width: 650px) {
    .navbar {
      &__list {
        width: 615px;
      }
    }
  }

  @media (min-width: 1000px) {
    .navbar {
      &__list {
        width: 950px;
      }
    }
  }

  @media (min-width: 1314px) {
    .navbar {
      &__list {
        width: 1270px;
      }
    }
  }
`;

export default NavegationMenuStyled;
