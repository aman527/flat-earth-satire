import React from "react";

import Nav from "./Nav"
import Footer from "./Footer"

function About () {
    return (
        <div className = "about-page">
            <Nav />
            <div className = "styledbackground">
                <div className = "top"></div>
                <div className = "middle"></div>
                <div className = "bottom"></div>
            </div>
            <div className = "about-container">
                <div className = "about">
                    <h2>Who We Are</h2>
                    <p><em style = {{color: "#087E8B", fontWeight: 'bold'}}>Conspiracy Slayers</em> is a collection of individuals determined to seek the truth at all costs. We're convinced that the United States government is operating a "global" conspiracy to swindle the public into believing the Earth is round.</p>
                    <p>We aren't fooled by their convoluted lies and elaborate deceptions. Lives dominated by paranoia have trained us to believe nothing and trust even less, except for that which passes through our careful scrutiny.</p>
                    <p>We're very thorough, considering all favorable evidence before formulating a position, but we really don't need to be. We know we're correct. How? Anything disagrees with our view is just a government ploy.</p>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About