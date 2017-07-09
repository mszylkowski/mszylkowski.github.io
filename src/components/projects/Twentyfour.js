import React, { Component } from 'react';

export default class Twentyfour extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <h1>Twentyfour</h1>
          <h3>Overview</h3>
          <p>TwentyFour is a simple yet challenging Math game where the player in given 4 numbers and has to get to 24 by operating with all of them. Due to the nature of the game, many sets of numbers are impossible to solve, so only the combinations of numbers that are solvable appear.</p>
          <div className="project-pictures">
            <div>
              <img src="../../../res/twentyfour1.png"/>
              <img src="../../../res/twentyfour2.png"/>
              <img src="../../../res/twentyfour3.png"/>
              <img src="../../../res/twentyfour4.png"/>
              <img src="../../../res/twentyfour5.png"/>
              <img src="../../../res/twentyfour6.png"/>
            </div>
          </div>
          <h3>Technology used</h3>
          <p><strong>Android SDK: </strong>It is completely written in Java for Android, as well as the algorithm for checking the sets have a solution. This was my first application published and one of the first projects I finished</p>
          <h3>Features</h3>
          <p><strong>Game modes </strong> for all levels. Easy mode reduces the complexity by setting the goal to 12, and random mode increases the complexity by changing the goal to a different number for every set.</p>
          <p><strong>Offline multiplayer</strong>  where users can share a code that has 6 sets encrypted into it, so that different players can play with the same numbers and compare the times.</p>
          <p><strong>Practice mode</strong>  with no time limit and possibility to skip hard sets.</p>
          <p><strong>Leaderboards and achievements</strong> served by Google Play Games for every game mode available.</p>
          <p><strong>Verifying algorithm</strong> that checks if a given set has a solution in a split second. The algorithm can be tested against any set with a tool in the settings menu, which also lists all the possible results of operating with the four numbers.</p>
        </div>
      </div>
    );
  }
}
