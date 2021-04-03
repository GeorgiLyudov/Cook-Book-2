
import Recipe from '../Recipe/RecipeItem'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './CategoryPage.css'
let currentCategory = [];

function CategoryPage() {
  let { name } = useParams();
  const [loaded, setLoading] = useState(false);
  const changeLoaded = () => { setLoading(true) };


  useEffect(() => {
    fetch("http://localhost:9000/recipes/getAll")
      .then(res => res.json())
      .then(categories => {
        currentCategory = categories.filter(x => x.category === name)
        changeLoaded()
      })

  })
  if (currentCategory.length === 0) {
    return (
      <div>
        <h2>Sorry! There are no recipes in this category yet.</h2>
        <Link to="/recipes/browse">Go back to Categories.</Link>
      </div>
    )
  }

  return (

    < div className="categoryViewItem" >
      {
        !loaded ? <h1>Loading.</h1> :
          <div>
            {
              currentCategory.map((recipeItem) => {
                return (<Recipe URL={recipeItem.imageUrl} name={recipeItem.name} summary={recipeItem.summary} key={recipeItem.summary} id={recipeItem.id} />)
              })
            }
            < Link to="/recipes/browse" > Go back to Categories.</Link >
          </div >
      }
    </div >

  )
}

export default CategoryPage;