import React from 'react'
import logo from './images/logo.png';

function Nav () {
    return (
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
    )
}

export default Nav