import React from 'react';
import redalert from './Red Alert.png'

function Landing() {
    return (
        <div class = "landingcontainer">
            <div class = "landing">
                <div class = "title">
                    <img src = {redalert} class = "redalert" alt="redalert"></img>
                    <h1>The world as we know it is under threat.</h1>
                    <img src = {redalert} class = "redalert" alt="redalert"></img>
                </div>
                <div class = 'content'>
                    <p>
                        For years, the government has been decieving us. <br /> <br></br>
                        They've concealed the truth, marshalling the full forces of the deep state to <b>swindle us</b>. 
                        We've been entrapped within their web of lies with no hope of ever being able to escape. The orchestrators?
                        The NSA, the CIA, the FBI, NASA, and even the <b>United Nations</b>. Millions of conspirators,
                        billions of pieces of forged evidence, and trillions of dollars spent.
                        The opposition was insurmountable. We would forever be helpless lambs, held hostage by the governments that were <b>sworn to protect us</b>. <br></br> <br></br>
                        But no longer.
                    </p>
                    <h1>Wake up.</h1>
                    <p>
                        It's time for you to see through the lies and deceit. After minutes of tireless investigation and mountains of evidence 
                        drawn from the latest and most reputable pseudoscience, we've uncovered the shocking truth.
                    </p>
                    <button>Interested?</button>
                </div>
            </div>
        </div>
    )
}

export default Landing