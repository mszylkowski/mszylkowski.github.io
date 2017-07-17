import React, { Component } from 'react';

export default class PersonalWebsite extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <h1>Personal Website</h1>
          <p>I built this website from scratch with HTML, CSS and JavaScript in July 2017.</p>
          <h3>Tools</h3>
          <p><strong>React</strong> was the framework used to manage all the components of this site.</p> <p><strong>React Router</strong> and other node modules were used to add functionality to the site</p>
          <p>For the background animation and snake game in the home screen a <strong>p5.js</strong> canvas was created from zero, which adjusts dynamically the rows and columns to match the screensize.</p>
          <p>This page is hosted in <strong>Github</strong>, and the source code can be found <a href="https://github.com/mszylkowski/mszylkowski.github.io" target="_blank">here</a></p>
          <p>Feel free to use this project for your personal portfolio and modify it to suit your style!</p>
        </div>
      </div>
    );
  }
}
