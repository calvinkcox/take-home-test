import React, { FC } from "react";
import { Room } from "../models/domain-objects";

interface Props extends Omit<Room, "groupId"|"id"> { }

const NavLink: FC<Props> = ({
  roomId,
  name,
                            }) => {
  return (
    <li>
      <a href={`/rooms/${roomId}`} data-testid="nav-link">{name}</a>
    </li>
  );
};

export default NavLink;