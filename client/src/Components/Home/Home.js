import { Link } from 'react-router-dom'
import Recipe from './Recipe/Recipe'


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
      </div>
    )
  }
  console.log('test');
  return (
    < div >
      <h1>Welcome!</h1>
      <h2>You are now logged in!</h2>
      <h2>Add a new recipe!</h2>
      {recipeList.map((recipeItem) => {
      console.log('render home images');
      return (<Recipe URL={recipeItem.recipeImage} name={recipeItem.name} summary={recipeItem.summary} key={recipeItem.summary} />)
    })
  }

  <Link to="/recipes/add" >Add</Link>
    </div >
  )
}


export default Home;