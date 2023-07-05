import './scss/App.scss';
import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import PortfolioComponent from './components/portfolio';
import PortfolioNewComponent from './components/new';

function App() {
  return (
    
      <BrowserRouter>
        <Route exact path="/portfolio" component={PortfolioComponent} />
        <Route exact path="/new" component={PortfolioNewComponent} />
        {/* <Route exact path="*">
          <Redirect to="/portfolio" />
        </Route> */}
      </BrowserRouter>
  
  );
}

export default App;
