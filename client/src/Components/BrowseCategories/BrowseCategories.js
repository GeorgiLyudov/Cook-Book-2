
import Recipe from '../Home/Recipe/Recipe'
import { useParams } from 'react-router-dom';
import './BrowseCategories.css'

function BrowseCategories({ recipeList }) {
  let { name } = useParams();
  const currentCategory = recipeList.filter(x => {
    return x.category === name
  })

  if (currentCategory.length === 0) {
    return <h2>Sorry! There are no recipes in this category yet.</h2>
  }
  return (
    <div className="categoryViewItem">
      { currentCategory.map((recipeItem) => {
        return (<Recipe URL={recipeItem.recipeImage} name={recipeItem.name} summary={recipeItem.summary} key={recipeItem.summary}  id={recipeItem.id}/>)
      })
      }
    </div>
  )
}

export default BrowseCategories;