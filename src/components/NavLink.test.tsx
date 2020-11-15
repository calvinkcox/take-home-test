import React from 'react';
import { render, screen } from '@testing-library/react';
import NavLink from './NavLink';

test("builds out links for the room", () => {
  render(<NavLink roomId={"123"} name={"room 123"} />);

  const LinkElem = screen.getByTestId("nav-link");
  expect(LinkElem).toHaveAttribute("href", "/rooms/123");
  expect(LinkElem).toHaveTextContent("room 123");
});