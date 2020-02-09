import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar';
import Main from './sections/Main';
import Projects from './sections/Projects';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer'
import SideDrawer from './components/mobileMenu/SideDrawer';
import Backdrop from './components/mobileMenu/BackDrop';
import './App.css';

class App extends Component { 
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  linkClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <NavigationBar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} click={this.linkClickHandler}/>
        {backDrop }
        <Main />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
