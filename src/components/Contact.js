import React, { Component } from 'react';

export default class Bio extends Component {
  render () {
    return (
      <div className="container container-bio">
        <div className="container-center container-dark animated fadeIn">
          <iframe id="my_typeform" src="https://mszylkowski.typeform.com/to/V1IZrt?typeform-embed=embed-widget" style={{height:'500px', width:'100%'}}></iframe>
          <p>or <a href="mailto:mszylkowski@hotmail.com">send me an email</a></p>
        </div>
      </div>
    );
  }
}
