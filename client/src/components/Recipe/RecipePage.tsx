import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GET_RECIPE } from "../../queries";
import LikeRecipe from "./LikeRecipe";

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
      <p>Created by: {getRecipe.username}</p>
      <LikeRecipe _id={_id} />
    </div>
  );
};

export default withRouter(RecipePage);
