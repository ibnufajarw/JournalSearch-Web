import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { journals } from "./dummyData";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Navbar journals={journals} toggleTheme={toggleTheme} />{" "}
        <Switch>
          <Route path="/" exact>
            <Home journals={journals} />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
