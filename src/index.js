import React, { useState } from 'react'; 
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './style.css'
import  NotFound  from './views/not-found'
import Home from './views/home'
import Reauthenticate from './views/Reauthenticate';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleReauthenticate = () => {
    alert('Reauthenticated successfully!');
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Reauthenticate onReauthenticate={handleReauthenticate} />
    <Switch>
        {/* <Route component={NotFound1} exact path="/not-found" /> */}
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
        </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
