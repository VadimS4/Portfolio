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
import heroku from '@iconify/icons-logos/heroku';

import '../styling/about.css';

class About extends Component {
    render() {
        return(
            <div className="about-section" id="about">
                <div className="about-description">
                    <p>I am a Software Engineer with strong technical skills in Ruby on Rails, JavaScript, React, Redux, HTML, and CSS. I also have experience using MySQL, PostgreSQL, Heroku, and various styling frameworks. </p>
                    <p>In college, I pursued Electrical Engineering. In the process I took some introductory programming courses which drew me into programming! In those courses, I built out small GUI (graphic-user-interface) applications with Visual Basic. I really enjoyed the code writing process and watching the code that I had written come to life in all sorts of small applications. I decided to pivot my career and was part of The Flatiron School's Full Stack Software Engineering program where I learned to put my passion of software engineering into a professional skill!</p>
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
                    <Icon icon={heroku} width={75} height={75} className="icon"/>
                </div>
            </div>
        )
    }
}

export default About;