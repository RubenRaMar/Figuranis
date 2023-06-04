import React from "react";
import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <img
        src="/images/loading.gif"
        alt="Goku playing the dragon balls"
        width="220"
        height="286"
      />
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
