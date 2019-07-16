import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import InputBox from '../components/InputBox';
import OrangeButton from '../components/OrangeButton';
import RegisterUserPage from './RegisterUserPage';
import App from '../App';

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
    }

    onSubmit(){
        
    }

    render() {
        return(
            <View style={styles.main}>
                <Text style={[styles.text, {fontSize: 84, marginTop: 94}]}>Login</Text>
                <View style={{marginTop: 55}} id="loginInput">
                    <InputBox placeholder="Username" onChange={(value) => this.setState({username: value})}></InputBox>
                    <View style={{top: -40}}>
                        <InputBox placeholder="Password" onChange={(value) => this.setState({password: value})}></InputBox>
                    </View>
                </View>
                <Text style={[styles.text, {top: -100, textDecorationLine: 'underline'}]} onPress={() => App.setPage(<RegisterUserPage/>)}>New user?</Text>
                <View style={{top: -50}}>
                    <OrangeButton height={70} width={160} text="Login" onPress={() => this.onSubmit()}></OrangeButton>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center'
    },
    text: {
      fontFamily: 'RegRoboto',
      color: '#FFB12B'
    },
  });