import { createReducer } from "@reduxjs/toolkit";
import {
  wsOpen,
  wsClose,
  wsMessage,
  wsError,
  wsConnecting,
} from "../actions/ws-feed";

enum WebSocketStatus {
  CONNECTING = "CONNECTING",
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
}

interface IWSOrder {
  ingredients: Array<string>;
  _id: string;
  status: "done" | "created" | "pending";
  number: number;
  createdAt: string;
  updatedAt: string;
}

interface IWSFeedReducer {
  status: WebSocketStatus;
  orders: Array<IWSOrder>;
  total: number | undefined;
  totalToday: number | undefined;
  error: unknown;
}

const initialState: IWSFeedReducer = {
  status: WebSocketStatus.OFFLINE,
  orders: [],
  total: undefined,
  totalToday: undefined,
  error: null,
};

export const wsFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebSocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebSocketStatus.ONLINE;
      state.error = null;
    })
    .addCase(wsClose, (state) => {
      state.status = WebSocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    });
});
