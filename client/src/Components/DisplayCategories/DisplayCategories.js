import { Link } from 'react-router-dom';
function DisplayCategories({ name }) {
  let category = '/recipes/browse/' + name
  return (
      <Link to={category} className="categoryLinkItem">{name}</Link>

  )
}

export default DisplayCategories;