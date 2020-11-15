export interface Room {
  id: string;
  roomId: string;
  name: string;
}

export interface MessageRoom {
  id: string;
  messages: Message[];
}

export interface Message {
  id: string;
  name: string;
  message: string;
  reactions: Reaction[];
  avatar_url: string;
}

export interface Reaction {
  count: number;
  emoji: string;
}