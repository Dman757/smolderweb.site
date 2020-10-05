import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
          <Route
            exact
            path="/discord"
            component={() => {
              window.location.href = "https://discord.com/invite/EggNSQ6";
              return null;
            }}
          />
          <Route
            exact
            path="/reddit"
            component={() => {
              window.location.href = "https://www.reddit.com/r/Smolderweb/";
              return null;
            }}
          />

          <Route
            exact
            path="/forums"
            component={() => {
              window.location.href =
                "https://us.forums.blizzard.com/en/wow/c/smolderweb";
              return null;
            }}
          />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
