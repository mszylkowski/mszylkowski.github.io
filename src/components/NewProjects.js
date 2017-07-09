import React, { Component } from 'react';

export default class NewProjects extends Component {
  constructor(props) {
    super(props);
    this.filters = ['Unity', 'Firebase', 'Web', 'Android', 'Java', 'C#', 'React', 'HTML/CSS/JS', 'Android SDK', 'p5.js', 'clear'];
    this.projects = [
      {
        name: 'Social SHPE',
        tags: ['React', 'HTML/CSS/JS', 'Web/Android/iOS', 'Firebase'],
        link: '/#/projects/shpeapp',
        class: 'project-big delay-2',
        description: 'Social network for college organizations to post news and events, keep track of attendance, and provide information to sponsors',
        style: {backgroundImage:"url('./res/shpeScreenshot.png')"},
      },
      {
        name: 'TwentyFour',
        tags: ['Android SDK', 'Java', 'Android'],
        link: '/#/projects/twentyfour',
        class: 'delay',
        description: 'Math game where the objective is to use the numbers on the screen to calculate the number 24',
        style: {backgroundImage:"url('https://lh6.ggpht.com/dTVG-KRDlebW2j-PG1W2ypwpRl9w9s9SWg248qa2wMe9ZabD_tRcDEdAIwyB0bw08w=h900-rw')"},
      },
      {
        name: 'You Will Crash',
        tags: ['Corona SDK', 'Lua', 'Android'],
        link: '/#/projects/you-will-crash',
        class: 'project-medium delay',
        description: 'Casual game about avoiding obstacles with various behaviors',
        style: {backgroundImage:"url('https://lh3.googleusercontent.com/3QUwoMScYoHKsQHYB-t1IFpJbMf5PWZ18LN-6MRXtqZuQRF6E_lU4K6RmXEjq7LaAqk=h900-rw')"},
      },
      {
        name: 'Robot Test',
        tags: ['Unity', 'C#', 'Android', 'Firebase'],
        link: '/#/projects/robot-test',
        class: 'project-medium delay',
        description: 'Puzzle game in which robots have to interact with various blocks in a 7x10 grid to reach the platforms',
        style: {backgroundImage:"url('https://lh3.googleusercontent.com/-5venVmDsqyD78qjtwiR73WvZzU9lxRgmRYJYK_qZWCmq-UDC2b_3oVq4lukdAGiyQ=h900-rw')"},
      },
      {
        name: 'SuperFlight VR',
        tags: ['Unity', 'C#', 'Oculus'],
        link: '/#/projects/superflight-vr',
        class: 'delay-2',
        description: 'Iron Man VR simulation in Oculus Rift where users can control the thrusters by grabbing two phones and pointing them in the desired direction',
        style: {backgroundImage:"url('https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/456/075/datas/gallery.jpg')"},
      },
      {
        name: 'TechMeIn',
        tags: ['Android SDK', 'Java', 'Android', 'Firebase'],
        link: '/#/projects/techmein',
        class: 'project-big delay',
        description: 'Using one-time encrypted QR codes to grant temporary door/area access to visitors in offices, friends in a building, or attendees to events',
        style: {backgroundImage:"url('https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/495/926/datas/gallery.jpg')"},
      },
      {
        name: 'Bumper Cars',
        tags: ['Unity', 'C#', 'Android'],
        link: '/#/projects/bumper-cars-ai',
        class: '',
        description: 'AI centered prototype to develop a state machine that controls bumper cars, turned into a game with purchaseable car parts',
        style: {backgroundImage:"url('https://i2.wp.com/mszylkowski.files.wordpress.com/2016/10/wp-1476667827277.png?w=464&h=555&crop&ssl=1')"},
      },
      {
        name: 'VisionQuest',
        tags: ['Unity', 'C#', 'Hololens/Slack/Web', 'Firebase'],
        link: '/#/projects/visionquest',
        class: 'project-medium delay-2',
        description: 'Quest managing platform in augmented reality where users can claim quests, mark them as completed and receive points for their work',
        style: {backgroundImage:'url("https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/456/062/datas/gallery.jpg")'},
      },
      {
        name: 'Social SHPE',
        tags: ['React', 'HTML/CSS/JS', 'Web', 'p5.js'],
        link: '/#/projects/website',
        class: 'project-big',
        description: 'Built this website from scratch in React',
        style: {backgroundImage:"url('./res/webScreenshot.png')"},
      }
    ];
    this.state = {filter: 'clear', filteredProjects: this.projects};
  }

  filter(word) {
    if (word == 'clear' || word == this.state.filter) {
      this.setState({filteredProjects: this.projects, filter: 'clear'});
    } else {
      this.setState({filter: word});
      var list = [];
      for (var i = 0; i < this.projects.length; i++) {
        var found = false;
        for (var j = 0; j < this.projects[i].tags.length; j++) {
          if (this.projects[i].tags[j].indexOf(word) != -1) {
            found = true;
          }
        }
        if (found) {
          list.push(this.projects[i]);
        }
      }
      this.setState({filteredProjects: list});
    }
  }

  render () {
    return (
      <div className="container container-project">
        <div className="container-center container-dark">
          <span>Filters:</span>
          {this.filters.map((filter, i) => {return (
            <a key={i} className={this.state.filter==filter?"button button-filters-active animated rubberBand":"button button-filters"} onTouchTap={()=>{this.filter(filter)}}>{filter}</a>
          );})}
          <div className="projects">
            {this.state.filteredProjects.map((project, i) => {return (
              <a href={project.link} className={"project animated fadeIn " + project.class} key={i}>
                <div style={project.style}>
                  <div>
                    <p>{project.name}</p>
                    {project.tags.map((tag, i)=> {return (<span key={i}>{tag}</span>)})}
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            );})}








          </div>
        </div>
      </div>
    );
  }
}
