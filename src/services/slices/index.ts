import ingredientsReducer from "./ingredients";
import constructorReducer from "./constructor";
import orderReducer from "./order";
import authReducer from "./auth";
import { wsFeedReducer } from "../reducers/ws-feed";
import { configureStore } from "@reduxjs/toolkit";
import { socketMiddleware } from "../middleware/socket-middleware";

import {
  connect as FeedWsConnect,
  disconnect as FeedWsDisconnect,
  wsConnecting as FeedWsConnecting,
  wsOpen as FeedWsOpen,
  wsClose as FeedWsClose,
  wsError as FeedWsError,
  wsMessage as FeedWsMessage,
} from "../actions/ws-feed";

const wsActions = {
  wsConnect: FeedWsConnect,
  wsDisconnect: FeedWsDisconnect,
  wsConnecting: FeedWsConnecting,
  onOpen: FeedWsOpen,
  onClose: FeedWsClose,
  onError: FeedWsError,
  onMessage: FeedWsMessage,
};

const wsFeedMiddleware = socketMiddleware(wsActions);

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    constructorBurger: constructorReducer,
    order: orderReducer,
    auth: authReducer,
    wsFeed: wsFeedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(wsFeedMiddleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
