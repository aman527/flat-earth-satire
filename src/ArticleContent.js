import React from "react"

import pentagon_doc from './images/Top Secret Pentagon Document.jpg'
import obama_quote from './images/obama quote.jpeg'
import profile_pic from "./images/Anonymous Blue Icon.png"

export default function ArticleContent(props) {
    let img_style = props.shrink ? {width: "80vw", height: "auto"} : null
    return (
        <div className = "article" style = {props.shrink ? {width: "80%"} : null}>
            <p>
                <span className = "emphasized">DISCLAIMER</span>: The information you’re about to encounter is so top secret — and the government so intent on preventing its dissemination to the general public — that just by being on this site, you may be placing yourself into danger. 
                This site is an active hacking warzone, with government cyber firepower regularly being trained on our pages. 
                It takes a tireless effort to even maintain this site (after all, we’re conspiracy slayers, not IT professionals), so to defend it against the full brunt of the government onslaught would be impossible. 
                Be aware that at any given moment, the pages of this site could be compromised by government malware to steal your identity and hunt you down to prevent you from jeopardizing the success of their schemes.
            </p>
            <hr />
            <p>
                It’s time to rip away the veils that conceal the truth. Be warned: the extent of the conspiracy is so great that the government has been conditioning you since birth. There will be times in this article where you may question, where you may doubt, where you may even refuse to believe the simple explanation that lies before you. This is nothing but another trick to deceive you. Do <span className = "emphasized">not</span> be fooled. After all, who do you trust more: me, or the government?
            </p>
            <p>
                I’ll begin by detailing the countless hours of intensive and high stakes reporting I conducted to expose this government fraud. At every step of the way, I pulled information from only the most trustworthy of sources, so rest assured that what you’re about to read is indisputably accurate.
            </p>
            <p>
                I’ve always harbored suspicions that perhaps the government was trying to hide something from us, so I started aggressively searching for “failed government conspiracy coverups” on social media. As continued, I found progressively less and less evidence, a sure sign that I was on the right track. Lower quality evidence and less of it can only mean one thing: an increase in government censorship to prevent anyone from discovering the truth.
            </p>
            <p>
                Tens of Facebook posts later, I stumbled onto a virtually unknown blog article titled “TOP SECRET: what the government doesn’t want you to know!” I had struck gold. At the time, the blog had only 34 page views, so I had likely found it before the government agents could censor it. In the article, the author, who unfortunately posted anonymously, theorized that the United States government was hiding the truth about the shape of planet Earth from the people. He or she proposed that the Earth was not the globe we had all been led to believe, but instead a flat disc. Quite literally a world-altering revelation.
            </p>
            <p>
                I was immediately convinced, but since I firmly believe in the need for evidence, I decided to dig deeper. I searched Google for "flat Earth proof," and lo and behold, all three of the search results confirmed my new belief. The most obvious proof comes straight from 17th and 18th century philosophy: empiricism. Look out your window; walk around outside; climb atop a mountain and look out across the horizon. No matter what you try, you won’t find a trace of curvature! For a supposedly round Earth, that’s quite suspicious, no?
            </p>
            <p>
                At this point, you may be skeptical. You may even be considering clicking off this article. <span className = "emphasized">Don't</span>. Remember, the government has carefully crafted mental roadblocks in your psyche to prevent you from even questioning the sphericity of the Earth. They've conditioned you to be resistant to any thought they've deemed subversive to their facade, but they can't change what you see with your own two eyes. Set aside your doubt and <span className = "emphasized">trust me</span>.
            </p>
            <p>
                The next piece of evidence comes from within the iron walls of the government itself. An undercover agent in the Pentagon recently put up a Reddit post containing highly classified information gleaned from a perilous intelligence gathering operation. According to the anonymous source — who goes only by “xX_ProGamer24_Xx” to guard against government assassination attempts — he or she had been working in the Pentagon for over 20 years before commencing the operation. While this may seem suspicious considering the agent has since posted stating that he or she is a 13-year-old high school freshman, don’t be fooled: this is a but ruse to throw government spies off the scent.
            </p>
            <p>
                On the day of the operation, the agent bypassed the initial security check-in, then climbed into a ventilation duct in the bathroom. After shimmying down miles of piping, the agent reached sub-basement 3, where he or she cut one wire and shut down power to the entire building. One might think that the Pentagon's electrical grid would be more robust than to be incapacitated when a single wire is cut, but this agent clearly knew otherwise. After cutting the power, the agent had planned to take advantage of the ensuing chaos and photograph documents from the innermost chamber of the Pentagon, but his or her camera had been confiscated at the initial security checkpoint. The agent quickly adapted, however, fashioning a camera with 50x optical zoom capabilities out of a potato stolen from the kitchen before continuing the mission. After evading roving security guards and dodging AI-powered machine gun fire, the agent finally reached the central intelligence room, where he or she quickly snapped the following photo before being airlifted out.
            </p>
            <img src = {pentagon_doc} alt = "Pentagon TOP SECRET: Earth flat." className = 'pentagon-doc' style = {img_style}></img>
            <p>
                Indisputable, documentary proof from a Pentagon insider where the US government acknowledges that the Earth is flat. Still think it’s round?
            </p>
            <p>
                Well, not to discredit that heroic agent, but he or she didn’t really need to risk life and limb for proof of the conspiracy. Just recently, Barack Obama himself has been quoted admitting that the Earth is flat, using the same empiricist logic that I previously espoused. What more evidence can one need?
            </p>
            <img src = {obama_quote} alt = "Obama quoted saying the Earth is flat." className = "obama-quote" style = {img_style}></img>
            <p>
                An image like that just can&rsquo;t be faked with current technology, so these words must have come right from the Former President himself. Though the evidence in favor of a flat Earth is pretty unequivocal, let's just examine the counter-evidence for completeness' sake. After all, I <em>am</em> a proponent of well-evidenced and thorough argumentation.
            </p>
            <p>
                First of all, some proclaim that photographs depicting a round Earth taken by NASA "from space" clearly prove their claim. How <span className = "emphasized">na&iuml;ve</span>. Image forgery technology has advanced by leaps and bounds in the past few years, so producing a high-resolution image of a round Earth is now trivial for an organization with as much funding as NASA. Why should we blindly put our faith in these images from sources we don&rsquo;t know and which are plastered all over websites we don&rsquo;t trust?
            </p>
            <p>
                Another piece of &ldquo;evidence&rdquo; flat Earth deniers cite is the tale of the blogger Kayleigh Williams. In an attempt to determine the geometry of the Earth once and for all, Williams decided to journey across the entirety of the Earth&rsquo;s equator and film the whole trip. She reasoned that if she returned to the same location after traversing the equator, the Earth must be a sphere. While she claims in a follow-up blog post that she ended up returning to the same spot (with a video that seemed to corroborate the story), there&rsquo;s a <span className = "emphasized">simple explanation</span> for all this.
            </p>
            <p>
                The first segment of Williams's journey went according to plan, but the story gets more interesting as she approached the edge of the Earth. I suspect that the US Government stations military personnel and NASA employees along the edge to prevent any inquisitive souls from discovering the truth, so once Williams reached the edge, she must've been apprehended and tranquilized. At this point, it's clear that she was rushed to the other side of the flat Earth using an underground network of high-speed transportation tunnels, build by the government and concealed from the people. Her memories of the ordeal were erased using experimental mind-control drugs and the video footage was doctored to create the illusion of a smooth transition between locations. Williams was released to continue the remainder of her journey, and after reaching the location where she started, she concluded that the Earth was spherical. To the public, this story simply confirmed what they already "knew" and thus was of little note, so the tale largely faded away... just what the government wanted. The public (and Williams) were none the wiser to any of this deception, and the widespread belief in the round Earth remained unchallenged.
            </p>
            <p>
                That is, until now. Now, you know that our government — which is sworn by the Constitution to protect us — is conspiring to keep us in the dark. Now, you know what lies behind the veil that was so carefully crafted to blind you. Now, you know <span className = "emphasized">the truth</span>. At least, you should. If you <em>still</em> refuse to accept that the Earth is flat, don&rsquo;t even try emailing to convince me. Nothing can change my mind: <span className = "emphasized">I already know I&rsquo;m right</span>.
            </p>
            <hr />
            <div className = "about-card" style = {props.shrink ? {width: "90vw", marginTop: "3vh"} : null}>
                <img src = {profile_pic} alt = "" className = "profile-picture" style = {props.shrink ? {width: "15vw"} : null}></img>
                <div className = "author-info">
                    <p className = "author" style = {props.shrink ? {fontSize: "large"} : null}>Anonymous <span className = "email" style = {props.shrink ? {fontSize: "x-small"} : null}>internettroll@notrealemail.com</span></p>
                    <p className = "description" style = {props.shrink ? {fontSize: "x-small"} : null}>M.D., Ph.D, Astronaut, Conspiracy Slayer</p>
                </div>
            </div>
        </div>
    )
}