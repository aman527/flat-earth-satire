import React from 'react';
import redalert from './images/Red Alert.png'
import orangealert from './images/Orange Alert.png'

function Alert(props) {
    const imgstyle = {
        width: props.width,
        position: "absolute",
        marginTop: props.marginTop,
        left: props.left,
        transition: "opacity 1s ease-in-out",
        margin: 0,
    }
    return (
        <div className='alert'>
            <img style = {imgstyle} src = {orangealert} className = "orangealert" alt="orangealert"></img>
            <img style = {imgstyle} src = {redalert} className = "redalert" alt="redalert"></img>
        </div>
    )
}
function TitleBar(props) {
    let title_style = font_size => { 
        return({
            width: "100vw",
            backgroundColor: "black",
            color: "white",
            height: "20vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "normal",
            fontSize: font_size,
        })
    }
    if (props.width < props.mediaQuery.phone) {
        return (
            <div style = {title_style("1.5vh")}>
                <Alert width = "10vw" marginTop = "-4vh" left = "8vw"/>
                <h1 style = {{width: "40vw"}}>The world as we know it is in grave danger.</h1>
                <Alert width = "10vw" marginTop = "-4vh" left = "82vw"/>
            </div>
        )
    } else if (props.width < props.mediaQuery.tablet) {
        return (
            <div style = {title_style("1.5vh")}>
                <Alert width = "10vw" marginTop = "-5vh" left = "5vw"/>
                <h1 style = {{width: "40vw"}}>The world as we know it is in grave danger.</h1>
                <Alert width = "10vw" marginTop = "-5vh" left = "85vw"/>
            </div>
        )
    } else {
        return (
            <div style = {title_style("2vh")}>
                <Alert width = "10vw" marginTop = "-4vw" left = "10vw"/>
                <h1>The world as we know it is in grave danger.</h1>
                <Alert width = "10vw" marginTop = "-4vw" left = "83vw"/>
            </div>
        )
    }
}
class Landing extends React.Component {
    constructor(props) {
        super(props);
    
        this.mediaQuery = {
          tablet: 800,
          phone: 590,
        };
    
        this.state = {
          windowWidth: null
        };
    }

    componentDidMount() {
        this.setState({windowWidth: document.body.clientWidth})
        window.addEventListener('resize', () => {
            this.setState({windowWidth: document.body.clientWidth})
        });
    }

    render () {
        return (
            <div className = "landingcontainer">
                <TitleBar width = {this.state.windowWidth} mediaQuery = {this.mediaQuery}/>
                <div className = 'content'>
                    <p>
                        For years, the government has been decieving us. <br /><br />

                        They've concealed the truth, marshalling the full forces of the deep state to <b>swindle us</b>. 
                        We've been entrapped within their web of lies with no hope of ever being able to escape.
                    </p>
                    <p>
                        The orchestrators?
                        The NSA, the CIA, the FBI, NASA, and even the <b>United Nations</b>. Millions of conspirators,
                        billions of pieces of forged evidence, and trillions of dollars spent.
                        The opposition was insurmountable. We would forever be helpless lambs, held hostage by the governments that were <b>sworn to protect us</b>. <br></br> <br></br>
                        But no longer.
                    </p>
                    <h2>Wake up.</h2>
                    <p>
                        It's time for you to see through the lies and deceit. After <b>minutes</b> of tireless investigation and mountains of evidence 
                        drawn from the <b>latest and most reputable</b> pseudoscience, we've uncovered the shocking truth.
                    </p>
                    <a href = "/home" className = "interested">Interested?</a>
                </div>
            </div>
        )
    }
}

export default Landing