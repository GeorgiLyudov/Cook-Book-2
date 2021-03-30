import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
function App() {
  const [loggedIn, setLogged] = useState(false);
  const log = () => { setLogged(x => !x) };
  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLogged={log} />
      <Switch>
        <Route path="/" exact render={(props) => (
          <Home {...props} loggedIn={loggedIn} setLogged={log} />
        )} />

        {/* <Route path="/login" component={Login} loggedIn={loggedIn} /> */}
        <Route path="/login" render={(props) =>
          <Login loggedIn={loggedIn} setLogged={log} />
        } />
        <Route path="/register" render={(props) =>
          <Register loggedIn={loggedIn} setLogged={log} />
        } />
        <Route path="/logout"  render={(props) => {
    // useHistory().push('/')

          return (<div className="App">
            <Home loggedIn={loggedIn} setLogged={log} />
          </div>)
        }} />

      </Switch>
    </div>
  );
}

export default App;
