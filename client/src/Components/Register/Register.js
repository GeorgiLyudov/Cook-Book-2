import './Register.css';
import { Redirect } from 'react-router';

function Register({ loggedIn, saveUser, setLogged }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let data = { email, password }

    fetch("http://localhost:9000/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.body);
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
          <input type="submit" value="Register" className="blueButton"/>

        </form>
      </div >
    )
  }
}
export default Register;
