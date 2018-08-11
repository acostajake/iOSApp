import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import PhotoSection from './photo-section';
import { connect } from 'react-redux';
import { getPhotos } from '../actions';

//Stateful component implementing axios
//wrap in action creator
class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  componentDidMount() {
    this.props.getPhotos();
  }

showPhotos() {
  return this.props.photos.map(_photo => {
    return (
    <PhotoSection photo={_photo} key={_photo.id} />
    )
  })
}

  render() {
    return (
      <ScrollView>
        {this.showPhotos()}
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos
  }
}

//connect photo feed to action; join result of connect and photo feed
export default connect(mapStateToProps, { getPhotos })(PhotoFeed);