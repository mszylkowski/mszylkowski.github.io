import React, { Component } from 'react';

export default class Bio extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <h1>About me</h1>
          <p>{"My name is Matias Szylkowski, born in Montevideo, Uruguay in 1997. I'm currently studying Computer Science in the Georgia Institute of Technology with specialization in Devices and Intelligence. Besides coding, I enjoy playing basketball (or any other sport), going to the gym, and learning songs on the piano."}</p>
          <p>As far as programming is concerned, developing games is what gained my interest from a very young age, but since then I have worked to refine my skills in Android development in Java as well. More recently, I have been exploring multiplatform frameworks and connecting apps to the internet to increase my capabilities that allowed for a wider range of possibilities. Not only do I like reading about new achievements in the software industry, but also about technology in general.</p>
          <h1>Education</h1>
          <h2>Georgia Institute of Technology</h2>
          <p>{"Currently I'm studying Computer Science in the Georgia Institute of Technology with expected graduation term fall 2019 and specialization in Devices and Intelligence. GPA: 4.0"}</p>
          <h3>Relevant Courseload</h3>
          <p>CS1301: Intro to Computing and Programming (Placement test)</p>
          <p>CS1331: Intro to Object Oriented Programming (Fall 2016)</p>
          <p>CS1332: Data Structures and Algorithms (Spring 2017)</p>
          <p>CS2050: Intro to Discrete Math for CS (Fall 2016)</p>
          <p>CS3600: Intro to Artificial Intelligence (Fall 2017)</p>
          <p>CS2340: Objects and Design (Fall 2017)</p>
          <p>CS2110: Computing Organization and Programming (Fall 2017)</p>
          <h2>Escuela Integral</h2>
          <p>{"Graduated from Escuela Integral in December 2015 with an International Baccalaureate degree. Placed #1 in the class ranking out of 73 students."}</p>
          <h1>Awards</h1>
          <h2>Hackathons</h2>
          <p>To see all my hackathon projects visit my <a href="https://devpost.com/mszylkowski" target="_blank" >Devpost Portfolio</a></p>
          <h3>TechMeIn - 2nd place at HackGSU Spring 2017</h3>
          <p>{"This project offers a solution using QR codes to the problem of having no way of granting temporary door access to visitors in offices, friends in a building, or attendees to events. The main applicaiton allows users to give other people temporary permissions to unlock predefined doors and spaces, as well as display a unique one-time-use encrypted QR code to access areas. When given access to a building, recipients that do not have the application will receive a QR code in their e-mails with expiry date set by the permission sender. Users of the application will benefit from the extra layers of security, by generating unique QR codes every time they open the app, preventing identity theft."}</p>
          <a href="/#/projects/techmein"></a>
          <h3>VisionQuest - Runner Up at HoloHack Fall 2016</h3>
          <p>{"The main application built in Unity allows users to claim quests, mark them as completed and receive points for their work. In the application, there are two types of quests available: location-based (static bulletin board with local quests) and group-based (that can be seen from anywhere). We also developed a Slackbot that allows members of the Slack group post, assign, complete and give points for quests done. Also we integrated a website for board administrators to post and manage quests."}</p>
          <p>{"We created a Firebase database to store the information across platforms, and for each different form factor we linked the code to the database, which is checked in real-time inside Unity for changes and updates. These updates are then displayed in the bulletin board and group card, and the user can click on them to reserve them, and once again to complete them."}</p>
          <h2>Math olympiads</h2>
          <h3>Asian and Pacific Mathematics Olympiad</h3>
          <p>Awarded bornze medal in the Asian and Pacific Mathematics Olympiad in March 2016</p>
          <h3>International Mathematics Olympiad</h3>
          <p>Earned an Honorable Mention in the International Mathematical Olympiad in 2014 in South Africa</p>
          <p>Represented Uruguay in three instances of the olympiad from 2013 to 2015</p>
          <h3>Regional Math Olympiads</h3>
          <p>Won bronze medal in the Iberoamerican Mathematical Olympiad in 2015 in Honduras</p>
          <p>Earned two bronze medals in the Southern Cone Mathematical Olympiads in Peru (2012) and Paraguay (2013)</p>
          <p>Received golden medal in the Juvenile Iberoamerican Mathematical Olympiad in 2011</p>
        </div>
      </div>
    );
  }
}
