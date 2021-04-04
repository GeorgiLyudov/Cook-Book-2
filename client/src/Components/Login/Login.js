import './Login.css';
import { Redirect } from 'react-router';

function Login({ loggedIn, setLogged, saveUser }) {
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
        console.log('Success:', res);
        setLogged()
        saveUser(email, res._id)

      })
      .catch((error) => {
        console.error('Error:', error);
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
