import React, {Component} from "react";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import {Container} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {

  componentDidMount(){
    AOS.init({
      duration : 1200
    })
  }

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
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
          <footer className="app-footer">
            <Container>
              <div className="d-sm-flex justify-content-between">
                <div className="footer-left">
                  <a href="#">Terms and conditions</a> 
                  <a href="#">Privacy</a>
                </div>
                <div className="footer-right">
                  <span>Follow</span>
                  <a href="#"><i className="fab fa-facebook"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </Container>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
