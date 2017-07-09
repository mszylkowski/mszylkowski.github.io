import React, { Component } from 'react';

export default class RobotTest extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <h1>Robot Test</h1>
          <img style={{width:'100%'}} src="../../../res/robottestbig.png"/>
          <h3>Overview</h3>
          <p>Robot Test is a puzzle game where the robots need to interact with blocks in a 7 x 10 grid to reach the destination. Through the 60+ levels the game contains, the player has to guide the robots to the green platforms by using the blocks in the grid to solve the test. All robots move to the same side until they are stopped by a wall or some other solid block, and all the green robots need to stay alive in order to win the levels.</p>
          <div className="project-pictures">
            <div>
              <img src="../../../res/robottest1.png"/>
              <img src="../../../res/robottest5.png"/>
              <img src="../../../res/robottest2.png"/>
              <img src="../../../res/robottest3.png"/>
              <img src="../../../res/robottest4.png"/>
              <img src="../../../res/robottest6.png"/>
            </div>
          </div>
          <h3>Technology used</h3>
          <p><strong>Blender 3D</strong> was used to design all the models in the game and texture/color them.</p>
          <p><strong>Unity 3D: </strong>To achieve the 2.5D look of the game I imported the objects into Unity, where I programmed all the behaviors in C#.</p>
          <p><strong>Firebase: </strong>To store the levels made by users, once players finish editing their levels, they can send them to a Firebase Database. These levels can be accessed by other players who can upvote or downvote the levels.</p>
          <h3>Features</h3>
          <p><strong>60+ levels </strong>designed to exploit all the blocks and its combinations in interesting ways.</p>
          <p><strong>Level editor</strong> to create and test levels, which can be uploaded to the database provided that a level canbe finished.</p>
          <p><strong>Online database</strong> of player made levels that can be tried in the application, upvoted and downvoted. This will track the quality of the submissions and engage the players to create more levels.</p>
          <p><strong>15 types of blocks: </strong> Each block has its distinct properties that can interact with each other:</p>
          <ul>
            <li><strong>Floor:</strong> These are the building blocks of each level. Many of the other components are built on top of floors.</li>
            <li><strong>Walls:</strong> Solid blocks that define the shape of the level.</li>
            <li><strong>Robots:</strong> Controlled by the player, robots only go in one direction until stopped by another block. Any swipe on the screen will activate all the robots in the direction of the swipe. If a robot dies, the level restarts.</li>
            <li><strong>End platform:</strong> All robots need to end on a platform in order to win the level.</li>
            <li><strong>Hole:</strong> Robots die when they get inside them.</li>
            <li><strong>Spikes:</strong> When a robot stands on the block, spikes will move up making the block dangerous.</li>
            <li><strong>Blue wall:</strong> Starts at the same level of the floor, but once a robot stands on top of it, it moves up and becomes a solid wall. Warning: robots that stay on top of the blue wall once they went up will die.</li>
            <li><strong>White button:</strong> Activates white striped walls.</li>
            <li><strong>White striped walls:</strong> These walls move up and down with the press of a button. When a button is pressed, all the walls switch positions. As it happens with the blue walls, no robot should stay on top of it once it moves up.</li>
            {null}
            <li><strong>Slime:</strong> Stops the robots.</li>
            <li><strong>Conveyor belts:</strong> Change the direction of the robots that stand on top.</li>
            <li><strong>Teleporters:</strong> Teleport the robots keeping the same direction to the other teleporter on the level.</li>
            <li><strong>Blue robots:</strong> Act as normal robots in terms of movement, but are not necessary to win each level. In other words, the player does not win when a blue robot is on an End Platform, nor it restarts the level when it dies.</li>
            <li><strong>Glass boxes:</strong> Stop a robot as a solid wall, but after the first hit it breaks.</li>
            <li><strong>Wooden boxes:</strong> Can be pushed by robots but do not move by themselves. Otherwise, have all the same properties as the other movable objects.</li>
          </ul>
        </div>
      </div>
    );
  }
}
