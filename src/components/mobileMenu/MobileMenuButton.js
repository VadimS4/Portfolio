import React from 'react';

import './mobileMenuButton.css'

const mobileMenuButton = props => (
    <button className="btn-toggle" onClick={props.click}>
        <div className="btn-toggle-line"></div>
        <div className="btn-toggle-line"></div>
        <div className="btn-toggle-line"></div>
    </button>
)

export default mobileMenuButton;