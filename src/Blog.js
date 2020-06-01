import React from 'react';

import Nav from './Nav.js'
import Footer from './Footer.js'
import ArticleContent from "./ArticleContent.js"

import flat_earth_overhead from './images/flat_earth_overhead.png'

function Blog(props) {
    let shrink = props.width < 600;
    return (
        <div className = "blog">
            <Nav width = {props.width}/>
            <div className = "imageheader">
                <img src = {flat_earth_overhead} alt = "flat earth" className = 'flat-earth-overhead' style = {shrink ? {width: "50vw", height: "auto"} : null}></img>
                <h1 style = {shrink ? {fontSize: "x-large"} : null}>Exposing the Con-sphere-acy</h1>
            </div>
            <ArticleContent shrink = {shrink}/>
            <Footer width = {props.width}/>
        </div>
    )
}

export default Blog