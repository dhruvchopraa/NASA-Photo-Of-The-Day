import React, { Component } from 'react';

class NASA extends Component {
  state = {
    photo: ''
  };

  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=oYivb2dk1pRhINS009UQ4r0vMmbHVbcy5dZLCaFN`)
      .then(response => response.json())
      .then(json => {
        this.setState({ photo: json });
      });
  }

  render() {
    return (
      <div>
        <center><h1>NASA's Astronomy Picture of the Day</h1></center>
        <Photo photo={this.state.photo}/>
      </div>
    );
  }
}

function Photo({ photo }) {
  if (!photo) {
    return null;
  }

  if (photo.media_type === 'video') {
    return (
      <div>
        <p>Sorry, cannot display videos for now.</p>
        <p>{photo.title}</p>
      </div>
    );
  }

  return (
   <b> <div>
      <center><img src={photo.url} alt={photo.title} />
      <p>{photo.title}</p>
      <p>{photo.date}</p>
      <p>{photo.explanation}</p></center>
    </div></b>
  );
}

export default NASA;
