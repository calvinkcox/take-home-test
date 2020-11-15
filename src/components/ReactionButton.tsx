import React, { FC } from "react";
import { Reaction } from "../models/domain-objects";
import "./ReactionButton.css";

interface Props extends Reaction { }

let ReactionButton: FC<Props> = ({ emoji, count }) => {
  return (
    <button className="reaction-button">
      <span>{emoji}</span>
      <span className="count">{count}</span>
    </button>
  );
};

export default ReactionButton;