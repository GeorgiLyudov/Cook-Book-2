

function Home({
  loggedIn,
  setLogged
}) {
  console.log();
  if(!loggedIn){
    return (
      <div>
      <h1>Welcome!</h1>
      <h2>You are not logged in! </h2>
      <button onClick={setLogged}>Click me!</button>  
    </div>
    )
  } else {

    return (
      <div>
      <h1>Welcome!</h1>
      <h2>You are now logged in!</h2>
      <button onClick={setLogged}>Click me!</button>  

    </div>
  )
}
}

export default Home;