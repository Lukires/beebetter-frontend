import React from 'react';
import { View } from 'react-native';

export default class OrangeBox extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <View>
                <View style={{height: this.props.height, width: this.props.width, backgroundColor: '#BD831F'}}></View>
                <View style={{top: (this.props.height * (-1) - 4), left: -4, height: this.props.height, width: this.props.width, backgroundColor: '#FFB12B'}}>
                    {this.props.children}
                </View>
            </View>
        );
    }

}