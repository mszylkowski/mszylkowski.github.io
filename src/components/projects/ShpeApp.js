import React, { Component } from 'react';

export default class ShpeApp extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <h1>Social SHPE</h1>
          <h3>Overview</h3>
          <p>Social SHPE is a social network for college organizations to manage members and sponsors. It will be initially used for the Society of Hispanic Professional Engineers at Georgia Tech (hence the name), but may be used by other organizations with the neccesary adjustments.</p>
          <div className="project-pictures">
            <div>
              <img src="../../../res/shpeScreenshot1.png"/>
              <img src="../../../res/shpeScreenshot2.png"/>
              <img src="../../../res/shpeScreenshot3.png"/>
              <img src="../../../res/shpeScreenshot4.png"/>
              <img src="../../../res/shpeScreenshot5.png"/>
              <img src="../../../res/shpeScreenshot.png"/>
            </div>
          </div>
          <h3>Technology used</h3>
          <p><strong>React.js: </strong>The platform was built with the React framework, both the web portal and the mobile apps. For the Android and iOS versions, React Native was used to compile the projects.</p>
          <p><strong>Firebase: </strong>It uses Firebase as the backend:</p>
          <ul>
            <li>Firebase Realtime database to store the information</li>
            <li>Firebase Storage to upload images and files</li>
            <li>Firebase Authentication to authenticate users with the Facebook Login token and sponsors with email and password</li>
          </ul>
          <p><strong>Node.js, NPM, Webpack</strong> and other tools to develop in React</p>
          <h3>Features</h3>
          <p><strong>Facebook Login</strong> to access the platform easily and without extra passwords</p>
          <p><strong>News feed</strong> with support for images, likes and comments</p>
          <p><strong>Events feed</strong> with start and end date, location, interested people, attendees, comments, "save to calendar" feature and user state.</p>
          <p><strong>QR code</strong> reader to register attendance to events. Each member has a unique QR code available in the app that can be scanned by an admin to receive attendance points.</p>
          <p><strong>Contacts list</strong> for all members of the organization to exchange contact information with the others</p>
          <p><strong>User profile</strong> with profile picture, name, major, email, phone number, website, major social networks, classes taken and skills</p>
          <p><strong>Sponsors Portal</strong> with restricted email login for recruiters to access information about their sponsored events</p>
        </div>
      </div>
    );
  }
}
