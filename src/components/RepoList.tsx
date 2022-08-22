import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { RootState } from "../state";

export const RepoList = () => {
  const state = useSelector((state: RootState) => state.repositories);
  const [term, setTerm] = useState("");
  const { searchRepos } = useActions();
  const handleUpdateTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e?.target?.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepos(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleUpdateTerm} />
        <button>Search</button>
      </form>
    </div>
  );
};
