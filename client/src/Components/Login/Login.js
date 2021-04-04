import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const categories = ['Poultry', 'Beef', 'Pork', 'Asian', 'Vegetarian', 'Italian', 'Desserts', 'Soups']

let favourites = [];
function Login({ loggedIn, setLogged, saveUser }) {
  const [error, setError] = useState(null)
  const addError = (message) => { setError(message) };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.username.value;
    let password = e.target.password.value;
    let data = { email, password }
    fetch("http://localhost:9000/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          addError('Invalid email or password, please try again!')
          throw new Error('Invalid password')
        }
        let users = [];
        let list = []
        fetch("http://localhost:9000/users/getAll")
          .then(res => res.json())
          .then(res => {
            res.forEach((x) => {
              list.push(x);
              users = list;
            })
            let currentUserFavourites = users.filter(x => x.email === email)[0].favourites;
            let displayList = [];
            categories.forEach((x) => {
              if (currentUserFavourites[x]) {
                displayList.push(x)
              }
            })
            favourites = displayList;
            saveUser(email, favourites)
            setLogged()


          })
          .catch((error) => {
            console.error('Error:', error);
          });
      })
  }
  if (loggedIn) {
    return (<div>
      <h3>Successfully logged in!</h3>
      <Link to="/" className="recipeLink">Go back to the main page.</Link>
    </div>);
  }
  return (
    <div className="formContainer">
      <h2>Log in</h2>
      {
        error ? <p className="error">{error}</p> : <p></p>
      }
      <form onSubmit={onSubmitHandler} className="authForm">
        <label htmlFor="username">Email</label>
        <input
          type="text"
          id="username"
          name="username"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
        />
        <input type="submit" value="Login" />

      </form>


    </div>
  )
}

export default Login;
