import './Register.css';
import { Redirect } from 'react-router';
import { useState } from 'react';

function Register({ loggedIn, saveUser, setLogged }) {
  const [error, setError] = useState(null)
  const addError = (message) => { setError(message) };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;
    let rePassword = e.target.rePassword.value;
    let checkBox = e.target.Beef.value;
    console.log(checkBox);
    if (password !== rePassword) {
      addError('Passwords must match!');
      return;
    }
    let data = { email, password }

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
        setLogged()
        saveUser(email, res.body._id)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  if (loggedIn) {
    return <Redirect to="/" />;
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
            <label className="checkboxLabel" htmlFor="Poultry"><input type="checkbox" id="Poultry" name="Poultry" value="true" />Poultry</label>
            <label className="checkboxLabel" htmlFor="Beef"><input type="checkbox" id="Beef" name="Beef" value="true" />Beef</label>
            <label className="checkboxLabel" htmlFor="Pork"><input type="checkbox" id="Pork" name="Pork" value="true" />Pork</label>
            <label className="checkboxLabel" htmlFor="Asian"><input type="checkbox" id="Asian" name="Asian" value="true" />Asian</label>
            <label className="checkboxLabel" htmlFor="Soups"><input type="checkbox" id="Soups" name="Soups" value="true" />Soups</label>
            <label className="checkboxLabel" htmlFor="Vegetarian"><input type="checkbox" id="Vegetarian" name="Vegetarian" value="true" />Vegetarian</label>
            <label className="checkboxLabel" htmlFor="Italian"><input type="checkbox" id="Italian" name="Italian" value="true" />Italian</label>
            <label className="checkboxLabel" htmlFor="Desserts"><input type="checkbox" id="Desserts" name="Desserts" value="true" />Desserts</label>
          </div>

          <input type="submit" value="Register" />

        </form>
      </div >
    )
  }
}
export default Register;
