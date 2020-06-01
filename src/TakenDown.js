import React from "react"

import Nav from "./Nav"
import Footer from "./Footer"

import dod_logo from "./images/dod logo.png"

function TakenDown (props) {
    if (props.width < 600) {
        let takendown_style = {
            width: "80vw",
            height: "115vh",
            alignSelf: "center",
            marginTop: "2vh",
            marginBottom: "3vh",
            flexDirection: "column"
        }
        return (
            <div className = "takendown">
                <Nav width = {props.width}/>
                <div className = "message-container">
                    <div className = "takedown-message" style =  {takendown_style}>
                        <img src = {dod_logo} alt="" className = "dod-logo" style = {{height: "20vh", maxWidth: "50vw"}}></img>
                        <div>
                            <p>
                                This page, <em style = {{color: "#087E8B"}}>{props.name}</em>, has been automatically flagged and taken down in violation of 21 U.S. Code § 2311. Propaganda, libel, and seditious activities.*
                            </p>
                            <p>    
                                It's likely that this page contained information that was untrue, incited violence, or was disruptive to maintaining peace within the United States.
                            </p>
                            <p>
                                Your activity on this restricted page has been logged, and your personal information has been sent to the Department of Defense for evaluation. 
                                If your actions are deemed subversive to the goals of the Government of the United States, please be advised: NASA agents may locate and apprehend you to prevent any disruption to the wellbeing of the general public.
                            </p>
                            <p>
                                Please leave this site immediately.
                            </p>
                        </div>
                    </div>
                </div>
                <p className = "disclaimer" style = {{width: "80vw", alignSelf: "center", marginBottom: "2vh"}}>
                    *DISCLAIMER: the contents of this page were not actually removed by the United States Government or any other affiliated party. This graphic was created by <em>Conspiracy Slayers</em> for emphasis purposes only and in no way indicates any actions taken on behalf of the US Government.
                    <em> Conspiracy Slayers</em> does not endorse the impersonation of government officials or other official persons and does not take any responsibility for the actions of any reader who believes this page to have been taken down by the government.
                </p>
                <Footer width = {props.width}/>
            </div>
        )
    } else if (props.width < 800) {
        let takendown_style = {
            width: "80vw",
            height: "60vh",
            alignSelf: "center",
            marginTop: "2vh",
            marginBottom: "3vh",
            flexDirection: "column",
        }
        return (
            <div className = "takendown" style = {{height: "100vh"}}>
                <Nav width = {props.width}/>
                <div className = "message-container">
                    <div className = "takedown-message" style =  {takendown_style}>
                        <img src = {dod_logo} alt="" className = "dod-logo"></img>
                        <div>
                            <p>
                                This page, <em style = {{color: "#087E8B"}}>{props.name}</em>, has been automatically flagged and taken down in violation of 21 U.S. Code § 2311. Propaganda, libel, and seditious activities.*
                            </p>
                            <p>    
                                It's likely that this page contained information that was untrue, incited violence, or was disruptive to maintaining peace within the United States.
                            </p>
                            <p>
                                Your activity on this restricted page has been logged, and your personal information has been sent to the Department of Defense for evaluation. 
                                If your actions are deemed subversive to the goals of the Government of the United States, please be advised: NASA agents may locate and apprehend you to prevent any disruption to the wellbeing of the general public.
                            </p>
                            <p>
                                Please leave this site immediately.
                            </p>
                        </div>
                    </div>
                </div>
                <p className = "disclaimer" style = {{width: "80vw", alignSelf: "center", marginBottom: "2vh"}}>
                    *DISCLAIMER: the contents of this page were not actually removed by the United States Government or any other affiliated party. This graphic was created by <em>Conspiracy Slayers</em> for emphasis purposes only and in no way indicates any actions taken on behalf of the US Government.
                    <em> Conspiracy Slayers</em> does not endorse the impersonation of government officials or other official persons and does not take any responsibility for the actions of any reader who believes this page to have been taken down by the government.
                </p>
                <Footer width = {props.width}/>
            </div>
        ) 
    } else {
        return (
            <div className = "takendown" style = {{height: "100vh"}}>
                <Nav width = {props.width}/>
                <div className = "message-container">
                    <div className = "takedown-message">
                        <img src = {dod_logo} alt="" className = "dod-logo"></img>
                        <div>
                            <p>
                                This page, <em style = {{color: "#087E8B"}}>{props.name}</em>, has been automatically flagged and taken down in violation of 21 U.S. Code § 2311. Propaganda, libel, and seditious activities.*
                            </p>
                            <p>    
                                It's likely that this page contained information that was untrue, incited violence, or was disruptive to maintaining peace within the United States.
                            </p>
                            <p>
                                Your activity on this restricted page has been logged, and your personal information has been sent to the Department of Defense for evaluation. 
                                If your actions are deemed subversive to the goals of the Government of the United States, please be advised: NASA agents may locate and apprehend you to prevent any disruption to the wellbeing of the general public.
                            </p>
                            <p>
                                Please leave this site immediately.
                            </p>
                        </div>
                    </div>
                </div>
                <p className = "disclaimer">
                    *DISCLAIMER: the contents of this page were not actually removed by the United States Government or any other affiliated party. This graphic was created by <em>Conspiracy Slayers</em> for emphasis purposes only and in no way indicates any actions taken on behalf of the US Government.
                    <em> Conspiracy Slayers</em> does not endorse the impersonation of government officials or other official persons and does not take any responsibility for the actions of any reader who believes this page to have been taken down by the government.
                </p>
                <Footer width = {props.width}/>
            </div>
        )
    }
}

export default TakenDown