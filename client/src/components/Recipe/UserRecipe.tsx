import React from "react";
import { useMutation } from "react-apollo";
import { Link } from "react-router-dom";
import { Mutation } from "../../queries/types";
import {
  DELETE_USER_RECIPE,
  GET_USER_RECIPES,
  GET_ALL_RECIPES,
} from "../../queries";

const UserRecipe = ({ username, _id, name, likes }) => {
  const [deleteUserRecipe, attrs] = useMutation<Mutation["deleteUserRecipe"]>(
    DELETE_USER_RECIPE
  );

  const handleDelete = (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete the recipe?"
    );
    if (confirmDelete) {
      deleteUserRecipe({
        variables: {
          _id,
        },
        update: (cache, { data: deleteUserRecipe }) => {
          const { getUserRecipes } = cache.readQuery({
            query: GET_USER_RECIPES,
            variables: {
              username,
            },
          });

          cache.writeQuery({
            query: GET_USER_RECIPES,
            variables: {
              username,
            },
            data: {
              getUserRecipes: getUserRecipes.filter(
                (recipe) => recipe._id !== deleteUserRecipe._id
              ),
            },
          });
        },
        refetchQueries: [
          {
            query: GET_USER_RECIPES,
            variables: {
              username,
            },
          },
          {
            query: GET_ALL_RECIPES,
          },
        ],
      });
    }
  };
  return (
    <li key={_id}>
      <Link to={`/recipes/${_id}`}>
        <p>{name}</p>
      </Link>
      <p style={{ marginBottom: 0 }}>{likes}</p>
      <p className="delete-button" onClick={() => handleDelete(_id)}>
        {attrs.loading ? "deleting..." : "x"}
      </p>
    </li>
  );
};

export default UserRecipe;
