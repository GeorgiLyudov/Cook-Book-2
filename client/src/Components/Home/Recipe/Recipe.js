
function Recipe({ URL,name, summary }) {
  return (
    <div>
      
      <img src={URL} alt="img" />
      <h3>{name}</h3>
      <p>{summary}</p>
    </div>
  )
}

export default Recipe;