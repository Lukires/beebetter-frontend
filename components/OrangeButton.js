import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import OrangeBox from './OrangeBox';

export default class OrangeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "", fontSize: (this.props.fontSize==null?48:this.props.fontSize)};
    }

    render() {
        return(
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <OrangeBox height={this.props.height} width={this.props.width}>
                    <Text style={[styles.text, {fontSize: this.state.fontSize}]}>{this.props.text}</Text>
                </OrangeBox>
            </TouchableOpacity>

        );
    }

}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'RegRoboto',
      color: 'black',
      fontSize: 48,
      alignSelf: 'center'
    }
  });