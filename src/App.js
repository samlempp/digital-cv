import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navigation />
          <Home />
        </Route>
        <Route exact path="/projects">
          <Navigation />
          <Projects />
        </Route>
      </Switch>
    </>
  );
}

export default App;
