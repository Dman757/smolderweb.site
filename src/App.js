import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage, { AnotherPage } from "./MainPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/another">
          <AnotherPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
