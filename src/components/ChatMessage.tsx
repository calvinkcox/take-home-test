import React, { FC } from "react";
import { Message } from "../models/domain-objects";
import DefaultAvatar from "./DefaultAvatar";
import ReactionButton from "./ReactionButton";
import AddReaction from "./AddReaction";
import "./ChatMessage.css";

interface Props extends Omit<Message, "avatar_url"> {
  avatar_url?: string;
}

let ChatMessage: FC<Props> = ({
                                id,
                                name,
                                message,
                                reactions,
                                avatar_url,
                              }) => {
  return (
    <div className="chat-message">
      <div className="row">
        { avatar_url ? <img className="avatar" data-testid="avatar-image" src={avatar_url} alt={name} /> : <DefaultAvatar name={name} /> }
        <div>{message}</div>
      </div>
      <div className="row">
        {reactions.map(({ count, emoji }, i) => (
          <ReactionButton key={i} count={count} emoji={emoji} />
        ))}
        <AddReaction />
      </div>
    </div>
  );
};

export default ChatMessage;