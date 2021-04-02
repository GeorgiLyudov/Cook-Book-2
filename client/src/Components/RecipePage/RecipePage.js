import { useParams } from 'react-router-dom';
import './RecipePage.css'

function RecipePage({ recipeList }) {
  console.log(recipeList);
  const { recipeId } = useParams();
  const recipe = recipeList.find(x => x.id === recipeId);
  console.log(recipe.recipeImage);
  return (
    <div className="recipeWrapper">
    <img className="recipeImage" src={recipe.recipeImage} alt="img" />
      <h2>{recipe.name}</h2>

      <p>{recipe.summary}</p>
      <p>Prep time: {recipe.prepTime}</p>
      <p>Cooking time: {recipe.cookingTime}</p>
      <div>Ingredients:</div>
      <p>{recipe.ingredients}</p>

      <div>Instructions:</div>
      <p>{recipe.preparation}</p>
      <p>{recipe.rating}</p>
    </div>
  )
}

export default RecipePage;