import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section'

//Stateful component implementing axios
export default class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/photos')
      .then(res => {
        this.setState({ photos: res.data })
      });
  }

getPhotos() {
  return this.state.photos.map(_photo => {
    return (
    <PhotoSection photo={_photo} />
    )
  })
}

  render() {
    return (
      <View>
        {this.getPhotos()}
      </View>
    );
  }
}
