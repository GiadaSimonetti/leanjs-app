import React, { Component } from 'react';

class PhotosList extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: [],
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/photos?_limit=30')
      .then(photos => {
        return photos.json();
      }).then(data => {
        let pictures = data.photos.map((photo) => {
          return (
            <div key={photo.photos}>
              <img src={photo.thumbnailUrl} />
            </div>
          )
        })
        this.setState({pictures: pictures});
        console.log("state", this.state.pictures);
      })

  }

    render() {
        return (
          <div>
            {this.state.pictures}
          </div>
        )
    }
}


export default PhotosList;
