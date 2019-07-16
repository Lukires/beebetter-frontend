import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import InputBox from '../components/InputBox';
import OrangeButton from '../components/OrangeButton';
import axios from 'axios';

export default class RegisterUserPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};

    }

    async onSubmit() {
        const { password, username } = this.state;
        await axios.post('http://192.168.0.17:8080/user?name='+username+'&password='+password)
        .then(res => {
            if (res.data) {
                //login
            }else{
                alert("Dette brugernavn er optaget");
            }
        });
    }

    render() {
        return(
            <View style={styles.main}>
                <Text style={[styles.text, {fontSize: 84, marginTop: 94}]}>Register</Text>
                <View style={{marginTop: 55}} id="loginInput">
                    <InputBox placeholder="Username" onChange={(value) => this.setState({username: value})}></InputBox>
                    <View style={{top: -40}}>
                        <InputBox placeholder="Password" onChange={(value) => this.setState({password: value})}></InputBox>
                    </View>
                </View>
                <View style={{top: -50}}>
                    <OrangeButton height={70} width={160} text="Register" fontSize={38} onPress={() => this.onSubmit()}></OrangeButton>
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