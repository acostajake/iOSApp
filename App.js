import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './src/components/header';
import PhotoFeed from './src/components/photoFeed.js'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header text="Photos"/>
        <PhotoFeed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});