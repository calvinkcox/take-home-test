import React, { FC } from "react";
import "./Reply.css";

interface Props { }

const Reply: FC<Props> = () => {
  return (
    <div className="reply row">
      <label htmlFor="reply-message" className="sr-only">Reply</label>
      <textarea id="reply-message" name="reply-message" />
      <button>Send Message</button>
    </div>
  );
};

export default Reply;
