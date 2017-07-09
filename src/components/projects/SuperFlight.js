import React, { Component } from 'react';

export default class SuperFlight extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
        <h1>SuperFlight VR</h1>
        <p>Submitted at VandyHacks on November 13, 2016. In our group of four students, I was the main programmer and Unity editor, while two members were in charge of making the city and the remaining one helped me research ways to use the available technologies and created most of the content for the missions and voice assistant.</p>
        <h3>Overview</h3>
        <p>Iron Man VR simulator made with Unity 3D for the Oculus Rift and controlled through an Android app connected to a Firebase realtime database. The player controls the flight by pointing his arms in the direction of the thrusters, and the phones will map the arm rotation to the model in VR.</p>
        <div className="project-pictures">
          <div>
            <img src="../../../res/superflight1.png"/>
            <img src="../../../res/superflight2.png"/>
            <img src="../../../res/superflight3.png"/>
            <img src="../../../res/superflight4.png"/>
            <img src="../../../res/superflight5.png"/>
          </div>
        </div>
        <h3>Technology used</h3>
        <p><strong>Blender 3D</strong> was used to model the cities and map the textures to them.</p>
        <p><strong>Unity 3D: </strong> The game engine was connected to an Oculus Rift to test the physics from an early stage, and later on the city was added. All the code to control the player was coded in C# from scratch.</p>
        <h3>Features</h3>
        <p><strong>Arm controlled movement: </strong>the player is controlled by grabbing two phones and moving the arms to mimic the position of the thrusters. Using the accelerometer information of each phone an estimation of the arms positions can be calculated.</p>
        <p><strong>Virtual assistant</strong> that guides the player towards the next objective and explains the controls</p>
        </div>
      </div>
    );
  }
}
