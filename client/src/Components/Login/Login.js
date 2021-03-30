import './Login.css';
import firebase from "firebase";
import { Redirect } from 'react-router';
import { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    console.log(this.props.setLogged);
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.username.value;
    let password = e.target.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => { this.props.setLogged() })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        return;
      });
  }
  render() {
    if (this.props.loggedIn) {
      return <Redirect to={{
        pathname: "/"
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