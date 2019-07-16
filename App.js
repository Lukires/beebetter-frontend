import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo'
import SplashPage from './pages/SplashPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import CoursePage from './pages/CoursePage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    if (App.AppInstance == null) {
      App.AppInstance = this;
    }else{
      return;
    }
    this.state = {loaded: false, page: <SplashPage/>}; //UNCOMMENT
    //this.state = {loaded: false, page: <CoursePage/>};
  }

  static AppInstance;

  static setPage(newPage) {
    App.AppInstance.setState({page: newPage});
  }

  async componentWillMount() {
    await Font.loadAsync({
      'RegRoboto': require('./assets/font/Roboto-Thin.ttf')
    })
    this.setState({loaded: true})
  }

  render() {
    if (this.state.loaded){
      return (
        <View>
          {this.state.page}
        </View>
      );
    }else{
      return <View>
        <Text>Loading...</Text>
      </View>
    }
  }
}

