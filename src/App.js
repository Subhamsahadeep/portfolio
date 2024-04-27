import "./scss/App.scss";
import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import PortfolioComponent from "./components/portfolio";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/portfolio" component={PortfolioComponent} />
      <Route path="*">
        <Redirect to="/portfolio" />
      </Route>
    </BrowserRouter>
  );
}

export default App;
