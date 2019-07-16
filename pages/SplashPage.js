import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import App from '../App';
import LoginPage from './LoginPage';

export default class SplashPage extends React.Component {

  getPage() {
    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
          //return <mainscreen/>
        }
      } catch(e) {
      }
    }
    return <LoginPage/>;
  }
  render() {
    return (
      <TouchableOpacity onPress={() => App.setPage(this.getPage())}>
        <Image 
        style={{width: 400, height:400, alignSelf:'center', marginTop:50, marginRight: 10}}
        source={require('../assets/logo.png')}
        />
        <Text style={[styles.main, {top: -90, fontSize: 48}]}>
          BEE BETTER
        </Text>
        <Text style={[styles.main, {marginTop: 40}]}>
          Tap to continue
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    fontFamily: 'RegRoboto',
    alignSelf: 'center'
  },
});


/*
    getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
          //return <mainscreen/>
        }
      } catch(e) {
      }
    }
    */