import './Register.css';
import { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import { Redirect } from 'react-router';
class Register extends Component {
  constructor(props) {
    super(props);

    console.log(props.setLogged);
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
      })
      .then(() => this.props.setLogged())
      .catch((error) => {
        console.log(`${error.code}: ${error.message}`);
      });
  }

  // const onChangeHandler = (e) => {
  //   setemail(e.target.value);
  // }
  render() {
    const loggedIn = this.props.loggedIn;
    if (loggedIn) {
      console.log(loggedIn);
      return <Redirect to="/" />;
    } else {
      console.log(loggedIn);

      return (
        <div>
          <h1>Welcome to Cookbook, please login.</h1>
          <form onSubmit={this.onSubmitHandler}>
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
            <input type="submit" value="Login" />

          </form>
        </div >
      )
    }
  }
}

export default Register;