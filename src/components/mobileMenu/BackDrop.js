import React from 'react';

import '../mobileMenu/backDrop.css'

const backDrop = props => (
    <div className="backdrop" onClick={props.click}/>
)

export default backDrop;