import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styling/navbar.css'

class NavigationBar extends Component {


    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            headerEl = document.getElementById("navbar"),
            nameAppear = document.getElementById("myName")

        if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller")
            nameAppear.classList.add("appear")
        } else {
            headerEl.classList.remove("smaller")
            nameAppear.classList.remove("appear")
        }
    }

    render() {
        return (
            <div className="navigation">
                <div className="navbar" id="navbar">
                    <h2 className="myName" id="myName">Vadim Stakhnyuk</h2>
                    <header className="navigationBar">
                        <div className="ULdiv">
                            <ul className="navbarUL">
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
                                        to="contact-section"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </header>
                </div>
                <div className="mobile-navbar">
                    <input type="checkbox" className="toggler"></input>
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
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
                                        to="contact-section"
                                        spy={true}
                                        smooth={true}
                                        offset={0}
                                        duration={500}
                                    >Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavigationBar;