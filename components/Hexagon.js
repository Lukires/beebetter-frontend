import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';

export default class Hexagon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {x: this.props.x, y: this.props.y};
    }

    render() {
        return (
            <TouchableWithoutFeedback>
                <View>
                    <Image 
                    style={{width: 120, height:140}}
                    source={require('../assets/icons/logo_simple.png')}
                    />
                    <View style={{backgroundColor: '#FFB12B', width: 82, height:70, top: -170}}></View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
} 
