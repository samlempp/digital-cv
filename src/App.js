import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <Navigation />
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
