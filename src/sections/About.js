import React, { Component } from 'react';
// import IconRuby from 'react-devicon/ruby/plain-wordmark';
// import IconRails from 'react-devicon/rails/plain-wordmark';
// import IconNodejs from 'react-devicon/nodejs/original-wordmark';
// import IconJavascript from 'react-devicon/javascript/original';
// import IconReact from 'react-devicon/react/original-wordmark';
// import IconCss3 from 'react-devicon/css3/original-wordmark';
// import IconHtml5 from 'react-devicon/html5/original-wordmark';
// import IconPostgresql from 'react-devicon/postgresql/original-wordmark';
// import IconGit from 'react-devicon/git/original-wordmark';

class About extends Component {
    render() {
        return(
            <div className="about-section" id="about">
                <div className="about-description">
                    <p>I am a Software Engineer with a deep desire to leverage my fluency in Russian and Ukrainian to make a deep impact in technology. </p> 
                    <p>It has always been my dream to become some kind of engineer. While writing career goals in high school, writing down that I wanted to become an engineer always put a smile on my face. It kept me motivated and my desire to become an engineer grew everyday. </p>
                    <p>In college, I planned to become an Electrical Engineer. After taking some electrical circuit classes, my desire for that path slowly died. I decided to pivot and started taking classes in computer science. Building out small GUI (graphic-user-interface) applications with Visual Basic proved to be much more engaging for me. Everything clicked together and I knew I had a passion for coding. I loved looking at a screen with multiple lines of multi-color words. I loved writing code and watching my code come to life.</p>
                    <p>In present day, I have strong technical skills in Ruby on Rails, JavaScript, React, Redux, HTML, and CSS. I also have experience using MySQL, PostgreSQL, Heroku, various styling frameworks </p>
                    <p>Currently, I am looking for new contract or full time, front-end or full stack software engineering and developer opportunities in the Greater Seattle Area.</p>
                </div>
                {/* <div className="LanguageIcons">
                    <IconRuby width={100} height={100}/>
                    <IconRails width={100} height={100}/>
                    <IconNodejs width={100} height={100}/>
                    <IconJavascript width={100} height={100}/>
                    <IconReact width={100} height={100}/>
                    <IconCss3 width={100} height={100}/>
                    <IconHtml5 width={100} height={100}/>
                    <IconPostgresql width={100} height={100}/>
                    <IconGit width={100} height={100}/> 
                </div> */}
            </div>
        )
    }
}

export default About;