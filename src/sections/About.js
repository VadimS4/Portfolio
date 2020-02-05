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
                        <p>I am a Software Engineer with strong technical skills in Ruby on Rails, JavaScript, React, Redux, HTML, and CSS. I also have experience with databases, SQL, hosting technologies such as Heroku, and various styling libraries. </p>
                        <p>I was a student at The Flatiron School in the Full Stack Software Engineering program where I learned full stack web development along with relevant and modern web development techniques. I embrace the will to keep learning and add value to myself by growing my skill-set.</p>
                        <p>I take ideas and turn them into stunning websites!</p>
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