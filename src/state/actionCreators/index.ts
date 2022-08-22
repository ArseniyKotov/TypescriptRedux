import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "./actions/types";
import { Action } from "./actions";

export const searchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOS,
    });
    try {
      // do the call
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_REPOS_SUCCESS,
        payload: names,
      });
    } catch (e) {
      if (e instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOS_ERROR,
          payload: e.message,
        });
      }
    }
  };
};