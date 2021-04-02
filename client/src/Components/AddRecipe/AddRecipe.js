import firebase from 'firebase/app';
import { useState } from 'react';
import { Redirect } from 'react-router';


function AddRecipe({ getUser }) {
  const [created, setCreate] = useState(false)
  const create = () => { setCreate(x => !x) };
  function submitForm(e) {
    e.preventDefault();
    let name = e.target.title.value;
    let summary = e.target.summary.value;
    let ingredients = e.target.ingredients.value;
    let preparation = e.target.preparation.value;
    let category = e.target.category.value;
    let recipeImage = e.target.recipeImage.value;
    let servings = e.target.servings.value;
    let prepTime = e.target.prepTime.value;
    let cookingTime = e.target.cookingTime.value;
    let rating = [];
    let views = 0;
    firebase.firestore().collection('Recipes').add({
      name,
      summary,
      ingredients,
      preparation,
      category,
      servings,
      prepTime,
      cookingTime,
      recipeImage,
      rating,
      views,
      creator: getUser().uid,
    })
    create()
  }
  if (created) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Add a recipe</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="title">Name:</label>
        <input type="text" id="title" name="title" />
        <p>
          Please add the name of your recipe
        </p>
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary" cols="40" rows="5"></textarea>
        <p>
          Please include a short summary of your recipe.
        </p>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea name="ingredients" id="ingredients" cols="40" rows="5"></textarea>
        <p>
          Please include a list of ingredients.
        </p>
        <label htmlFor="preparation">Preparation:</label>
        <textarea name="preparation" id="preparation" cols="40" rows="5"></textarea>
        <p>
          Please describe the preparation method.
        </p>
        <label htmlFor="category">Category:</label>
        <select name="category" id="category">
          <option value="poultry">Poultry</option>
          <option value="Pork">Pork</option>
          <option value="Beef">Beef</option>
          <option value="Asian">Asian</option>
          <option value="Italian">Italian</option>
          <option value="Dessert">Dessert</option>
          <option value="Soups">Soups</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
        <label htmlFor="recipeImage">Image URL:</label>
        <input type="text" id="recipeImage" name="recipeImage" />
        <label htmlFor="servings">Number of servings:</label>
        <input type="text" id="servings" name="servings" />
        <label htmlFor="prepTime">Preparation time:</label>
        <input type="text" id="prepTime" name="prepTime" />
        <label htmlFor="cookingTime">Cooking time:</label>
        <input type="text" id="cookingTime" name="cookingTime" />

        <input className="submitBtn" type="submit" value="Add recipe" />
      </form>
    </div>
  )
}

export default AddRecipe;