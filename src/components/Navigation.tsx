import React, { FC, useCallback } from "react";
import useRemoteResource from "../hooks/use-remote-resource";
import { Room } from "../models/domain-objects";
import NavLink from "./NavLink";

const emptyRooms = [] as Room[];

interface Props { }

const Navigation: FC<Props> = () => {
  const fetchRooms: () => Promise<Room[]> = useCallback(() => {
    return fetch("/rooms").then((res) => res.json());
  }, []);
  const [error, isLoading, rooms] = useRemoteResource(fetchRooms, emptyRooms);

  if (error) return <div>Oh no! It blew up...</div>
  if (isLoading) return <div>Loading chat rooms...</div>

  return (
    <ul>
      {rooms.map((r) => (
        <NavLink roomId={r.roomId} name={r.name} />
      ))}
    </ul>
  );
};

export default Navigation;
