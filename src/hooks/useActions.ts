import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchRepos } from "../state/actionCreators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ searchRepos }, dispatch);
};
