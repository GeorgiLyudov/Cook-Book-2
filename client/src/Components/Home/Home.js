import { Link } from 'react-router-dom'
import Recipe from '../Recipe/RecipeItem'


function Home({
  loggedIn,
  recipeList
}) {
  console.log(recipeList);
  
  if (!loggedIn) {
    return (
      <div>
        <h1>Welcome!</h1>
        <h2>You are not logged in! </h2>
        {recipeList.map((recipeItem) => {
          return (<Recipe URL={recipeItem.recipeImage} name={recipeItem.name} summary={recipeItem.summary} key={recipeItem.summary} id={recipeItem.id} />)
        })
      }
      </div>
    )
  }
  console.log('test');
  return (
    < div >
      <h1>Welcome!</h1>
      <h2>You are now logged in! Click the link below to add a recipe!</h2>
    <Link to="/recipes/add" >Add a recipe</Link>
      {recipeList.map((recipeItem) => {
        return (<Recipe URL={recipeItem.recipeImage} name={recipeItem.name} summary={recipeItem.summary} key={recipeItem.summary} id={recipeItem.id} />)
      })
      }

    </div >
  )
}


export default Home;