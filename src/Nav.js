import React from 'react'
import logo from './images/logo.png';
import mobile_menu_icon from "./images/mobile menu icon.png"
import { useLocation } from 'react-router-dom'


function Link(props) {
    let location = useLocation();
    let className = "link";
    if(props.href === location.pathname){
        className += " active"
    }
    return (
        <li className = {className} style = {props.style}>
            <a href = {props.href}>{props.text}</a>
        </li>
    )
}
class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
        }
    }
    toggleActive (oldState) {
        if (oldState === true) {
            this.setState({menuActive: false})
        } else {
            this.setState({menuActive: true})
        }
    }
    render () {
        let img_style = {
            height: "7vh",
            width: "auto",
            marginRight: this.props.marginRight
        }
        let img_hidden_style = {
            height: "7vh",
            width: "auto",
            marginRight: this.props.marginRight,
            opacity: 0.5,
        }
        let link_container_style = {
            position: "absolute",
            zIndex: "5000",
            top: "10vh",
            right: 0,
            backgroundColor: "rgba(27, 27, 27, 0.892)",
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            color: "white",
        }
        let link_style = {
            color: "white",
            textDecoration: "none",
            margin: "2vw 2vh"

        }
        let menu_button = <img src = {mobile_menu_icon} alt = "" 
                            style = {this.state.menuActive ?  img_hidden_style : img_style}
                            onClick = {() => this.toggleActive(this.state.menuActive)}></img>
        let mobile_links = (
            <div style = {link_container_style}>
                <a href = "/home" style = {link_style}>Home</a>
                <a href = "/latestresearch" style = {link_style}>Latest Research</a>
                <a href = "/failedcoverups" style = {link_style}>Failed Government Coverups</a>
                <a href = "/about" style = {link_style}>About</a>
            </div>
        )
        return (
            <>{menu_button}{this.state.menuActive ?  mobile_links : <></>}</>
        )
    }

}
function MenuLinks (props) {
    if (props.device === "phone") {
        return (
            <MobileMenu marginRight = "2vw" />
        )
    } else if (props.device === "tablet") {
        return (
            <MobileMenu marginRight = "5vw" />
        )
    } else {
        return (
            <>
            <Link href = "/home" text = "Home"/>
            <Link href = "/latestresearch" text = "Latest Research"/>
            <Link href = "/failedcoverups" text = "Failed Government Coverups"/>
            <Link href = "/about" text = "About"/>
            </>
        )
    }
}
class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.mediaQuery = {
            tablet: 770,
            phone: 590,
        };
        let enable = true;
        if (this.props.width < this.mediaQuery.tablet) {
            enable = false;
        }
        this.state = {
          previous_scroll_position: window.pageYOffset,
          visible: true,
          enable_hide_animation: enable,
        };
    }
    handleScroll = () => {
        const { previous_scroll_position } = this.state
        const current_scroll_position = window.pageYOffset;
        const visible =  previous_scroll_position > current_scroll_position;
      
        this.setState({
            previous_scroll_position: current_scroll_position,
            visible
        });
    }
    componentDidMount() {
        if (this.state.enable_hide_animation) {
            window.addEventListener("scroll", this.handleScroll);
        }
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render () {
        if (this.props.width < this.mediaQuery.phone) {
            let nav_style = {
                height: "10vh",

                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }
            let logo_div_style = {
                width: "80vw",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            }
            let logo_style = {
                height: "4vh",
                width: "auto",
                marginLeft: "3vw",
                marginRight: "2vw",
            }
            return (
                <ul className = {this.state.visible ? "nav" : "nav hidden"} style = {nav_style}>
                    <div style = {logo_div_style}>
                        <img src = {logo} alt = "logo" className = "logo" style = {logo_style}></img>
                        <div className = "titlecontainer">
                            <h3 style = {{fontWeight: "normal", fontSize: "large", marginTop: "10px"}}>Conspiracy Slayers</h3>
                            <p style = {{fontSize: "x-small"}}>The Truth: Plane and Simple</p>
                        </div>
                    </div>
                    <MenuLinks device = "phone"/>
                </ul>
            )
        } else if (this.props.width < this.mediaQuery.tablet) {
            let nav_style = {
                height: "10vh",

                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }
            let logo_div_style = {
                width: "80vw",
                height: "10vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center"
            }
            let logo_style = {
                height: "4vh",
                width: "auto",
                marginLeft: "4vw",
                marginRight: "2vw"
            }
            return (
                <ul className = {this.state.visible ? "nav" : "nav hidden"} style = {nav_style}>
                    <div style = {logo_div_style}>
                        <img src = {logo} alt = "logo" className = "logo" style = {logo_style}></img>
                        <div className = "titlecontainer">
                            <h3 style = {{fontWeight: "normal", fontSize: "large", marginTop: "10px"}}>Conspiracy Slayers</h3>
                            <p style = {{fontSize: "normal"}}>The Truth: Plane and Simple</p>
                        </div>
                    </div>
                    <MenuLinks device = "tablet"/>
                </ul>
            )
        } else {
            let nav_style = {
                height: "10vh",

                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
            }
            return (
                <ul className = {this.state.visible ? "nav" : "nav hidden"} style = {nav_style}>
                    <li><img src = {logo} alt = "logo" className = "logo"></img></li>
                    <li className = "titlecontainer">
                        <h3>Conspiracy Slayers</h3>
                        <p className = "tagline">The Truth: Plane and Simple</p>
                    </li>
                    <MenuLinks />
                </ul>
            )
        }
    }
}

export default Nav