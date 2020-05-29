import React from 'react';
import Landing from './Landing.js'
import Blog from './Blog.js'
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path = "/" exact component = {Landing}></Route>
        <Route path = "/blog" component = {Blog}></Route>
      </Router>
    </div>
  );
}

export default App;
