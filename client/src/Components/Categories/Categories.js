import './Categories.css'
import { Link, Redirect } from 'react-router-dom';
function Categories({ loggedIn }) {
  if (!loggedIn) {
    return <Redirect to="/login" />

  }
  return (
    <div className="categories">
      <h1>Choose a category to browse:</h1>
      <div className="row-1">
        <div className="category">
          <Link to="/recipes/browse/Poultry"> <img className ="categoryTile"alt="img" src="../images/chicken.png" /> </Link>
          <div>Poultry</div>
        </div>
        <div className="category">
          <Link to="/recipes/browse/Pork"> <img className ="categoryTile"alt="img" src="../images/pork.png" /> </Link>
          <div>Pork</div>
        </div>
        <div className="category">
          <Link to="/recipes/browse/Asian"> <img className ="categoryTile"alt="img" src="../images/asian.png" /> </Link>
          <div>Asian</div>
        </div>
        <div className="category">
          <Link to="/recipes/browse/Soups"> <img className ="categoryTile"alt="img" src="../images/soup.png" /> </Link>
          <div>Soups</div>
        </div>
      </div>
      <div className="row-2">

        <div className="category">
          <Link to="/recipes/browse/Beef"> <img className ="categoryTile"alt="img" src="../images/beef.png" /> </Link>
          <div>Beef</div>
        </div>
        <div className="category">
          <Link to="/recipes/browse/Vegetarian"> <img className ="categoryTile"alt="img" src="../images/vegeterian.png" /> </Link>
          <div>Vegetarian</div>
        </div>
        <div className="category">
          <Link to="/recipes/browse/Italian"> <img className ="categoryTile"alt="img" src="../images/italian.png" /> </Link>
          <div>Italian</div>
        </div>
        <div className="category">
          <Link to="/recipes/browse/Desserts"> <img className ="categoryTile"alt="img" src="../images/dessert.png" /> </Link>
          <div>Desserts</div>
        </div>
      </div>
    </div>
  )
}

export default Categories;