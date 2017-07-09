import React, { Component } from 'react';

export default class TechMeIn extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <h1>TechMeIn</h1>
          <p>This Hackathon project received 2nd place at HackGSU Spring 2017. The team was conformed by me and Alen Polakof, another Georgia Tech student.</p>
          <h3>Overview</h3>
          <p>TechMeIn serves as a mobile platform to easily grant temporary access to visitors to a building with the use of QR code readers in doors and secure QR codes displayed from the app. Owners still have QR capabilities to open their doors, but benefit from extra layers of security that other methods of identification do not allow for.</p>
          <div className="project-pictures">
            <div>
              <img src="../../../res/techmein1.png"/>
              <img src="../../../res/techmein2.png"/>
              <img src="../../../res/techmein3.png"/>
              <img src="../../../res/techmein4.png"/>
              <img src="../../../res/techmein5.png"/>
            </div>
          </div>
          <h3>Technology used</h3>
          <p><strong>Android SDK: </strong>The aplication prototype was created solely for Android using Java and IntelliJ IDEA. A companion application that simulates a door scanner was also programmed for Android in the same way.</p>
          <p><strong>Firebase: </strong>The platform uses Firebase as the backend:</p>
          <ul>
            <li>Firebase Realtime database to store the information about the buildings, permissions and users.</li>
            <li>Firebase Authentication with email and password to authenticate users.</li>
          </ul>
          <h3>Features</h3>
          <p><strong>Encrypted QR codes: </strong> the system relies on QR codes for identification purposes, so measures are taken to avoid others from reading information from the QR code.</p>
          <p><strong>One-time use</strong> keys that autodestroy once the user leaves the QR screen, preventing images of the code from being used.</p>
          <p><strong>Granting permissions</strong> for owners of a building is as easy as writing the email of the visitor, choosing the time and selecting from a list the areas permitted</p>
          <p><strong>Emailed codes</strong> for emails that are not registered. These codes do not have the same protection as the in-app ones but offer an easy way to use the platform without being registered</p>
        </div>
      </div>
    );
  }
}
