import React from 'react'
import logo from './images/logo.png';
import { useLocation } from 'react-router-dom'


function Link(props) {
    let location = useLocation();
    let className = "link";
    if(props.href === location.pathname){
        className += " active"
    }
    return (
        <li className = {className}>
            <a href = {props.href}>{props.text}</a>
        </li>
    )
 }
class Nav extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          previous_scroll_position: window.pageYOffset,
          visible: true
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
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    render () {
        return (
            <ul className = {this.state.visible ? "nav" : "nav hidden"}>
                <li><img src = {logo} alt = "logo" className = "logo"></img></li>
                <li className = "titlecontainer">
                    <h3>Conspiracy Slayers</h3>
                    <p className = "tagline">The Truth: Plane and Simple</p>
                </li>
                <Link href = "/home" text = "Home"/>
                <Link href = "/latestresearch" text = "Latest Research" />
                <Link href = "/failedcoverups" text = "Failed Government Coverups" />
                <Link href = "/about" text = "About" />
            </ul>
        )
    }
}

export default Nav