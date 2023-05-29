import styled from "styled-components";
import toRem from "../../styles/functions/toRem";

const NavegationMenuStyled = styled.nav`
  padding: ${toRem(22)};
  border-block: ${toRem(1)} solid ${(prop) => prop.theme.color.primary};

  .navbar {
    display: flex;
    justify-content: space-between;

    &_list_icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: ${toRem(18)};
      gap: ${toRem(8)};
    }
  }

  button {
    border: none;
    background-color: transparent;
  }
`;

export default NavegationMenuStyled;
