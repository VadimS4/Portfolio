import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';

import '../styling/projects.css';

class Projects extends Component {
    render() {
        return(
            <div className="projects-section" id="projects">
                <div className="projectsTitle">
                    <h1>Projects</h1>
                    <hr className="projectsHR"></hr>
                </div>
                <section className="projectCards">
                    <article className="card">
                        <div className="individual_card">
                            <picture className="thumbnail">
                                <img src={require('../images/FishLand.png')} alt="fishland"></img>
                                <div className="card-content">
                                    <h2 className="cardTitle">FishLand</h2>
                                    <hr className="titleHR"></hr>
                                    <p>FishLand is an application that takes information about fishing and allows users to discover fish species along with good information about the fish and how to go fishing for it.</p>
                                    <hr></hr>
                                    <p>
                                        After learning DOM manipulation, I learned the library React, and along with that, Redux. This was just an option for me, but I wanted to learn as much new skills as possible, so I tackled the challenge and learned Redux. FishLand was developed using Ruby on Rails for the backend, Postgres for database management, and React / Redux on the Frontend. FishLand is also an application where I utilized OAuth and learned how to create a secure login feature. I was able to experiment with the Web Scraper Mechanize and built my API using the information that I scraped. Creative features were added such as bookmarking functions, and user profiles / accounts.
                                    </p>
                                    <hr></hr>
                                    <p className="technologies" >Javascript, React, Redux, Ruby on Rails, Mechanize, CSS, OAuth, Postgres</p>
                                    <div className="demo-buttons">
                                        <div className="fishland-github-buttons">
                                            <Icon name="github" size="large" className="demo-icons"/>
                                            <a href="https://github.com/VadimS4/Fishland-frontend" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Frontend</button></a>
                                            <a href="https://github.com/VadimS4/Fishland-backend" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Backend</button></a>
                                        </div>
                                        <div>
                                            <Icon name="computer" size="large" className="demo-icons"/>
                                            <a href="https://fishland-application.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Live Demo</button></a>
                                        </div>
                                    </div>
                                </div>
                            </picture>
                        </div>
                    </article>
                    <article className="card">
                        <div className="individual_card">
                            <picture className="thumbnail">
                                <img src={require('../images/CarFinder.png')} alt="fishland"></img>
                                <div className="card-content">
                                    <h2 className="cardTitle">CarFinder</h2>
                                    <hr className="titleHR"></hr>
                                    <p>CarFinder is an application for anyone who is interested in listing a vehicle and receiving feedback from other users.</p>
                                    <hr></hr>
                                    <p>
                                        CarFinder is an application built after learning the Model - View - Controller structure. With the Backend on Ruby on Rails, and the Frontend on Ruby, the API and Database were developed to accommodate users. User login functionality was built using BCrypt for a safe account login. I learned a lot of CSS through trial and error and was able to style the UI with custom CSS. Full CRUD was implemented leaving a full working platform for users to utilize.
                                    </p>
                                    <hr></hr>
                                    <p className="technologies">Ruby on Rails, CSS, BCrypt, CRUD, MVC</p>
                                    <div className="demo-buttons">
                                        <div>
                                            <Icon name="github" size="large" className="demo-icons"/>
                                            <a href="https://github.com/calebwatters/Carfinder" target="_blank" rel="noopener noreferrer"><button className="projectButton"> GitHub</button></a>
                                        </div>
                                        <div>
                                            <Icon name="computer" size="large" className="demo-icons"/>
                                            <a href="https://still-plateau-78887.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Live Demo</button></a>
                                        </div>
                                        <div>
                                            <Icon name="youtube" size="large" className="demo-icons"/>
                                            <a href="https://www.youtube.com/watch?v=sSO9WuqW_FM&t=2s" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Video Demo</button></a>
                                        </div>
                                    </div>
                                </div>
                            </picture>
                        </div>
                    </article>
                    <article className="card">
                        <div className="individual_card">
                            <picture className="thumbnail">
                                <img src={require("../images/NoteMinder.png")} alt="fishland"></img>
                                <div className="card-content">
                                    <h2 className="cardTitle">NoteMinder</h2>
                                    <hr className="titleHR"></hr>
                                    <p>NoteMinder is an application that takes Apple's "Notes" and "Reminder" applications and combines the utility of both applications.</p>
                                    <hr></hr>
                                    <p>
                                        After utilizing what I learned from Ruby on Rails, I used that knowledge to learn JavaScript. For NoteMinder, I gained valuable experience in new JavaScript practices such as DOM manipulation and fetching API’s. I utilized JavaScript’s built in functions like setTimeout and setInterval and was able to develop an alarm emitting function in the NoteMinder app. The Backend was built with Ruby on Rails, and the Frontend with Vanilla JavaScript. I used custom CSS to style out the UI and implemented full CRUD for users to be able to enjoy the application with full functionality.
                                    </p>
                                    <hr></hr>
                                    <p className="technologies">Javascript, Ruby on Rails, CSS, DOM, CRUD</p>
                                    <div className="demo-buttons">
                                        <div>
                                            <Icon name="github" size="large" className="demo-icons"/>
                                            <a href="https://github.com/dtFocuS/noteminder-front-end" target="_blank" rel="noopener noreferrer"><button className="projectButton"> GitHub</button></a>
                                        </div>
                                        <div>
                                            <Icon name="youtube" size="large" className="demo-icons"/>
                                            <a href="https://www.youtube.com/watch?v=CUi3I-lQxiE&feature=youtu.be" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Video Demo</button></a>
                                        </div>
                                    </div>
                                </div>
                            </picture>
                        </div>
                    </article>
                    <article className="card">
                        <div className="individual_card">
                            <picture className="thumbnail">
                                <img src={require('../images/NewYorkTimes.png')} alt="fishland"></img>
                                <div className="card-content">
                                    <h2 className="cardTitle">NYTimes Bookmarking Tool</h2>
                                    <hr className="NYTtitleHR"></hr>
                                    <p>The NYTimes Bookmark Tool is a CLI application written in Ruby that allows users to interact with the New York Times Top Stories API.</p>
                                    <hr></hr>
                                    <p>
                                        The NYTimes Bookmarking Tool was an application built on the basis of practicing Object Oriented Programming. This application also uses REST API services from the New York Times to collect and present data. The CLI app uses a secure login system, where you can create an account and access the top New York Times stories.
                                    </p>
                                    <hr></hr>
                                    <p className="technologies">Ruby, NYT API</p>
                                    <div className="demo-buttons">
                                        <div>
                                            <Icon name="github" size="large" className="demo-icons"/>
                                            <a href="https://github.com/milandhar/guided-module-one-project-assessment-seattle-web-career-042219" target="_blank" rel="noopener noreferrer"><button className="projectButton"> GitHub</button></a>
                                        </div>
                                        <div>
                                            <Icon name="youtube" size="large" className="demo-icons"/>
                                            <a href="https://www.youtube.com/watch?v=3lnWob63pY4" target="_blank" rel="noopener noreferrer"><button className="projectButton"> Video Demo</button></a>
                                        </div>
                                    </div>
                                </div>
                            </picture>
                        </div>
                    </article>
                    {/* <Card.Group >
                        <Card className="Card">
                            <Image src={require('../images/FishLand.png')} wrapped-ui={false} />
                            <Card.Content>
                                <Card.Header textAlign="center">FishLand</Card.Header>
                                <Card.Description textAlign="center">
                                    FishLand is an application that takes information about fishing and allows users to discover fish species along with good information about the fish and how to go fishing for it.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Javascript, React, Redux, Ruby on Rails, Mechanize, CSS</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github"/>
                                <a href="https://github.com/VadimS4/Fishland-frontend" target="_blank" rel="noopener noreferrer" >Frontend / </a>
                                <a href="https://github.com/VadimS4/Fishland-backend" target="_blank" rel="noopener noreferrer" > Backend</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="computer" />
                                <a href="https://fishland-application.herokuapp.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
                            </Card.Content>
                        </Card>
                        <Card className="Card">
                            <Image src={require('../images/CarFinder.png')} wrapped-ui={false} />
                            <Card.Content>
                                <Card.Header textAlign="center">CarFinder</Card.Header>
                                <Card.Description textAlign="center">
                                    CarFinder is an application for anyone who is interested in listing a vehicle and receiving feedback from other users.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Ruby on Rails, CSS, BCrypt</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github" />
                                <a href="https://github.com/calebwatters/Carfinder" target="_blank" rel="noopener noreferrer" >GitHub</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="computer" />
                                <a href="https://still-plateau-78887.herokuapp.com" target="_blank" rel="noopener noreferrer" >Live Demo</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="youtube" />
                                <a href="https://www.youtube.com/watch?v=sSO9WuqW_FM&t=2s" target="_blank" rel="noopener noreferrer" >Video Demo</a>
                            </Card.Content>
                        </Card>
                        <Card className="Card">
                            <Image src={require("../images/NoteMinder.png")}/>
                            <Card.Content>
                                <Card.Header textAlign="center">NoteMinder</Card.Header>
                                <Card.Description textAlign="center">
                                    NoteMinder is an application that takes Apple's "Notes" and "Reminder" applications and combines the utility of both applications.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Javascript, CSS</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github" />
                                <a href="https://github.com/dtFocuS/noteminder-front-end" target="_blank" rel="noopener noreferrer" >GitHub</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="youtube" />
                                <a href="https://www.youtube.com/watch?v=CUi3I-lQxiE&feature=youtu.be" target="_blank" rel="noopener noreferrer" >Video Demo</a>
                            </Card.Content>
                        </Card>
                        <Card className="Card">
                            <Image src={require('../images/NewYorkTimes.png')}/>
                            <Card.Content>
                                <Card.Header textAlign="center">NYTimes Bookmarking Tool</Card.Header>
                                <Card.Description textAlign="center">
                                    The NYTimes Bookmark Tool is a CLI application written in Ruby that allows users to interact with the New York Times Top Stories API.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <p>Ruby, NYT API</p>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="github" />
                                <a href="https://github.com/milandhar/guided-module-one-project-assessment-seattle-web-career-042219" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Card.Content>
                            <Card.Content textAlign="center" extra>
                                <Icon name="youtube" />
                                <a href="https://www.youtube.com/watch?v=3lnWob63pY4" target="_blank" rel="noopener noreferrer">Video Demo</a>
                            </Card.Content>
                        </Card>
                    </Card.Group> */}
                </section>
                <div className="heroku_warning">
                    <p>Website's are hosted using Heroku and may take a few minutes to spin up! Thanks for being Patient.</p>
                </div>
            </div>
        )
    }
}

export default Projects;