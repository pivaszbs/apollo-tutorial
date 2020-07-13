import React, { useState, useEffect } from "react";
import { useMutation } from "react-apollo";
import { ADD_RECIPE, GET_ALL_RECIPES, GET_USER_RECIPES } from "../../queries";
import Error from "../Error";
import { withRouter } from "react-router-dom";
import withAuth from "../withAuth";

const initialState = {
  name: "",
  instructions: "",
  description: "",
  category: "Breakfast",
  username: "",
};

const AddRecipe = ({ session, history }) => {
  const [recipe, setRecipe] = useState({ ...initialState });

  const { name, instructions, description, category } = recipe;

  useEffect(() => {
    setRecipe({
      ...recipe,
      username: session.getCurrentUser.username,
    });
  }, [session]);

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const updateCache = (cache, { data }) => {
    const { addRecipe } = data;
    const { getAllRecipes } = cache.readQuery({ query: GET_ALL_RECIPES });
    cache.writeQuery({
      query: GET_ALL_RECIPES,
      data: {
        getAllRecipes: [addRecipe, ...getAllRecipes],
      },
    });
  };

  const handlerSubmit = (e, addRecipe) => {
    e.preventDefault();
    addRecipe({ variables: { ...recipe } }).then(({ data }) => {
      setRecipe({ ...initialState });
      history.push("/");
    });
  };

  const validateRecipe = ({ name, instructions, description, category }) =>
    !name || !instructions || !description || !category;

  const [addRecipe, { data, loading, error }] = useMutation(ADD_RECIPE, {
    update: updateCache,
    refetchQueries: [
      {
        query: GET_USER_RECIPES,
        variables: {
          username: session.getCurrentUser.username,
        },
      },
    ],
  });

  return (
    <div className="App">
      <h2>Add AddRecipe</h2>
      <form onSubmit={(e) => handlerSubmit(e, addRecipe)} className="form">
        <input
          type="text"
          name="name"
          placeholder="Recipe name"
          onChange={handleChange}
          value={name}
        />
        <select value={category} name="category" onChange={handleChange}>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <textarea
          name="instructions"
          placeholder="Add instructions"
          value={instructions}
          onChange={handleChange}
        />
        <button
          disabled={loading || validateRecipe(recipe)}
          type="submit"
          className="button-primary"
        >
          Submit
        </button>
        {error && <Error error={error} />}
      </form>
    </div>
  );
};

export default withAuth((session) => session && session.getCurrentUser)(
  withRouter(AddRecipe)
);
