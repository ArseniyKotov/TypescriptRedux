import { ActionType } from "./types";

export interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
}

export interface SearchReposSuccess {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

export interface SearchReposError {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

export type Action = SearchReposAction | SearchReposSuccess | SearchReposError;
