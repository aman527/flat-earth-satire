import React from 'react';
import logo from "./images/logo.png"
import github from "./images/github.png"

const Footer = () => {
    return (
        <div className = "footer">
            <div>
                <img src = {logo} alt = "" className = "logo"></img>
                <p>Conspiracy Slayers</p>
            </div>
            <p>Created by Aman Choudhri</p>
            <div>
                <p>View Project Source:</p>
                <a href = "https://github.com/aman527/flat-earth-satire"><img src = {github} alt = "" className = "github"></img></a>
            </div>
        </div>
    )
}
export default Footer