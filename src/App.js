import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Projects from './Projects';
import GameCorner from './GameCorner';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Switch>
            <Route path="/AboutMe">
              <AboutMe/>
            </Route>
            <Route path="/Projects">
              <Projects/>
            </Route>
            <Route path="/GameCorner">
              <GameCorner/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route>
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
