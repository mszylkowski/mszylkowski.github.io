import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default class Home extends Component {
  render () {
    return (
      <div className="container container-home">
        <div className="container-center" id="home-container">
          <img src="./../res/head.png" className="profile-image animated bounceIn"/><br/>
          <p>Hi, my name is</p><br/>
          <p className="link animated rubberBand delay">Matias Szylkowski</p><br/>
          <div>
            <span style={{whiteSpace:'pre'}}>{"and I'm "}</span>
            <Typing loop={true} speed={60} style={{display:'inline'}}>
              <span>a <strong>Georgia Tech student</strong>.</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={22}/>
              <Typing.Reset/>
              <span>a <strong>Computer Science major</strong>.</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={24} />
              <Typing.Reset/>
              <span>a <strong>game developer</strong>.</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={16} />
              <Typing.Reset/>
              <span>an <strong>Android developer</strong>.</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={20} />
              <Typing.Reset/>
              <span>a <strong>UI designer</strong>.</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={15} />
              <Typing.Reset/>
              <span>a <strong>React developer</strong>.</span>
              <Typing.Delay ms={3000} />
              <Typing.Backspace count={18} />
              <Typing.Reset/>
            </Typing>
          </div>
        </div>
      </div>
    );
  }
}
