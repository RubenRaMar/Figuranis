import React from "react";
import GenericButtonStyled from "./GenericButtonStyled";

interface GenericButtonProps {
  actionOnClick?: () => void;
  text: string;
  className: string;
  isDisabled: boolean;
}

const GenericButton = ({
  className,
  actionOnClick,
  text,
  isDisabled,
}: GenericButtonProps): React.ReactElement => {
  return (
    <GenericButtonStyled
      disabled={isDisabled}
      className={isDisabled ? `${className}--disabled` : className}
      onClick={actionOnClick}
      aria-label={className}
      type="submit"
    >
      {text}
    </GenericButtonStyled>
  );
};

export default GenericButton;
