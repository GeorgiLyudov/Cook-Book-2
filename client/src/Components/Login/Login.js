import './Login.css';
import { Redirect } from 'react-router';
import { useState } from 'react';

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

        setLogged()
        saveUser(email, res._id)


      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  // add link to https://postimages.org/ for the image upload

  if (loggedIn) {
    return <Redirect to={{
      pathname: "/"
    }} />;
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
