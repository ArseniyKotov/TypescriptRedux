import React, { useState } from "react";
import { useTypedSelector, useActions } from "../hooks";
import { RootState } from "../state";

export const RepoList = () => {
  const { data, error, loading } = useTypedSelector(
    (state: RootState) => state.repositories
  );
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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((piece) => <div>{piece}</div>)}
    </div>
  );
};
