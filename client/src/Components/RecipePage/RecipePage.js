import { useParams, Link } from 'react-router-dom';
import './RecipePage.css'
import React, { useEffect, useState } from 'react';

let recipe = {}
function RecipePage({ user, discoveredRecipe }) {
  const { recipeId } = useParams();
  let id = discoveredRecipe || recipeId;

  const [loaded, setLoading] = useState(false);
  const changeLoaded = () => { setLoading(true) };

  useEffect(() => {
    fetch("http://localhost:9000/recipes/getAll")
      .then(res => res.json())
      .then(recipes => {
        recipe = recipes.find(x => x.id === id)
        changeLoaded();
      })

  })


  return (
    <div>
      { !loaded ? <h1>Loading</h1> :
        <div className="recipeWrapper">
          <div className="blank"></div>
          <div className="recipeItem">
            <div className="recipeText">

              <h2>{recipe.name}</h2>
              <p>{recipe.summary}</p>
            </div>
            <img className="recipeImage" src={recipe.imageUrl} alt="img" />
          </div>
          <div className="title">Prep time:</div>

          <p> {recipe.prepTime}</p>
          <div className="title">Cooking time:</div>

          <p>{recipe.cookingTime}</p>
          <div className="title">Ingredients:</div>
          <p>{recipe.ingredients}</p>

          <div className="title">Instructions:</div>
          <p>{recipe.preparation}</p>
          <p>{recipe.rating}</p>
          < Link to="/recipes/browse" className="recipeLink"> Go back to Categories.</Link >

        </div>
      }
    </div>
  )
}

export default RecipePage;