import {
  applyMiddleware,
  legacy_createStore,
  combineReducers,
} from "redux";
import { thunk } from 'redux-thunk';

import { reducer as doubt } from "./doubt/reducer";
import { reducer as user } from "./user/reducer";

const rootRuducer = combineReducers({ user, doubt });


export const store = legacy_createStore(
  rootRuducer,
  applyMiddleware(thunk)
);