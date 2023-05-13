export enum WebSocketStatus {
  CONNECTING = "CONNECTING",
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

export interface IWSOrder {
  _id: string;
  ingredients: Array<string>;
  status: "done" | "created" | "pending";
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}
