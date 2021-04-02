import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dataService from './Services/localStorageService';

import Categories from './Components/Categories/Categories';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Add from './Components/AddRecipe/AddRecipe';
import firebase from 'firebase/app';
import CategoryView from './Components/BrowseCategories/BrowseCategories';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyDgrA-52_RdCBxqgbUIthLbsH3H-RyFlGM",
  authDomain: "cookbook-686f4.firebaseapp.com",
  projectId: "cookbook-686f4",
  storageBucket: "cookbook-686f4.appspot.com",
  messagingSenderId: "870132114458",
  appId: "1:870132114458:web:1b101d2f55969a4e80dda3"
});


const user = dataService.getUserData();
const value = user ? true : false;

function App() {
  const recipes = [];
  useEffect(() => {
    firebase.firestore().collection('Recipes').get()
      .then((res) => {
        res.docs.forEach((x) => {
          let data = x.data();
          recipes.push({ id: x.id, ...data });
        })
        return recipes;
      }, [])
  })

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
              recipeList={recipes}
            />
          }} />
          <Route path="/login"
            render={() =>
              <Login
                loggedIn={loggedIn}
                setLogged={log}
                saveUser={dataService.saveUserData}
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
          <Route exact path="/recipes/browse" component={Categories} />
          <Route path="/recipes/add"
            render={() => {
              return <Add
                getUser={dataService.getUserData}
              />
            }} />

          <Route path="/recipes/browse/:name"
            render={() => {
              return <CategoryView
                recipeList={recipes}

              />
            }} />
          <Route path="/recipes/:recipeId"
            render={() => {
              return <CategoryView
                recipeList={recipes}

              />
            }} />

        </Switch>
      </div>
    </div>

  );
}

export default App;
