import React from "react";
import { useQuery } from "react-apollo";
import { GET_USER_RECIPES } from "../../queries";
import { Link } from "react-router-dom";

const UserRecipes = ({ username }) => {
  const { data, loading, error } = useQuery(GET_USER_RECIPES, {
    variables: { username },
  });

  if (loading) return <div>Loading</div>;

  if (error) return <div>Error</div>;

  return (
    <>
      <h3>Your recipes</h3>
      <ul>
        {data.getUserRecipes.map((recipe) => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>
              <p>{recipe.name}</p>
            </Link>
            <p>{recipe.likes}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserRecipes;
