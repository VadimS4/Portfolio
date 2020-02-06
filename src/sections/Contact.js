import React, { Component } from 'react';
import Icon from '@iconify/react';
import email from '@iconify/icons-mdi/email-edit';
import phone from '@iconify/icons-el/phone';
import location from '@iconify/icons-entypo/location';

import '../styling/contact.css';
// import { Link } from 'react-scroll';

class Contact extends Component {
    render() {
        return(
            <div className="contact-section">
                <div className="contact-Title">
                    <h1>Contact Me</h1>
                    <hr className="contactHR"></hr>
                </div>
                <div className="contact-info">
                    <div className="contact-block">
                        <div className="email">
                            <Icon className="contact-icons" icon={email} width={80} height={80} />
                            <p>Send me an <a className="emailA" href="mailto: vstakhnyuk@outlook.com"> Email</a></p>
                        </div>
                        <div className="phone">
                            <Icon className="contact-icons" icon={phone} width={70} height={70} />
                            <a className="phoneA" href="tel: 425-772-0086">(425) 772-0086</a>
                        </div>
                        <div className="location">
                            <Icon className="contact-icons" icon={location} width={60} height={60} />
                            <p>Located in Seattle, WA</p>
                        </div>
                    </div>
                    <div className="seattleImage">
                        <img className="seattle-img" src={require("../images/seattle_background.jpg")} alt=""></img>
                    </div>
                </div>
                {/* <div className="backtotop-icon">
                    <Link
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <div className="backtotop">
                            <div className="backtotop-morph"></div>
                        </div>
                    </Link>
                </div> */}
            </div>
        )
    }
}

export default Contact;