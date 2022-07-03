import './scss/App.scss';
import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import PortfolioComponent from './components/portfolio';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/portfolio" component={PortfolioComponent} />
        <Route exact path="*">
          <Redirect to="/portfolio" />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
