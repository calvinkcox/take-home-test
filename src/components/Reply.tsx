import React, { FC } from "react";

interface Props { }

const Reply: FC<Props> = () => {
  return (
    <div className="reply">
      <label htmlFor="reply-message">Reply</label>
      <textarea id="reply-message" name="reply-message" />
      <button>Send Message</button>
    </div>
  );
};

export default Reply;
