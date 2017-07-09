import React, { Component } from 'react';

export default class Skills extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeInLeft">
          <h1>Java / Android</h1>
          <p>Learned Java in my Junior year in Highschool, and it is now my go-to language. My first Java project was the game <a href="/#/projects/twentyfour">TwentyFour</a>, an Android math game about operating with the numbers on the screen to get to 24. The game is now published on the <a href="https://play.google.com/store/apps/details?id=matias.com.veinticuatro" target="_blank">Google Play Store</a>. I also interned before going to college for 4 months as an Android developer at Scanntech, a company that provides retail stores with Point of Sale solutions with the same capabilities as the big chains’ software. During my internship, I had the opportunity to work on a big project with other experienced developers.</p>
        </div>
        <div className="container-center container-dark animated fadeInRight delay-2">
          <h1>C# / Unity3D</h1>
          <p>I have done many projects with the Unity game engine over the past years. First started with an experiment with state machines and game AI for the 3D capabilities, but then decided to create a complete game. After months of development I released <a href="/#/projects/robot-test">Robot Test</a>, a mobile puzzle game where the user has to lead robots to the platforms by interacting with various types of blocks in a 7x10 grid. It is currently published in the <a href="https://play.google.com/store/apps/details?id=com.montevisoft.robottest" target="_blank">Google Play Store</a> and contains 60+ levels, a level editor, 20+ types of interactable blocks and an online database of levels submitted by users.</p>
          <p>In recent hackathons I have developed projects for the Oculus Rift and Microsoft Hololens in Unity, using its VR and AR tools</p>
        </div>
        <div className="container-center container-dark animated fadeInLeft delay">
          <h1>React / Web development</h1>
          <p>With basic HTML, CSS and JavaScript I initially built a static website for an English project, for which I learned the styling properties and document layout but had minimal scripts. During Summer I set as a goal to learn to develop in a JavaScript framework, and since I was selected for the SHPE Senior BOD in the IT team in charge of developing an application for the organization, I experimented with React Native to create <a href="/#/projects/shpeapp">Social SHPE</a>. This application uses Firebase as the backend with Facebook authentication, news and events feed, contacts, and QR code scanner to register attendance to events. After finishing the mobile version I ported the application to web by remaking the components and modifying the logic as needed.</p>
        </div>
        <div className="container-center container-dark">
          <h1>Lua / Corona SDK</h1>
          <p>I learned this programming language as a way to create 2D games using Corona SDK, a very powerful game development tool in Lua. I created the game <a href="/#/projects/you-will-crash">You Will Crash</a>, currently available on <a href="https://play.google.com/store/apps/details?id=matias.com.youwillcrash" target="_blank">Google Play Store</a>. It is an endless casual game where the player has to avoid crashing into the obstacles. There are many of them, with different behaviors. Collecting dots allows players to buy boosters and survive longer, while increasing their high score.</p>
        </div>
        <div className="container-center container-dark">
          <h1>Python / Blender Game Engine</h1>
          <p>Started coding in Python at the age of 13 using Codecademy, being this my first language I learned. Used this language to code a First Person Shooter (and other game prototypes) in the Blender 3D game engine an year later. I have also resorted to Python for solving many math problems and automating tasks.</p>
        </div>
        <div className="container-center container-dark">
          <h1>Other languages and programming tools</h1>
          <p>During my internship at Scanntech, I worked with <strong>SQLite3</strong> to manage the databases. The main program was an Android application written in Java and XML, and the development was done in a <strong>Linux</strong> machine with <strong>IntelliJ IDEA</strong> and <strong>Maven</strong> compiler. The ADB was used to debug the application on the rooted devices. Version management was done using <strong>Git</strong>, and all the tasks were managed through <strong>JIRA</strong> (Atlassian’s issue tracker).</p>
        </div>
        <div className="container-center container-dark animated bounceInUp">
          <h1>3D modelling / texturing / animating</h1>
          <p>Through Blender 3D I have acquired these skills as a way to improve school projects by adding short videos. When I realised I wanted to make 3D games, I started making the assets in Blender and following tutorials that I found online in order to improve the graphics of my projects. Almost all of my Unity 3D projects were solely composed of the assets made in Blender. Some of my renders can be found <a href="https://goo.gl/photos/PKjNCEcQancgxdr6A" target="_blank">here</a>.</p>
        </div>
        <div className="container-center container-dark animated bounceInUp">
          <h1>2D vector drawing</h1>
          <p>To make the assets for my 2D games I have learned how to use <strong>Inkscape</strong>. You Will Crash has assets made in Inkscape, as well as TwentyFour and this website.</p>
        </div>
      </div>
    );
  }
}
