import React, { Component } from 'react';

export default class YouWillCrash extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
        <h1>You Will Crash</h1>
        <h3>Overview</h3>
        <p>The aim of the game is to avoid the obstacles for as long as possible by moving the player around the screen. Every object has a unique and unpredictable behavior that makes every stage challenging and entertaining. The object combinations are randomly generated as well as each object’s position, velocity and direction.</p>
        <div className="project-pictures">
          <div>
            <img src="../../../res/ywc1.png"/>
            <img src="../../../res/ywc2.png"/>
            <img src="../../../res/ywc3.png"/>
            <img src="../../../res/ywc4.png"/>
            <img src="../../../res/ywc5.png"/>
            <img src="../../../res/ywc6.png"/>
          </div>
        </div>
        <iframe width="100%" height="450px" style={{maxHeight:'52vw', marginTop:'10px'}} src="https://www.youtube.com/embed/Aj-ToWcCDac?rel=0" frameBorder="0" allowFullScreen></iframe>
        <h3>Technology used</h3>
        <p><strong>Corona SDK </strong>is a free 2D game engine programmed in Lua which suited the idea I had in mind, so I learned Lua to make the concept and created all the graphics in Inkscape.</p>
        <h3>Features</h3>
        <p><strong>Endless game: </strong> the game progresses through a series of stages that have unique combinations of objects</p>
        <p><strong>Autobalancing difficulty: </strong>since each object has a different behavior, the amount of objects per stage depends on the difficulty of the combination. </p>
        <p><strong>Power ups</strong> can be bought with dots collected in-game. They can slow down time for 5 seconds, start at stage 3, have an extra life, and </p>
        <p><strong>Leaderboards and achievements</strong> served by Google Play Games.</p>
        </div>
      </div>
    );
  }
}
