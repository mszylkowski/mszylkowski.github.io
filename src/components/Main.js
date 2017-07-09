import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
import Home from './Home';
import Bio from './Bio';
import Resume from './Resume';
import Skills from './Skills';
import NewProjects from './NewProjects';
import Contact from './Contact';
import BumperCars from './projects/BumperCars';
import PersonalWebsite from './projects/PersonalWebsite';
import RobotTest from './projects/RobotTest';
import ShpeApp from './projects/ShpeApp';
import SuperFlight from './projects/SuperFlight';
import TechMeIn from './projects/TechMeIn';
import Twentyfour from './projects/Twentyfour';
import VisionQuest from './projects/VisionQuest';
import YouWillCrash from './projects/YouWillCrash';

export default class Main extends Component {
  render () {
    console.log(this);
    return (
      <div className="page-container">
        <div className="navbar animated fadeInDown">
          <HashRouter>
            <NavLink exact to="/home" activeClassName="active-link animated rubberBand"><i className="fa fa-home"></i><p>Home</p></NavLink>
          </HashRouter>
          <HashRouter>
            <NavLink exact to="/bio" activeClassName="active-link animated rubberBand"><i className="fa fa-user"></i><p>Bio</p></NavLink>
          </HashRouter>
          <HashRouter>
            <NavLink exact to="/resume" activeClassName="active-link animated rubberBand"><i className="fa fa-file-text"></i><p>Resume</p></NavLink>
          </HashRouter>
          <HashRouter>
            <NavLink exact to="/skills" activeClassName="active-link animated rubberBand"><i className="fa fa-institution"></i><p>Skills</p></NavLink>
          </HashRouter>
          <HashRouter>
            <NavLink exact to="/projects" activeClassName="active-link animated rubberBand"><i className="fa fa-desktop"></i><p>Projects</p></NavLink>
          </HashRouter>
          <HashRouter>
            <NavLink exact to="/contact" activeClassName="active-link animated rubberBand"><i className="fa fa-phone"></i><p>Contact</p></NavLink>
          </HashRouter>
        </div>
        <div id="canvas"/>
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/home"/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/bio" component={Bio}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={NewProjects}/>
            <Route exact path="/projects/bumper-cars-ai" component={BumperCars}/>
            <Route exact path="/projects/website" component={PersonalWebsite}/>
            <Route exact path="/projects/robot-test" component={RobotTest}/>
            <Route exact path="/projects/shpeapp" component={ShpeApp}/>
            <Route exact path="/projects/superflight-vr" component={SuperFlight}/>
            <Route exact path="/projects/techmein" component={TechMeIn}/>
            <Route exact path="/projects/twentyfour" component={Twentyfour}/>
            <Route exact path="/projects/visionquest" component={VisionQuest}/>
            <Route exact path="/projects/you-will-crash" component={YouWillCrash}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
