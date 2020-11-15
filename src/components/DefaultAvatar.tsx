import React, { FC } from "react";

interface Props {
  name: string;
}

let DefaultAvatar: FC<Props> = ({
                                  name,
                                }) => {
  return (
    <img className="avatar" data-testid="default-avatar" src="/icons/light/user.svg" alt={name} />
  );
};

export default DefaultAvatar;
