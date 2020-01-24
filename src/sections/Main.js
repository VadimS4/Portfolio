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
                        <p>View <a href="https://s3.amazonaws.com/attachments.angel.co/4133052-76ce77ba1eae12c8e8a316570c26da76.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJS6W3HGZGRJIRBTA%2F20200124%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200124T103255Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=4e9499843d769167a86148c6639cd22b18bdac3849596bf9fce7f15688b95fe8" target="_blank" rel="noopener noreferrer"> Resume</a></p>
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