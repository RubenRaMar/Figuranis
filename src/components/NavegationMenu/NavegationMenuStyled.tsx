import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const NavegationMenuStyled = styled.nav`
  padding: 22px;
  border-block: 1px solid ${(prop) => prop.theme.color.primary};

  .navbar {
    &__list {
      display: flex;
      justify-content: space-between;
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
`;

export default NavegationMenuStyled;
