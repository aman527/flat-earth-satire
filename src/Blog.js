import React from 'react';
import logo from './images/logo.png';
import flat_earth_overhead from './images/flat_earth_overhead.png'

function Blog() {
    return (
        <div class = "blog">
            <ul className = "nav">
                <li><img src = {logo} alt = "logo" className = "logo"></img></li>
                <li className = "titlecontainer">
                    <h2>The Conspiracy Slayers</h2>
                    <p className = "tagline">The Truth: Plane and Simple</p>
                </li>
                <li className = "link"><a href = "/home">Home</a></li>
                <li className = "link"><a href = "/research">Latest Research</a></li>
                <li className = "link"><a href = "/knownconspiracies">Known Government Conspiracies</a></li>
                <li className = "link"><a href = "/about">About</a></li>
            </ul>
            <div className = "imageheader">
                <img src = {flat_earth_overhead} alt = "flat earth" className = 'flat-earth-overhead'></img>
                <h1>Exposing the Con-sphere-acy</h1>
            </div>
            <div className = "article">
                <h1>Exposing the Con-sphere-acy</h1>
                <p>
                    hello!
                </p>
            </div>
        </div>
    )
}

export default Blog