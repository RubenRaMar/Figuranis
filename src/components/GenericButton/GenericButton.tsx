import React from "react";
import GenericButtonStyled from "./GenericButtonStyled";

interface GenericButtonProps {
  actionOnClick: () => void;
  text: string;
  className: string;
}

const GenericButton = ({
  className,
  actionOnClick,
  text,
}: GenericButtonProps): React.ReactElement => {
  return (
    <GenericButtonStyled
      className={className}
      onClick={actionOnClick}
      aria-label={className}
    >
      {text}
    </GenericButtonStyled>
  );
};

export default GenericButton;
