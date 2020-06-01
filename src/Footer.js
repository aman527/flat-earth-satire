import React from 'react';
import logo from "./images/logo.png"
import github from "./images/github.png"

function Footer (props) {
    let mediaQuery = {
        tablet: 770,
        phone: 590,
    }
    if (props.width < mediaQuery.phone) {
        return (
            <div className = "footer" style = {{fontSize: "small"}}>
                <div>
                    <img src = {logo} alt = "" className = "logo" style = {{marginLeft: "3vw"}}></img>
                    <p>Conspiracy Slayers</p>
                </div>
                <p>Created by Aman Choudhri</p>
                <div>
                    <p>View Project Source:</p>
                    <a href = "https://github.com/aman527/flat-earth-satire"><img src = {github} alt = "" className = "github" style = {{marginRight: "3vw"}}></img></a>
                </div>
            </div>
        )
    } else {
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
}
export default Footer