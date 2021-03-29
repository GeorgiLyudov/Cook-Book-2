

const Home = ({
  loggedIn
}) => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h2>Most popular this week: </h2>
      <h3>{loggedIn}</h3>  


    </div>
  )
}

export default Home;