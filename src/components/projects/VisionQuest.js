import React, { Component } from 'react';

export default class VisionQuest extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
        <h1>VisionQuest</h1>
        <p>Submitted at Holohack on December 3, 2016. The team, composed of five members, was divided into all the systems that would interact with the database (Unity/HoloLens, Slack, and website).</p>
        <h3>Overview</h3>
        <p>VisionQuest was designed as an RPG-based quest platform for groups and offices where users can interact in multiple ways with the system to assign quests, claim them and receive points. Quests can be location-based (to use in an office or home for instance) or group-based (to access at all times). Quests can be assigned points that are subtracted from the quest-giver and gained by the quest-taker to balance the in-app currency. Bosses can use quests in the workplace to measure effectiveness of workers.</p>
        <div className="project-pictures">
          <div>
            <img src="../../../res/visionquest1.jpg"/>
            <img src="../../../res/visionquest2.jpg"/>
            <img src="../../../res/visionquest3.jpg"/>
            <img src="../../../res/visionquest4.jpg"/>
          </div>
        </div>
        <h3>Platforms</h3>
        <p>A <strong>Unity</strong> application was developed to interact with quests in realtime while using the Microsoft HoloLens. Through the app users can select unassigned quests to take them, mark them as completed and view the user profile.</p>
        <p>The <strong>website</strong> is meant to work as an intermediate between administrators of a location-based board and the platform. Administrators can submit quests and mark them as completed to compensate the quest-taker with the designated points.</p>
        <p>The <strong>Slack bot</strong> is currently the most complete tool due to the time limitations of the competition. In Slack, members of the conversation can create quests, claim quests, mark as completed, and confirm as done. It was written in Python.</p>
        </div>
      </div>
    );
  }
}
