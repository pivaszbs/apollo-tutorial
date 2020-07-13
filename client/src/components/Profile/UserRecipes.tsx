import React from "react";
import { useQuery } from "react-apollo";
import { GET_USER_RECIPES } from "../../queries";
import { Query, QueryGetUserRecipesArgs } from "../../queries/types";
import UserRecipe from "../Recipe/UserRecipe";

const UserRecipes = ({ username }) => {
  const { data, loading, error } = useQuery<Query, QueryGetUserRecipesArgs>(
    GET_USER_RECIPES,
    {
      variables: { username },
    }
  );

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <h3>Your recipes</h3>
      <ul>
        {data.getUserRecipes.map(({ _id, likes, name }) => (
          <UserRecipe
            key={_id}
            _id={_id}
            likes={likes}
            name={name}
            username={username}
          />
        ))}
      </ul>
    </>
  );
};

export default UserRecipes;
