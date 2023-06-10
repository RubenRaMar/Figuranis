import React from "react";
import GenericButton from "../GenericButton/GenericButton";

const Pagination = (): React.ReactElement => {
  return (
    <section>
      <span>10/50</span>

      <GenericButton
        className="previous"
        text="Previous"
        actionOnClick={() => {
          return;
        }}
        isDisabled
      />
      <GenericButton
        className="next"
        text="Next"
        actionOnClick={() => {
          return;
        }}
        isDisabled
      />
    </section>
  );
};

export default Pagination;
