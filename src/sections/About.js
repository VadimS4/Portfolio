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

class About extends Component {
    render() {
        return(
            <div className="about-section" id="about">
                <div className="about-description">
                    <p>I am a Software Engineer with a deep desire to leverage my fluency in Russian and Ukrainian to make a deep impact in technology. </p> 
                    <p>In college, I planned to become an Electrical Engineer. After taking some electrical circuit classes, my desire for that path slowly died. I decided to pivot and started taking classes in computer science. Building out small GUI (graphic-user-interface) applications with Visual Basic proved to be much more engaging for me. Everything clicked together and I knew I had a passion for coding. I loved looking at a screen with multiple lines of multi-color words. I loved writing code and watching my code come to life.</p>
                    <p>In present day, I have strong technical skills in Ruby on Rails, JavaScript, React, Redux, HTML, and CSS. I also have experience using MySQL, PostgreSQL, Heroku, various styling frameworks </p>
                    <p>Currently, I am looking for new contract or full time, front-end or full stack software engineering and developer opportunities in the Greater Seattle Area.</p>
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