import './Header.css';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/database';

function Header({ loggedIn, setLogged }) {
  const logout = () => {
    window.localStorage.removeItem('user');
    firebase.auth().signOut().then(() => {
      setLogged();
    })
      .catch((err) => console.log(err));
  }
  if (loggedIn) {
    return <ul className="nav">
      <div className="left">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/recipes/browse" className="nav-item">Browse</Link>

      </div>
      <div className="right">

        <Link to="/users/:userId" className="nav-item">My profile</Link>
        <Link to="/" className="nav-item" onClick={logout}>Logout</Link>
      </div>
    </ul >
  } else {
    return (
      <ul className="nav">
      <div className="left">
        <Link to="/" className="nav-item" >Home</Link>
        <Link to="/recipes/browse" className="nav-item">Browse</Link>

      </div>

      <div className="right">
        <Link to="/register" className="nav-item" >Register</Link>
        <Link to="/login" className="nav-item" >Login</Link>
      </div>

      </ul >
    );

  }
}
export default Header