import './Header.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import firebase from 'firebase';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }

  }
  logout() {
    this.setState({loggedIn: false});
    firebase.auth().signOut().then(() => {
    })
    .catch((err) => console.log(err));
  }
  render() {
    if (this.state.loggedIn) {
      return <ul className="nav">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/categories" className="nav-item">Categories</Link>
        <Link to="/users/:userId" className="nav-item">My profile</Link>
        <Link to="/logout" className="nav-item" onClick={this.logout.bind(this)}>Logout</Link>
      </ul >
    } else {
      return (
        <ul className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/register" className="nav-item" onClick={() => this.setState({ loggedIn: false })}>Register</Link>
        </ul >
      );

    }
  }

  // }
  // function Header({
  //   loggedIn
  // // }) {
  // const[logged, setLogged] = useState(loggedIn);

  // if(logged) {
  //   console.log('still logged in');
  //   return <ul className="nav">
  //     <Link to="/" className="nav-item">Home</Link>
  //     <Link to="/categories" className="nav-item">Categories</Link>
  //     <Link to="/users/:userId" className="nav-item">My profile</Link>
  //     <Link to="/logout" className="nav-item">Logout</Link>
  //   </ul >
  // } else {
  // console.log('here');
  // return (
  //   <ul className="nav">
  //     <Link to="/" className="nav-item">Home</Link>
  //     <Link to="/login" className="nav-item">Login</Link>
  //     <Link to="/register" className="nav-item" onClick={() => setLogged(false)}>Register</Link>
  //   </ul >
  // );

}


export default Header