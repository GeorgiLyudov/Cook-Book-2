import { Link } from 'react-router-dom'
import Recipe from './Recipe/Recipe'

function Home({
  loggedIn,
  setLogged,
  recipeList
}) {
  if (!loggedIn) {
    return (
      <div>
        <h1>Welcome!</h1>
        <h2>You are not logged in! </h2>
        <button onClick={setLogged}>Click me!</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Welcome!</h1>
        <h2>You are now logged in!</h2>
        <button onClick={setLogged}>Click me!</button>
        <h2>Add a new recipe!</h2>
        <Link to="/recipes/add" >Add</Link>
        {recipeList.map(y => {
          return <Recipe
            URL={y.recipeImage}
            name={y.name}
            summary={y.summary}
            key={y.summary}
          // clickHandler={this.bookClicked.bind(this, x.title)} 
          />;
        })}

      </div>
    )
  }
}

export default Home;