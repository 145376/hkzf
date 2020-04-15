import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//导入组件
import Home from "./pages/Home";
import City from "./pages/City";
import Map from "./pages/Map";
import NotFond from "./pages/NotFond";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Redirect exact from="/" to="/home"></Redirect>
            <Route path="/home" component={Home}></Route>
            <Route path="/city" component={City}></Route>
            <Route path="/map" component={Map}></Route>
            <Route component={NotFond}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
