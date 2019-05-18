import React, {Component} from "react";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          className="app"
          data-spy="scroll"
          data-target=".navbar"
          data-offset="70"
        >
          <div className="app-header">
            <NavigationBar />
          </div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
          <footer className="app-footer" />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
