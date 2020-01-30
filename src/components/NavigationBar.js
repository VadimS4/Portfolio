import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../styling/navbar.css'

class NavigationBar extends Component {


    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 150,
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
            <div className="navbar" id="navbar">
                <h2 className="myName" id="myName">Vadim Stakhnyuk</h2>
                <header id="navigationBar">
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
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default NavigationBar;