import { Link } from 'react-router-dom'
import Recipe from '../Recipe/RecipeItem'
import React, { Component } from 'react';
import Login from '../Login/Login'

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

          this.state.fetchInProgress ? <h1>Loading!</h1>
            :
            < div >
              {
                !this.props.loggedIn ?
                  <div> <h1>Welcome to Cookbook. </h1>
                    <h2>Discover the wonderful world of cooking. Please login so that you can browse and add recipes.</h2>
                    <Login loggedIn={this.props.loggedIn} setLogged={this.props.setLogged} saveUser={this.props.saveUser} />
                  </div> :
                  <div>
                    <h2>You are now logged in! Click the link below to add a recipe!</h2>
                    <Link to="/recipes/add" >Add a recipe</Link>
                    {
                      recipes.map((recipes) => {
                        return (<Recipe URL={recipes.imageUrl} name={recipes.name} summary={recipes.summary} key={recipes.summary} id={recipes.id} />)
                      })
                    }
                  </div>
              }

            </div >
        }

      </div>

    )
  }
}

export default Home;