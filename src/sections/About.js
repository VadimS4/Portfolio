import React, { Component } from 'react';
import Icon from '@iconify/react';
import redux from '@iconify/icons-logos/redux';
import javascript from '@iconify/icons-logos/javascript';
import ruby from '@iconify/icons-logos/ruby';
import rails from '@iconify/icons-logos/rails';
import react from '@iconify/icons-logos/react';
import github from '@iconify/icons-logos/github-icon';
import mysql from '@iconify/icons-logos/mysql';
import css from '@iconify/icons-logos/css-3';
import html from '@iconify/icons-logos/html-5';
import postgresql from '@iconify/icons-logos/postgresql';

import '../styling/about.css';

class About extends Component {
    render() {
        return(
            <div className="about-section" id="about">
                <h1 className="about-title">About</h1>
                <hr className="aboutHR"></hr>
                <div className="about-with-img">
                    <div className="about-image">
                        <img src={require('../images/Software-Engineer-image.jpg')} alt=""></img>
                    </div>
                    <div className="about-description">
                        <p>I am a Software Engineer specializing in Full Stack Web Development. I have strong technical skills in Ruby on Rails, JavaScript, React, Redux, HTML, CSS, SQL, Postgres, and much more!  </p>
                        <p>I was a student in The Flatiron School's Full Stack Software Engineering program. I learned Full Stack Web Development along with relevant and modern Web Development practices. Through this journey, I strengthened my passion for Software Engineering.
                        </p>
                        <p>I am not afraid to take on new challenges, and I am always striving to go above and beyond to learn something new and bring more value to my skillset.</p>
                        <p>I turn ideas into a reality!</p>
                    </div>
                </div>
                <div className="technology-icons">
                    <Icon icon={javascript} width={75} height={75} className="icon"/>
                    <Icon icon={react} width={75} height={75} className="icon"/>
                    <Icon icon={redux} width={75} height={75} className="icon"/>
                    <Icon icon={ruby} width={75} height={75} className="icon"/>
                    <Icon icon={rails} width={75} height={75} className="icon"/>
                    <Icon icon={github} width={75} height={75} className="icon"/>
                    <Icon icon={mysql} width={75} height={75} className="icon"/>
                    <Icon icon={postgresql} width={75} height={75} className="icon"/>
                    <Icon icon={css} width={75} height={75} className="icon"/>
                    <Icon icon={html} width={75} height={75} className="icon"/>
                </div>
            </div>
        )
    }
}

export default About;