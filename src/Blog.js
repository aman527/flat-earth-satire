import React from 'react';
import flat_earth_overhead from './images/flat_earth_overhead.png'
import pentagon_doc from './images/Top Secret Pentagon Document.jpg'
import trump_quote from './images/trump quote.jpeg'
import Nav from './Nav.js'

function Blog() {
    return (
        <div class = "blog">
            <Nav />
            <div className = "imageheader">
                <img src = {flat_earth_overhead} alt = "flat earth" className = 'flat-earth-overhead'></img>
                <h1>Exposing the Con-sphere-acy</h1>
            </div>
            <div className = "article">
                <p>
                    <span style = {{color: "#087E8B", fontWeight: "bold"}}>DISCLAIMER</span>: The information you’re about to encounter is so top secret — and the government so intent on preventing its dissemination to the general public — that just by being on this site, you may be placing yourself into danger. 
                    This site is an active hacking warzone, with government cyber firepower regularly being trained on our pages. 
                    It takes a tireless effort to even maintain this site (after all, we’re conspiracy slayers, not IT professionals), so to defend it against the full brunt of the government onslaught would be impossible. 
                    Be aware that at any given moment, the pages of this site could be compromised by government malware to steal your identity and <b>hunt you down</b> to prevent you from jeopardizing the success of their schemes.
                </p>
                <hr />
                <p>
                    It’s time to rip away the veils that conceal the truth. Be warned: the extent of the government conspiracy is so great that they have been <b>conditioning you since birth</b>. There will be times in this article where you may question, where you may doubt, where you may even refuse to believe the simple explanation that lies before you. This is nothing but another government trick to deceive you. Do <b>not</b> be fooled. After all, who do you trust more: me, or the government?
                </p>
                <p>
                    I’ll begin by walking you through the countless hours of intensive and high stakes reporting I conducted to expose this government fraud. At every step of the way, I pulled information from only the most trustworthy of sources, so rest assured that what you’re about to read is indisputably accurate.
                </p>
                <p>
                    After exhaustively searching Google for “evidence for conspiracies,” I began to harbor suspicions that perhaps the government was trying to hide something from us. I wasn’t quite sure what exactly, but I knew I was onto something. As I continued my researching, I found progressively less and less evidence, a sure sign that I was on the right track. Lower quality evidence and less of it can only mean one thing: an increase in government censorship to prevent anyone from discovering the truth.
                </p>
                <p>
                    Tens of Facebook posts later, I stumbled onto a virtually unknown blog article titled “TOP SECRET: what the government doesn’t want you to know!” I had struck gold. Since the blog had only 34 page views, I had likely found it before the government agents could censor it. In the article, the author, who unfortunately posted anonymously, theorized that the United States government was hiding the truth about the shape of planet Earth from the people. He or she proposed that the Earth was not the globe we had all been led to believe, but instead a flat disc. Quite literally a world-altering revelation.
                </p>
                <p>
                    I knew immediately that this was the irrefutable truth, but to remove any hint of doubt, I searched for “proof of a flat earth.” The most obvious piece of evidence comes straight from 17th and 18th century philosophy: empiricism. Look out your window; walk around outside; climb atop a mountain and look out across the horizon. No matter what you try, you won’t find a trace of curvature! For a supposedly round Earth, that’s quite suspicious, no?
                </p>
                <p>
                    At this point, you may be skeptical. You may even be considering clicking off this article. <strong>Don't</strong>. Remember, the government has carefully crafted mental roadblocks in your psyche to prevent you from even questioning the sphericity of the earth. They've conditioned you to be resistant to any thought they've deemed subversive to their facade, but they can't change what you see with your own two eyes. Set aside your doubt and <strong>trust me</strong>.
                </p>
                <p>
                    The next piece of evidence comes from within the iron walls of the government itself. An undercover agent in the Pentagon recently put up a Reddit post containing highly classified information gleaned from a perilous intelligence gathering operation. According to the anonymous source – who goes only by “xX_DemonGamer24_Xx” to guard against government assassination attempts – he or she had been working in the Pentagon for over 20 years before commencing the operation. While this may seem suspicious considering the agent has since posted stating that he or she is a 13-year-old high school freshman, don’t be fooled: this is a ruse from a highly intelligent agent to throw government spies off the scent. If anything, it makes the story <em>more</em> credible.
                </p>
                <p>
                    On the day of the operation, the agent bypassed the initial security check-in, then climbed into a ventilation duct in the bathroom. After shimmying down miles of piping, the agent reached sub-basement 3, where he or she cut one wire and shut down power to the entire building. The agent had planned to take advantage of the ensuing chaos and photograph documents from the innermost chamber of the Pentagon. However, the agent’s camera had been confiscated at the initial security checkpoint, so he or she fashioned a camera with 50x optical zoom capabilities out of a potato stolen from the cafeteria. After evading roving security guards and dodging AI-powered machine gun fire, the agent finally reached the central intelligence room, where he or she quickly snapped the following photo before being airlifted out.
                </p>
                <img src = {pentagon_doc} alt = "Pentagon TOP SECRET: Earth flat." className = 'pentagon-doc'></img>
            </div>
        </div>
    )
}

export default Blog