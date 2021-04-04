import { Link } from 'react-router-dom'
import Recipe from '../RecipeItem/RecipeItem'
import React, { Component } from 'react';
import Login from '../Login/Login'
import './Home.css';

let recipes = [];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      fetchInProgress: true
    }
  }
  componentDidMount() {
    let list = []
    fetch("http://localhost:9000/recipes/getAll")
      .then(res => res.json())
      .then(res => {
        res.forEach((x) => {
          list.push(x);
          recipes = list;
        })
        this.setState({ fetchInProgress: false })
      }
      )
  };
  render() {
    return (
      <div>
        {

          this.state.fetchInProgress ? <h1 className="formContainer">Loading!</h1>
            :
            < div >
              {
                !this.props.loggedIn ?
                  <div className="formContainer" > <h2>Welcome to Cookbook. </h2>
                    <p>Discover the wonderful world of cooking. Please login so that you can browse and add recipes.</p>
                    <Login loggedIn={this.props.loggedIn} setLogged={this.props.setLogged} saveUser={this.props.saveUser} />
                  </div> :
                  <div>
                    <div className="formContainer">
                      <h2>Welcome back!</h2>
                      <p>Have you cooked anything delicious since you last logged in? Share it with us! Click the button below to add a recipe!</p>
                      <Link to="/recipes/add" ><button className="addDiscoverButton">Add a recipe</button></Link>
                    </div >
                    <div className="recipeWrapper">
                      <div className="formContainer">
                        <h2>Your favourite categories</h2>
                        <p>Here are some of our favourite recipies for the categories you like.</p>
                        {
                          recipes.map((recipes) => {
                            return (<Recipe URL={recipes.imageUrl} name={recipes.name} summary={recipes.summary} key={recipes.summary} id={recipes.id} />)
                          })
                        }
                      </div>
                    </div>
                  </div>
              }

            </div >
        }

      </div>

    )
  }
}

export default Home;