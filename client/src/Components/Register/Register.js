import './Register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const categories = ['Poultry', 'Beef', 'Pork', 'Asian', 'Vegetarian', 'Italian', 'Desserts', 'Soups']

function Register({ loggedIn, saveUser, setLogged }) {
  const [error, setError] = useState(null)

  const addError = (message) => { setError(message) };

  const favourites = {
    Poultry: false,
    Beef: false,
    Pork: false,
    Asian: false,
    Vegetarian: false,
    Italian: false,
    Soups: false,
    Desserts: false,
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let rePassword = e.target.rePassword.value;
    if (password !== rePassword) {
      addError('Passwords must match!');
      return;
    }
    let data = { email, password, favourites }

    fetch("http://localhost:9000/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          addError('Email already in use, please try again!')
          throw new Error('Invalid email')


        }

        console.log('Success:', res);
        let displayList = [];
        categories.forEach((x) => {
          if (favourites[x]) {
            displayList.push(x)
          }
        })
        setLogged()
        saveUser(email, displayList)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const checkboxChecked = (e) => {
    var checked = e.target.checked;
    var targetName = e.target.name;
    favourites[targetName] = checked;
    // console.log(`${targetName}: ${checked}`)
    // console.log(favourites);
  }

  if (loggedIn) {
    return (<div>
      <h3>Successfully logged in!</h3>
      <Link to="/"className="recipeLink">Go back to the main page.</Link>
    </div>);
  } else {

    return (
      <div className="formContainer">
        <h2>Register</h2>
        {
          error ? <p className="error">{error}</p> : <p></p>
        }
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
          />
          <label htmlFor="rePassword">Repeat password</label>
          <input
            type="password"
            id="rePassword"
            name="rePassword"
          />


          <div>
            <p>What recipes are you interested in?</p>
            <label className="checkboxLabel" htmlFor="Poultry"><input type="checkbox" id="Poultry" name="Poultry" value="true" onChange={checkboxChecked} />Poultry</label>
            <label className="checkboxLabel" htmlFor="Beef"><input type="checkbox" id="Beef" name="Beef" value="true" onChange={checkboxChecked} />Beef</label>
            <label className="checkboxLabel" htmlFor="Pork"><input type="checkbox" id="Pork" name="Pork" value="true" onChange={checkboxChecked} />Pork</label>
            <label className="checkboxLabel" htmlFor="Asian"><input type="checkbox" id="Asian" name="Asian" value="true" onChange={checkboxChecked} />Asian</label>
            <label className="checkboxLabel" htmlFor="Soups"><input type="checkbox" id="Soups" name="Soups" value="true" onChange={checkboxChecked} />Soups</label>
            <label className="checkboxLabel" htmlFor="Vegetarian"><input type="checkbox" id="Vegetarian" name="Vegetarian" value="true" onChange={checkboxChecked} />Vegetarian</label>
            <label className="checkboxLabel" htmlFor="Italian"><input type="checkbox" id="Italian" name="Italian" value="true" onChange={checkboxChecked} />Italian</label>
            <label className="checkboxLabel" htmlFor="Desserts"><input type="checkbox" id="Desserts" name="Desserts" value="true" onChange={checkboxChecked} />Desserts</label>
          </div>

          <input type="submit" value="Register" />

        </form>
      </div >
    )
  }
}
export default Register;
