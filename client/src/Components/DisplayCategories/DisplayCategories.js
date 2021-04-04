import { Link } from 'react-router-dom';
function DisplayCategories({ name }) {
  let category = '/recipes/browse/' + name
  return (
    <div>
      <Link to={category} className="recipeLink">{name}</Link>

    </div>


  )
}

export default DisplayCategories;