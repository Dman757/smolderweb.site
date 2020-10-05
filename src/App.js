import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";

const localStorageTheme = localStorage.getItem("theme");
if (localStorageTheme) {
  toggleTheme(localStorageTheme);
}

function toggleTheme(toggleOverride = "") {
  if (toggleOverride) {
    document.documentElement.setAttribute("data-theme", toggleOverride);
    localStorage.setItem("theme", toggleOverride);
    return;
  }

  const theme = document.documentElement.getAttribute("data-theme");

  switch (theme) {
    case "horde":
      document.documentElement.setAttribute("data-theme", "alliance");
      localStorage.setItem("theme", "alliance");
      break;
    case "alliance":
      document.documentElement.setAttribute("data-theme", "horde");
      localStorage.setItem("theme", "horde");
      break;
    default:
      document.documentElement.setAttribute("data-theme", "alliance");
      localStorage.setItem("theme", "alliance");
      break;
  }
}

export const ThemeContext = React.createContext({
  setTheme: () => {},
});

function App() {
  return (
    <ThemeContext.Provider value={{ setTheme: toggleTheme }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route
            exact
            path="/undisputed"
            component={() => {
              window.location.href = "https://discord.gg/Vxw32cW";
              return null;
            }}
          />
          <Route
            exact
            path="/und"
            component={() => {
              window.location.href = "https://discord.gg/Vxw32cW";
              return null;
            }}
          />
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
