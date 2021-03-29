import './Login.css';
import firebase from "firebase";
import { Redirect } from 'react-router';
import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    }
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.username.value;
    let password = e.target.password.value;
    this.setState({ loggedIn: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  }
  render() {
    const loggedIn = this.state.loggedIn;
    if (loggedIn) {
      return <Redirect to={{
        pathname: "/",
        state: {
          loggedIn: true
        }
      }} />;
    }
    return (<div>
      <h1>Welcome to Cookbook, please login.</h1>
      <form onSubmit={this.onSubmitHandler}>
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

}

// const onChangeHandler = (e) => {
//   setUsername(e.target.value);
// }

export default Login;