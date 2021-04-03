import { useParams } from 'react-router-dom';
import './RecipePage.css'
import React, { useEffect, useState } from 'react';
import RatingIcon from './RatingIcon/RatingIcon';

let recipe = {}
function RecipePage({ user }) {
  const { recipeId } = useParams();

  const [rating, setRating] = React.useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const [loaded, setLoading] = useState(false);
  console.log(loaded);
  const changeLoaded = () => { setLoading(true) };

  useEffect(() => {
    fetch("http://localhost:9000/recipes/getAll")
      .then(res => res.json())
      .then(recipes => {
        recipe = recipes.find(x => x.id == recipeId)
        changeLoaded();
        console.log(loaded);
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
    // recipe.rating.push([user.uid, index])
    // db.collection('Recipes').doc(recipeId).update(
    //   {
    //  rating: recipe.rating
    //   }
    // )
    console.log(index);
    console.log(user.uid);
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

        </div>
      }
    </div>
  )
}

export default RecipePage;