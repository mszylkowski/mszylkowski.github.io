import React, { Component } from 'react';

export default class Projects extends Component {
  render () {
    return (
      <div className="container container-projects">
        <div className="container-center container-dark">
          <div className="projects-division">
            <div className="flex-row flex-1">
              <a href="/#/projects/robot-test" className="projects-unit animated fadeIn">
                <div>
                  <div>
                    <p>Robot Test</p>
                    <i className="fa fa-android"></i>
                    <p style={{display: 'inline-block', fontWeight:'500'}}>C#</p>
                    <p style={{display: 'inline-block', fontWeight:'500'}}>Unity</p>
                  </div>
                </div>
              </a>
              <a href="/#/projects/twentyfour" className="projects-unit animated delay fadeIn">
                <div>
                  <div>
                    <p>TwentyFour</p>
                  </div>
                </div>
              </a>
            </div>
            <a href="/#/projects/shpeapp" className="projects-unit animated fadeIn delay-2 flex-2">
              <div>
                <div>
                  <p>Social SHPE</p>
                </div>
              </div>
            </a>
          </div>
          <div className="projects-division">
            <a href="/#/projects/you-will-crash" className="projects-unit animated fadeIn delay flex-2">
              <div>
                <div>
                  <p>You Will Crash</p>
                </div>
              </div>
            </a>
            <div className="flex-row flex-1">
              <a href="/#/projects/superflight-vr" className="projects-unit animated fadeIn delay-2">
                <div style={{backgroundImage:'url("https://image.freepik.com/free-psd/abstract-background-design_1297-87.jpg")'}}>
                  <div>
                    <p>SuperFlight VR</p>
                  </div>
                </div>
              </a>
              <a href="/#/projects/bumper-cars-ai" className="projects-unit animated fadeIn">
                <div style={{backgroundImage:'url("http://www.vectordiary.com/special-effects/006-bokeh/bokeh-special-effect.jpg")'}}>
                  <div>
                    <p>Bumper Cars AI</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
