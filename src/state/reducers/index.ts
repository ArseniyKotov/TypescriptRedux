import { combineReducers } from "redux";
import { repositories } from "./repositories";

export const reducers = combineReducers({
  repositories,
});

export type RootState = ReturnType<typeof reducers>;
