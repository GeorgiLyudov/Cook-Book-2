import './Register.css';
import firebase from 'firebase/app';
import 'firebase/database';

import { Redirect } from 'react-router';

function Register({ loggedIn, saveUser, setLogged }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        saveUser(userCredentials)
        setLogged()
      })
      .catch((error) => {
        console.log(`${error.code}: ${error.message}`);
      });
  }
  if (loggedIn) {
    return <Redirect to="/" />;
  } else {

    return (
      <div>
        <h1>Welcome to Cookbook, please login.</h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
          />
          <input type="submit" value="Register" />

        </form>
      </div >
    )
  }
}
export default Register;
