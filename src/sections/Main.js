import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
// import { Link } from 'react-scroll';

import '../styling/main.css';

class Main extends Component {
    render() {
        return(
            <div className="main-section" id="main">
                <div className="main-content">
                    <h1 className="name">Vadim Stakhnyuk</h1>
                    <h2 className="title">Software Engineer</h2>
                    <div className="icons">
                        <Button href="https://github.com/VadimS4" target="_blank" className="githubButton">
                            <Icon link size="huge" name="github" />
                        </Button>
                        <Button href="https://www.linkedin.com/in/vadimstakhnyuk/" target="_blank" className="linkedinButton">
                            <Icon link size="huge" name="linkedin" />
                        </Button>
                        <Button href="https://twitter.com/VadimStakh" target="_blank" className="twitterButton">
                            <Icon link size="huge" name="twitter" />
                        </Button>
                        <Button href="https://medium.com/@vstakhnyuk" target="_blank" className="mediumButton">
                            <Icon link size="huge" name="medium" />
                        </Button>
                    </div>
                    <div className="resume">
                        <p>View <a href="https://drive.google.com/file/d/185jtuIG7QptsBfIDyk7Hkd8JmG4uOV3w/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Resume</a></p>
                    </div>
                </div>
                {/* <div className="downArrow">
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    ><Icon link size="huge" name="angle down"/></Link>
                </div> */}
            </div>
        )
    }
}

export default Main;