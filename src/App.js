import './scss/App.scss';
import React, {Component} from "react";
import { Route, HashRouter, Switch,Redirect} from "react-router-dom";
import PortfolioComponent from './components/portfolio';
function App() {
  return (
    <div>
      <HashRouter>
              <Switch>
                <Route exact path="/Portfolio" component={PortfolioComponent} />
                <Route exact path="/">
                    <Redirect to="/Portfolio" />
                </Route>
              </Switch>
           </HashRouter>
    </div>
  );
}

export default App;
