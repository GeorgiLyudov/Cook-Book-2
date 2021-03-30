function Add() {
  return (
    <div>
      <h1>Add a recipe</h1>
      <form >
        <label htmlFor="title">Recipe name:</label>
        <input type="text" id="title" name="title" />
        <p>
          Please add the name of your recipe
        </p>
        <label htmlFor="Summary">Summary</label>
        <textarea name="Summary" id="Summary" cols="40" rows="5"></textarea>
        <label htmlFor="ingredients">Ingredients</label>
        <textarea name="ingredients" id="ingredients" cols="40" rows="5"></textarea>
        <label htmlFor="preparation">Preparation</label>
        <textarea name="preparation" id="preparation" cols="40" rows="5"></textarea>
        <label htmlFor="Category">Summary</label>
        <select name="Categories" id="categories">
          <option value="poultry">Poultry</option>
          <option value="Pork">Pork</option>
          <option value="Beef">Beef</option>
          <option value="Asian">Asian</option>
          <option value="Italian">Italian</option>
          <option value="Dessert">Dessert</option>
          <option value="Soups">Soups</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
        <input type="file" id="recipeImage" name="recipeImage"></input>
        <label htmlFor="servings">Number of servings:</label>
        <input type="text" id="servings" name="servings" />
        <label htmlFor="prep-time">Preparation time:</label>
        <input type="text" id="prep-time" name="prep-time" />
        <label htmlFor="cooking-time">Cooking time:</label>
        <input type="text" id="cooking-time" name="cooking-time" />

        <input className="submitBtn" type="submit" value="Add recipe" />
      </form>
    </div>
  )
}

export default Add;