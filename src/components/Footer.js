import React from 'react';
import { Link } from 'react-scroll';

import '../styling/footer.css';

const Footer = props => (
    <footer className="footer">
        <small>&copy; Copyright 2020, Vadim Stakhnyuk</small>
        <div className="upArrow">
            <Link
                onClick={props.click}
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >
                <div className="icon-up"></div>
            </Link>
        </div>
    </footer>
)

export default Footer;