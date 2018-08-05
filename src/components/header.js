import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { yellow } from 'ansi-colors';

// export default class Header extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//   }
// }

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {props.text} </Text>
    </View>
  );
}

const styles = {
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 25,
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15,
    }
}

export default Header;