import { Link } from 'react-router-dom';
import './RecipeItem.css';

function Recipe({ URL, name, summary, id }) {
  const path = "/recipes/" + id;
  return (
    <div className="recipeItem">
      <div className="recipeText">

      <h3>{name}</h3>
      <p>{summary}</p>
      <Link to={path}><button className="recipeLink">View Recipe &gt;&gt;</button></Link>
      </div>
      
      <Link to={path}>
        <img src={URL} alt="img" className="recipeTile recipeItemChild" />
      </Link>
    
    </div>
  )
}

export default Recipe;