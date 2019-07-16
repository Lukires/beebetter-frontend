import React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import OrangeBox from './OrangeBox';

export default class InputBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: "", placeholder:(this.props.placeholder)};
    }

    reset() {
        if (this.state.value === "") {
            this.setState({placeholder: this.props.placeholder})
        }
    }

    onChange(value) {
        this.setState({value});
        this.props.onChange(value);
    }

    render() {
        return(
            <OrangeBox height={70} width={260}>
                 <View style={{marginTop: 5, alignSelf: 'center', height: 60, width: 250, backgroundColor: 'white'}}>
                    <TextInput 
                    onTouchStart={()=>  this.setState({placeholder: ""})}
                    onEndEditing={() => this.reset()} 
                    style={{height: 60, width: 250}} onChangeText={(value) => this.onChange(value)}/>
                    <View pointerEvents="none">
                        <Text style={[styles.text, {top: -55}]}>{this.state.placeholder}</Text>
                    </View>
                 </View>
            </OrangeBox>
        );
    }

}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'RegRoboto',
      color: 'black',
      fontSize: 34,
      alignSelf: 'center'
    }
});