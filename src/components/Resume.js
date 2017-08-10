import React, { Component } from 'react';

export default class Bio extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container">
          <a className="button button-yellow" href="https://drive.google.com/file/d/0B7P-6hSsgGpYYk5jMDBPMlU5OEE/view" download="MatiasSzylkowski_Resume">Download as PDF<i className="fa fa-cloud-download"></i></a>
          <a className="button button-yellow" href="https://drive.google.com/file/d/0B7P-6hSsgGpYYk5jMDBPMlU5OEE/view" target="_blank">View as PDF<i className="fa fa-arrow-circle-right"></i></a>
        </div>
        <div className="container-center container-dark animated bounceInUp" style={{padding: '0px'}}>
          <img src="./../res/resume-sized.png" className="resume-image"/>
        </div>
      </div>
    );
  }
}
