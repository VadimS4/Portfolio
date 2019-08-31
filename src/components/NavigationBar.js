import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Main</Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Projects</Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About</Link>
                    </li>
                    <li className="navbar-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar;