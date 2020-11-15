import React, { FC } from "react";

interface Props { }

let AddReaction: FC<Props> = () => {
  return (
    <button className="reaction-button">
      <img className="add-reaction" data-testid="add-reaction" src="/icons/light/smile-plus.svg" alt="React to this message!" />
    </button>
  );
};

export default AddReaction;