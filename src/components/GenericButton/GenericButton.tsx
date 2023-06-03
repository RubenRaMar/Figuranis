import React from "react";

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
    <button
      className={className}
      onClick={actionOnClick}
      aria-label={className}
    >
      {text}
    </button>
  );
};

export default GenericButton;
