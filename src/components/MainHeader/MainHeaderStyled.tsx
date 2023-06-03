import styled from "styled-components";

const MainHeaderStyled = styled.header`
  display: flex;
  background-image: url(/images/background.webp);
  background-position: center top;
  background-size: initial;
  flex-direction: column;

  .top-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 213px;
  }

  .logout-login {
    position: absolute;
    right: 22px;
    top: 22px;
    background-color: transparent;
    border: transparent;
    padding: 0;
  }
`;

export default MainHeaderStyled;
