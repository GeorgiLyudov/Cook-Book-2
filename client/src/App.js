import './App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
const props = {
  loggedIn: false
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" render={(props) => 
          <Home loggedIn={false} />
        } />

      </Switch>
    </div>
  );
}

export default App;
