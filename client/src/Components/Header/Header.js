import './Header.css';
function Header() {

  return (
    <ul className="nav">
      <li className="nav-item"><a href="/">Home</a></li>
      <li className="nav-item"><a href="/login">Login</a></li>
      <li className="nav-item"><a href="/register">Register</a></li>
      <li className="nav-item"><a href="about.asp">About</a></li>
    </ul>
  );

};

export default Header