import React from "react";
import { useQuery, useMutation } from "react-apollo";
import { GET_USER_RECIPES, DELETE_USER_RECIPE } from "../../queries";
import { Link } from "react-router-dom";
import { Query, QueryGetUserRecipesArgs, Mutation } from "../../queries/types";

const UserRecipes = ({ username }) => {
  const { data, loading, error } = useQuery<Query, QueryGetUserRecipesArgs>(
    GET_USER_RECIPES,
    {
      variables: { username },
    }
  );

  const [deleteUserRecipe] = useMutation<Mutation>(DELETE_USER_RECIPE);

  const handleDelete = (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete the recipe?"
    );
    if (confirmDelete) {
      deleteUserRecipe({
        variables: {
          _id,
        },
      });
    }
  };

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <h3>Your recipes</h3>
      <ul>
        {data.getUserRecipes.map(({ _id, name, likes }) => (
          <li key={_id}>
            <Link to={`/recipes/${_id}`}>
              <p>{name}</p>
            </Link>
            <p style={{ marginBottom: 0 }}>{likes}</p>
            <p className="delete-button" onClick={() => handleDelete(_id)}>
              x
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserRecipes;
