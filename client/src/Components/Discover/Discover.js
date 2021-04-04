import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import RecipePage from '../RecipePage/RecipePage';
import './Discover.css'
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
        <h2>Discover a new recipe!</h2>
        <p>
          Here we'll show you a random recipe from our library. If you don't feel like making this one, no worries! Just click the button below and we'll show you another one</p>


        <Link to="/recipes/discover"><button className="addDiscoverButton">New recipe</button></Link>
      </div>
      {
        !loaded ? <h2>Loading.</h2> :
          <div className="discover-recipe">

            <RecipePage discoveredRecipe={item.id} />
          </div>
      }

    </div>

  )
}

export default Discover;
