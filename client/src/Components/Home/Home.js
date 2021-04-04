import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import Login from '../Login/Login'
import './Home.css';
import DisplayCategories from '../DisplayCategories/DisplayCategories'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      localStorageUserFavourites: ''
    }


  }
  componentDidMount() {
    if (JSON.parse(localStorage.getItem('user'))) {
      this.setState({ localStorageUserFavourites: JSON.parse(localStorage.getItem('user')).user.favourites })

    }
  }

  render() {
    return (

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
                  {this.state.localStorageUserFavourites.length > 0 ? <div>

                    <h2>Favourite categories</h2>
                    <p>To browse your favourite categories, use the links below:</p>
                    {
                      this.state.localStorageUserFavourites.map((category) => {
                        return (<DisplayCategories name={category} key={category} />)
                      })
                    }
                  </div> : <p></p>
                  }
                </div>
              </div>
            </div>
        }

      </div >


    )
  }
}

export default Home;