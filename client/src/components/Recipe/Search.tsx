import React, { useState } from "react";
import { useLazyQuery, useQuery } from "react-apollo";
import { SEARCH_RECIPES } from "../../queries";
import SearchItem from "./SearchItem";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    e.persist();
    setSearchTerm(e.target.value);
  };

  const { data, loading, error } = useQuery(SEARCH_RECIPES, {
    variables: {
      searchTerm,
    },
  });

  return (
    <div className="App">
      <input
        value={searchTerm}
        onChange={handleChange}
        type="search"
        placeholder="Search for recipes"
      />
      {loading && <div>Loading</div>}
      {error && <div>Error</div>}
      {data && (
        <ul>
          {data.searchRecipes.map((recipe) => (
            <SearchItem key={recipe._id} {...recipe} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
