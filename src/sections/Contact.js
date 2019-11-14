import React, { Component } from 'react';
import Icon from '@iconify/react';
import email from '@iconify/icons-mdi/email-edit';
import phone from '@iconify/icons-el/phone';
import location from '@iconify/icons-entypo/location';

import '../styling/contact.css';

class Contact extends Component {
    render() {
        return(
            <div className="contact-section">
                <div className="contact-image" id="contact"></div>
                <div className="contact-info">
                    <div className="email">
                        <Icon icon={email} width={80} height={80} />
                        <div className="emailText"><p>Send me an <a href="mailto: vstakhnyuk@outlook.com">Email</a></p></div>
                    </div>
                    <div className="phone">
                        <Icon icon={phone} width={70} height={70} />
                        <div className="phoneText"><a href="tel: 425-772-0086">(425) 772-0086</a></div>
                    </div>
                    <div className="location">
                        <Icon icon={location} width={80} height={80} />
                        <div className="locationText"><p>Located in Seattle, WA</p></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;