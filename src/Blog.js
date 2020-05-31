import React from 'react';

import Nav from './Nav.js'
import Footer from './Footer.js'
import ArticleContent from "./ArticleContent.js"

import flat_earth_overhead from './images/flat_earth_overhead.png'

function Blog() {
    return (
        <div className = "blog">
            <Nav />
            <div className = "imageheader">
                <img src = {flat_earth_overhead} alt = "flat earth" className = 'flat-earth-overhead'></img>
                <h1>Exposing the Con-sphere-acy</h1>
            </div>
            <ArticleContent />
            <Footer />
        </div>
    )
}

export default Blog