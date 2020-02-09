import React from 'react';
import { Link } from 'react-scroll';

import '../mobileMenu/sideDrawer.css';

const sideDrawer = props => {

    let drawerClasses=['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open']
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li className="navbar-item">
                    <Link
                        onClick={props.click}
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
                        onClick={props.click}
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
                        onClick={props.click}
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
                        onClick={props.click}
                        activeClass="active"
                        to="contact-section"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default sideDrawer;