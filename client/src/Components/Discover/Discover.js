import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import RecipePage from '../RecipePage/RecipePage';
let recipes = [];
let item = {}
function Discover() {
  const [loaded, setLoading] = useState(false);
  const changeLoaded = () => { setLoading(true) };

  useEffect(() => {
    let list = []
    fetch("http://localhost:9000/recipes/getAll")
      .then(res => res.json())
      .then(res => {
        res.forEach((x) => {
          list.push(x);
          recipes = list;
        })

        item = recipes[Math.floor(Math.random() * recipes.length)];
        changeLoaded()



      })
  })


  return (
    <div>
      <div className="discover-container">
        <h1> Welcome to discover!</h1>
        <h2>
          Here we'll show you a random recipe from our library. If you don't feel like making this one, no worries! Just click the button below and we'll show you another one</h2>
        <Link to="/recipes/discover">Show me a different recipe.</Link>
      </div>
      {
        !loaded ? <h1>Loading.</h1> :
          <div className="discover-recipe">
            
            <RecipePage discoveredRecipe={item.id} />
          </div>
      }

    </div>

  )
}

export default Discover;
