import { useParams, Link } from 'react-router-dom';
import './RecipePage.css'
import React, { useEffect, useState } from 'react';
import RatingIcon from './RatingIcon/RatingIcon';

let recipe = {}
function RecipePage({ user, discoveredRecipe }) {
  const { recipeId } = useParams();
  let id = discoveredRecipe || recipeId;

  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
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


  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);

  };

  return (
    <div>
      { !loaded ? <h1>Loading</h1> :
        <div className="recipeWrapper">

          <img className="recipeImage" src={recipe.imageUrl} alt="img" />
          <h2>{recipe.name}</h2>
          <div className="rating">
            <p>Rating: </p>
            <div className="box flex">
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <RatingIcon
                    index={index}
                    rating={rating}
                    hoverRating={hoverRating}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onSaveRating={onSaveRating}
                    key={index} />
                )
              })}
            </div>
            <img src="/icons/whisk.svg" alt="img" />
            <img src="/icons/whisk.svg" alt="img" />
            <img src="/icons/whisk.svg" alt="img" />
            <img src="/icons/whisk.svg" alt="img" />
            <img src="/icons/whisk.svg" alt="img" />

          </div>
          <p>{recipe.summary}</p>
          <p>Prep time: {recipe.prepTime}</p>
          <p>Cooking time: {recipe.cookingTime}</p>
          <div>Ingredients:</div>
          <p>{recipe.ingredients}</p>

          <div>Instructions:</div>
          <p>{recipe.preparation}</p>
          <p>{recipe.rating}</p>
          < Link to="/recipes/browse" > Go back to Categories.</Link >

        </div>
      }
    </div>
  )
}

export default RecipePage;