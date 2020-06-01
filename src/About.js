import React from "react";

import Nav from "./Nav"
import Footer from "./Footer"

function About (props) {
    let mediaQuery = {
        tablet: 770,
        phone: 590,
    };
    if (props.width < mediaQuery.phone) {
        return (
            <div className = "about-page" style = {{fontSize: "small"}}>
                <Nav width = {props.width}/>
                <div className = "styledbackground">
                    <div className = "top"></div>
                    <div className = "middle"></div>
                    <div className = "bottom"></div>
                </div>
                <div className = "about-container" style = {{width: "80vw"}}>
                    <div className = "about" style = {{height: "70vh"}}>
                        <h2>Who We Are</h2>
                        <p><em style = {{color: "#087E8B", fontWeight: 'bold'}}>Conspiracy Slayers</em> is a collection of individuals determined to seek the truth at all costs. We're convinced that the United States government is operating a "global" conspiracy to swindle the public into believing the Earth is round.</p>
                        <p>We aren't fooled by their convoluted lies and elaborate deceptions. Lives dominated by paranoia have trained us to believe nothing and trust even less, except for that which passes through our careful scrutiny.</p>
                        <p>We're very thorough, making sure to consider all favorable evidence before formulating a position, but we really don't need to. We know we're correct. How, you might ask? Simple. Anything that disagrees with our view is <span className = "emphasized">just a government ploy.</span></p>
                        
                    </div>
                </div>
                <Footer width = {props.width}/>
            </div>
        )
    } else {
        return (
            <div className = "about-page">
                <Nav width = {props.width}/>
                <div className = "styledbackground">
                    <div className = "top"></div>
                    <div className = "middle"></div>
                    <div className = "bottom"></div>
                </div>
                <div className = "about-container" style = {{width: "60vw"}}>
                    <div className = "about">
                        <h2>Who We Are</h2>
                        <p><em style = {{color: "#087E8B", fontWeight: 'bold'}}>Conspiracy Slayers</em> is a collection of individuals determined to seek the truth at all costs. We're convinced that the United States government is operating a "global" conspiracy to swindle the public into believing the Earth is round.</p>
                        <p>We aren't fooled by their convoluted lies and elaborate deceptions. Lives dominated by paranoia have trained us to believe nothing and trust even less, except for that which passes through our careful scrutiny.</p>
                        <p>We're very thorough, making sure to consider all favorable evidence before formulating a position, but we really don't need to. We know we're correct. How, you might ask? Simple. Anything that disagrees with our view is <span className = "emphasized">just a government ploy.</span></p>
                        
                    </div>
                </div>
                <Footer width = {props.width}/>
            </div>
        )
    }
}

export default About