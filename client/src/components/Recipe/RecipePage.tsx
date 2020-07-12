import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_RECIPE } from "../../queries";

const RecipePage = ({ match }) => {
  const { _id } = match.params;

  const { data, loading, error } = useQuery(GET_RECIPE, {
    variables: {
      _id,
    },
  });

  if (loading) return <div>loading</div>;

  if (error) return <div>Error</div>;

  const { getRecipe } = data;

  return (
    <div className="App">
      <h2>{getRecipe.name}</h2>
      <p>Category: {getRecipe.category}</p>
      <p>Description: {getRecipe.description}</p>
      <p>Instructions: {getRecipe.instructions}</p>
      <p>createdDate: {getRecipe.createdDate}</p>
      <p>likes: {getRecipe.likes}</p>
      <p>username: {getRecipe.username}</p>
      <button>Like</button>
    </div>
  );
};

export default withRouter(RecipePage);
