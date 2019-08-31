import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Main from './sections/Main';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Main />
        <Projects />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
