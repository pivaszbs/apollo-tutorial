import React, { useState } from "react";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({});

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <h2>Add AddRecipe</h2>
      <form className="form">
        <input
          type="text"
          name="name"
          placeholder="Recipe name"
          onChange={handleChange}
        />
        <select name="category" onChange={handleChange}>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
        </select>
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <textarea
          name="instructions"
          placeholder="Add instructions"
          onChange={handleChange}
        />
        <button type="submit" className="button-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
