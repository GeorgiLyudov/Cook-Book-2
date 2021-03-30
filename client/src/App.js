import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import dataService from './Services/localStorageService';

import Categories from './Components/Categories/Categories';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Add from './Components/AddRecipe/AddRecipe'



const user = dataService.getUserData();
const value = user ? true : false;
function App() {
  const [loggedIn, setLogged] = useState(value);
  const log = () => { setLogged(x => !x) };
  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        setLogged={log}
        clearUser={dataService.clearUserData}
      />
      <div className="wrapper">

        <Switch>
          {/* <Route exact path="/"
          component={Home}
          loggedIn={loggedIn}
          setLogged={log}
        /> */}

          <Route path="/" exact render={() => (
            <Home loggedIn={loggedIn} setLogged={log} />
          )} />
          {/* <Route path="/login"
          component={Login}
          loggedIn={loggedIn}
          setLogged={log}
          saveUser={dataService.saveUserData}
        /> */}
          <Route path="/login"
            render={() =>
              <Login
                loggedIn={loggedIn}
                setLogged={log}
                saveUser={dataService.saveUserData}
              />
            } />
          {/* <Route path="/register"
          component={Register}
          loggedIn={loggedIn}
          setLogged={log}
          saveUser={dataService.saveUserData}
        /> */}
          <Route path="/register"
            render={() =>
              <Register
                loggedIn={loggedIn}
                setLogged={log}
                saveUser={dataService.saveUserData}
              />
            } />
          <Route path="/logout"
            render={() => {
              <Home
                loggedIn={loggedIn}
                setLogged={log}
              />
            }} />
          <Route path="/recipes/browse" component={Categories} />
          <Route path="/recipes/add" component={Add} />

        </Switch>
      </div>
    </div>

  );
}

export default App;
