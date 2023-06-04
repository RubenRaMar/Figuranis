import { ReactElement } from "react";
import LoadingStyled from "./LoadingStyled";

const Loading = (): ReactElement => {
  return (
    <LoadingStyled>
      <img src="/images/loading.gif" alt="" />
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
