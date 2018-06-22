import React, { Component } from 'react';
import './PhotosList.css'

class PhotosList extends Component {
    constructor(){
        super();
        this.state = {
        photos: [],
        };
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/photos?_limit=30')
        .then(photos => {
            return photos.json();
        }).then(data => {
            let pictures = data.map((photo) => {
            return (
                <div key={photo.id} className="photo-container">
                    <img src={photo.thumbnailUrl} />
                </div>
            )
            })
            this.setState({pictures: pictures});
            console.log('data', data);
        });
    }

        render() {
            return (
            <div className="photo-item">
                {this.state.pictures}
            </div>
            )
        }
    }


    export default PhotosList;
