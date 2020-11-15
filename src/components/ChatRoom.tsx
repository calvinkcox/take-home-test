import React, { FC, useCallback } from "react";
import useRemoteResource from "../hooks/use-remote-resource";
import { Message, MessageRoom } from "../models/domain-objects";
import ChatMessage from "./ChatMessage";
// only needed for local dev
import { useParams } from "react-router";

const emptyMessages = [] as Message[];

interface Props { }

const ChatRoom: FC<Props> = () => {
  // only needed for local dev
  const { roomId } = useParams<{ roomId: string }>();

  const fetchMessages = useCallback(() => {
    // switch to this for the local version with multiple chat rooms
    return fetch(`/message-rooms/${roomId}`)
      .then((res) => res.json())
      .then(({ messages }: MessageRoom) => messages);

    // switch to this for the divvy mock api (don't forget to get rid of the "local dev only" code)
    // return fetch("https://api.mocki.io/v1/5ce8b374")
    //   .then((res) => res.json());
  }, [
    // only needed for local dev
    roomId
  ]);
  const [error, isLoading, messages] = useRemoteResource<Message[]>(fetchMessages, emptyMessages);

  if (error) return (<div>Error Loading Chat Messages</div>);
  if (isLoading) return (<div>Loading...</div>);

  return (
    <div>
      {messages.map(({
                           id,
                           name,
                           message,
                           reactions,
                           avatar_url,
                         }) => (
        <ChatMessage key={id} id={id} name={name} message={message} reactions={reactions} avatar_url={avatar_url} />
      ))}
    </div>
  );
};

export default ChatRoom;
