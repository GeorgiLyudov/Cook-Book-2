// import { Tile } from 'react-native-elements';
import './Categories.css'
function Categories() {

  return (
    <div className="categories">
      <h1>Choose a category to browse:</h1>
      <div className="row-1">
        <div className="category">
          <img alt="img" src="../images/chicken.png" />
          <div>Poultry</div>
        </div>
        <div className="category">
          <img alt="img" src="../images/pork.png" />
          <div>Pork</div>
        </div>
        <div className="category">
          <img alt="img" src="../images/asian.png" />
          <div>Asian</div>
        </div>
        <div className="category">
          <img alt="img" src="../images/soup.png" />
          <div>Soups</div>
        </div>
      </div>
      <div className="row-2">

        <div className="category">
          <img alt="img" src="../images/beef.png" />
          <div>Beef</div>
        </div>
        <div className="category">
          <img alt="img" src="../images/vegeterian.png" />
          <div>Vegetarian</div>
        </div>
        <div className="category">
          <img alt="img" src="../images/italian.png" />
          <div>Italian</div>
        </div>
        <div className="category">
          <img alt="img" src="../images/dessert.png" />
          <div>Desserts</div>
        </div>
      </div>
    </div>
  )
}

export default Categories;