import React, { useMemo } from "react";
import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  const LoadingPrefersReducedMotion = useMemo(
    () => (
      <picture>
        <source
          srcSet="/images/loadingimg.svg"
          media="(prefers-reduced-motion: reduce)"
        />
        <img
          src="/images/loading.gif"
          alt="Goku playing with the dragon balls"
        />
      </picture>
    ),
    []
  );

  return (
    <LoadingStyled>
      {LoadingPrefersReducedMotion}
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
