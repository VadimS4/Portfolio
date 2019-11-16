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
                    <p>In college, I pursued Electrical Engineering. Required were some introductory programming courses which drew me into programming! In those courses, building out small GUI (graphic-user-interface) applications with Visual Basic proved to be much more engaging to me than working with electrical circuits. Everything clicked together and I knew I had a passion for coding. Watching my lines of code come to life in my applications became something that I really enjoy doing.</p>
                </div>
                <div className="icons">
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