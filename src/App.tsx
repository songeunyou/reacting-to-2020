import React from 'react';
import { BrowserRouter as Router, Route, RouteComponentProps } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialPage from './pages/TutorialPage';
import Completed from './pages/Completed';
import logo from './logo.svg';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={HomePage}/>
          {/*for url  www.x.com/tutorial/1  => id '1' will be passed to TutorialPage component*/}
          <Route path="/tutorial/:tutorialStep" render={({ match }) => <TutorialPage id={match.params.tutorialStep}/>}/>
          <Route exact path="/success" component={Completed}/>
      </Router>
    </div>
  );
}

export default App;
