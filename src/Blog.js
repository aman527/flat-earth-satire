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
                <p>
                    Before I begin, I'd like to warn you of what you're about to get yourself into. 
                    The information you’re about to encounter is so top secret — and the government so intent on preventing its dissemination to the general public — that just by being on this site, you may be placing yourself into danger. 
                    This site is an active hacking warzone, with government cyber firepower regularly being trained on our pages. 
                    It takes a tireless effort to even maintain this site (after all, we’re conspiracy slayers, not IT professionals), so to defend it against the full brunt of the government onslaught would be impossible. 
                    Be aware that at any given moment, the pages of this site could be compromised by government malware to steal your identity and <b>hunt you down</b> to prevent you from jeopardizing the success of their schemes.
                </p>
                <p>
                    If you’re still reading this, I applaud your determination and commitment to discover the reality that’s hidden behind scores of government coverups. 
                    To stand so adamantly in opposition to even the most closely guarded of government lies, you are undoubtedly a knight of truth.
                </p>
                <p>
                    It’s time to rip away the veils that conceal the truth. The extent of the government conspiracy is so great that they have been <b>conditioning you since birth</b>. There will be times in this article where you may question, where you may doubt, where you may even refuse to believe the simple explanation that lies before you. This is nothing but another government trick to deceive you. Do <b>not</b> be fooled. Countless hours of internet research have led to the creation of this article, so the information contained here is indisputably accurate. After all, who do you trust more: me, or the government?
                </p>
                <p>
                    Let’s begin. As you have probably gathered by now, the conspiracy in question aims to perpetuate the untrue belief that the Earth is a sphere. How exactly do I know this? I’ll walk you through it.
                </p>
                <p>
                    After exhaustively searching Google for “failed government coverups,” I began to harbor suspicions that perhaps the government was trying to hide something from us. I wasn’t quite sure what exactly, but I knew I was onto something. As I continued my researching, I found progressively less and less evidence, a sure sign that I was on the right track. Lower quality evidence and less of it can only mean one thing: an increase in government censorship to prevent anyone from discovering the truth.
                </p>
            </div>
        </div>
    )
}

export default Blog