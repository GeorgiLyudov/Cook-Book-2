import { Link } from 'react-router-dom';

function Recipe({ URL, name, summary, id }) {
  const path = "/recipes/" + id;
  return (
    <div>
      <Link to={path}>
        <img src={URL} alt="img" />
      </Link>
      <h3>{name}</h3>
      <p>{summary}</p>
    </div>
  )
}

export default Recipe;