import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Landing from './Landing.js'
import Blog from './Blog.js'
import TakenDown from "./TakenDown.js"
import About from "./About.js"

import './App.css';

function App () {
  return (
    <div className="App">
      <Router>
        <Route path = "/" exact>
          <Landing />
        </Route>
        <Route path = "/home">
          <Blog />
        </Route>
        <Route path = "/latestresearch">
          <TakenDown name = "Latest Research"/>
        </Route>
        <Route path = "/failedcoverups">
          <TakenDown name = "Failed Government Coverups"/>
        </Route>
        <Route path = "/about">
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
