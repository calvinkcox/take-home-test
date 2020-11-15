import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Room } from "../models/domain-objects";

interface Props extends Omit<Room, "groupId"|"id"> { }

const NavLink: FC<Props> = ({
  roomId,
  name,
                            }) => {
  return (
    <li>
      <Link to={`/rooms/${roomId}`} data-testid="nav-link">{name}</Link>
    </li>
  );
};

export default NavLink;