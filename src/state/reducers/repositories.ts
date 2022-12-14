/* Types of actions

1. { type: 'search_repositories }
2. { type: 'search_repositories_success', payload: [] }
3. { type: 'search_repositories_error', payload: string }

**/

import { Action } from "../actionCreators/actions";
import { ActionType } from "../actionCreators/actions/types";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const repositories = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
