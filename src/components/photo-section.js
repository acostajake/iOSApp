import React, { Component } from 'react';
import { View, Text, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PhotoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailSection}>
                    <Image
                        style={styles.avatarImg}
                        source={{ uri: this.props.photo.user-avatar }} />
                    <View style={styles.userName}>
                        <Text>{this.props.photo.username}</Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.uploadPic}
                        source={{ uri: this.props.photo.image }} />
                </View>
                <View style={styles.imageMeta}>
                    <Ionicons
                        style={styles.like}
                        name='ios-thumbs-up'
                        size={25}
                    />
                    <Text> {this.props.photo.username}</Text>
                    <Text> {this.props.photo.caption}</Text>
                </View>
            </View >
        );
    }
}

const styles = {
    container: {
        margin: 10,
    },
    thumbnailSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 5,
    },
    avatarImg: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    userName: {
        justifyContent: 'center',
        padding: 5,
    },
    uploadPic: {
        width: null,
        height: 350,
    },
    imageMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 50,
        paddingRight: 50,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 5
    },
    caption: {
        fontSize: 16,
        padding: 5
    },
    like: {
        padding: 5
    }
}