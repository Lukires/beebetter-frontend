import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import InputBox from '../components/InputBox';
import OrangeButton from '../components/OrangeButton';
import RegisterUserPage from './RegisterUserPage';
import Hexagon from '../components/Hexagon';
import App from '../App';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
    }

    onSubmit(){
        
    }

    render() {
        return(
            <View>
                <Hexagon></Hexagon>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    text: {
      fontFamily: 'RegRoboto',
      color: '#FFB12B'
    },
  });