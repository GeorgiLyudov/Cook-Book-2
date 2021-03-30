import './Login.css';
import firebase from 'firebase/app';
import 'firebase/database';
import { Redirect } from 'react-router';

function Login({ loggedIn, setLogged, saveUser }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.username.value;
    let password = e.target.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userData) => {
        saveUser(userData)
        setLogged()
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        return;
      });
  }

  if (loggedIn) {
    return <Redirect to={{
      pathname: "/"
    }} />;
  }
  return (<div>
    <h1>Welcome to Cookbook, please login.</h1>
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
      />

      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
      />
      <input type="submit" value="Login" />

    </form>
  </div>
  )
}
export default Login;
