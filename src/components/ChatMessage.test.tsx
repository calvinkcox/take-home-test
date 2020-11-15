import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatMessage from './ChatMessage';
import { Reaction } from "../models/domain-objects";

test('renders a complete chat component', () => {
  const id = "1";
  const name = "Calvin";
  const message = "chat message";
  const reactions: Reaction[] = [{
    emoji: "yup",
    count: 10,
  },{
    emoji: "nope",
    count: 1,
  }];
  const avatar = "avatar_url";

  render(<ChatMessage
    id={id}
    name={name}
    message={message}
    reactions={reactions}
    avatar_url={avatar}
  />);
  const imgElement = screen.getByTestId("avatar-image");
  expect(imgElement).toHaveAttribute("src", avatar);

  const messageElement = screen.getByText(message);
  expect(messageElement).toBeInTheDocument();

  const yupReactionEmoji = screen.getByText(reactions[0].emoji);
  expect(yupReactionEmoji).toBeInTheDocument();
  const yupReactionCount = screen.getByText(reactions[0].count.toString());
  expect(yupReactionCount).toBeInTheDocument();

  const nopeReactionEmoji = screen.getByText(reactions[1].emoji);
  expect(nopeReactionEmoji).toBeInTheDocument();
  const nopeReactionCount = screen.getByText(reactions[1].count.toString());
  expect(nopeReactionCount).toBeInTheDocument();

  const addReaction = screen.getByTestId("add-reaction");
  expect(addReaction).toBeInTheDocument();
});

test('renders a partial chat component', () => {
  const id = "1";
  const name = "Calvin";
  const message = "chat message";

  render(<ChatMessage
    id={id}
    name={name}
    message={message}
    reactions={[]}
  />);

  const imgElement = screen.getByTestId("default-avatar");
  expect(imgElement).toBeInTheDocument();

  const messageElement = screen.getByText(message);
  expect(messageElement).toBeInTheDocument();

  const addReaction = screen.getByTestId("add-reaction");
  expect(addReaction).toBeInTheDocument();
});
