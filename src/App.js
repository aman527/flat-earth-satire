import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Landing from './Landing.js'
import Blog from './Blog.js'
import TakenDown from "./TakenDown.js"
import About from "./About.js"

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: null,
    }
  }
  componentDidMount() {
    this.setState({windowWidth: document.body.clientWidth})
      window.addEventListener('resize', () => {
          this.setState({windowWidth: document.body.clientWidth})
      });
  }
  render () {
    return (
      <div className="App">
        <Router>
          <Route path = "/" exact>
            <Landing width = {this.state.windowWidth}/>
          </Route>
          <Route path = "/home">
            <Blog width = {this.state.windowWidth}/>
          </Route>
          <Route path = "/latestresearch">
            <TakenDown name = "Latest Research" width = {this.state.windowWidth}/>
          </Route>
          <Route path = "/failedcoverups">
            <TakenDown name = "Failed Government Coverups" width = {this.state.windowWidth}/>
          </Route>
          <Route path = "/about">
            <About width = {this.state.windowWidth}/>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
