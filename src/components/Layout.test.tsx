import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('displays the Reply component by default', () => {
  render(<Layout />);
  const ReplyElement = screen.getByTestId("reply");
  expect(ReplyElement).toBeInTheDocument();
});

test('does not displays the Reply component in non-chat rooms', () => {
  render(<Layout isChatRoom={false} />);
  expect(() => screen.getByTestId("reply")).toThrow();
});
