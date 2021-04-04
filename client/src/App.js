import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import dataService from './Services/localStorageService';

// import components
import Categories from './Components/Categories/Categories';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Add from './Components/AddRecipe/AddRecipe';
import CategoryView from './Components/CategoryPage/CategoryPage';
import RecipePage from './Components/RecipePage/RecipePage';
import Discover from './Components/Discover/Discover';


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
          <Route path="/" exact render={() => {
            return <Home
              loggedIn={loggedIn}
              setLogged={log}
              saveUser={dataService.saveUserData}

            />
          }} />
          <Route path="/login"
            render={() =>
              <Login
                loggedIn={loggedIn}
                setLogged={log}
                saveUser={dataService.saveUserData}
                clearUser={dataService.clearUserData}

              />
            } />
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
          <Route path="/recipes/browse/:name"
            render={() => {
              return <CategoryView />
            }} />
          <Route path="/recipes/browse"
            render={() => {
              return <Categories
                loggedIn={loggedIn}
              />
            }} />
          <Route path="/recipes/add"
            render={() => {
              return <Add
                getUser={dataService.getUserData}
              />
            }} />

          <Route path="/recipes/discover"
            render={() => {
              return <Discover />
            }} />
          <Route path="/recipes/:recipeId"
            render={() => {
              return <RecipePage
                user={user}

              />
            }} />

        </Switch>
      </div>
    </div>

  );
}

export default App;
