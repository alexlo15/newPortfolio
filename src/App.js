import React from 'react';
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  </Router>
  );
}

export default App;
