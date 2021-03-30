import { Link } from 'react-router-dom'

function Home({
  loggedIn,
  setLogged
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


      </div>
    )
  }
}

export default Home;