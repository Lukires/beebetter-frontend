import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image, TouchableOpacity } from 'react-native';
import InputBox from '../components/InputBox';
import OrangeButton from '../components/OrangeButton';
import RegisterUserPage from './RegisterUserPage';
import Hexagon from '../components/Hexagon';
import App from '../App';
import OrangeBox from '../components/OrangeBox';

export default class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
    }
    render() {
        return(
            <ScrollView>
                <View style={{width: '100%', height: 180}}>
                <Image
                    style={{maxHeight: 180}}
                    source={require('../assets/studying.jpg')}
                    />
                </View>
                <Text style={[styles.text, {fontSize: 48, top:-60, fontWeight:'400'}]}>Lektier</Text>
                <TouchableOpacity style={{marginLeft: 35}}>
                    <OrangeBox height={90} width={"90%"}>
                        <Text style={styles.boxtext}>* Påmindelse: 05.05.19 - Kl. 12:34</Text>
                        <Text style={[styles.boxtext, {fontSize: 38, marginLeft: 8}]}>Fysik Projekt</Text>
                    </OrangeBox>
                </TouchableOpacity>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <View style={styles.circle}></View>
                <TouchableOpacity style={{marginLeft: 35, top:-65}}>
                    <OrangeBox height={90} width={"90%"}>
                        <Text style={styles.boxtext}>* Påmindelse: 05.06.19 - Kl. 12:34</Text>
                        <Text style={[styles.boxtext, {fontSize: 38, marginLeft: 8}]}>Kemi Aflevering</Text>
                    </OrangeBox>
                </TouchableOpacity>
                <View style={[styles.circle, {top:-135}]}></View>
                <View style={[styles.circle, {top:-135}]}></View>
                <View style={[styles.circle, {top:-135}]}></View>
                <TouchableOpacity style={{marginLeft: 35, top:-135}}>
                    <OrangeBox height={90} width={"90%"}>
                        <Text style={styles.boxtext}>* Påmindelse: 05.08.19 - Kl. 04:20</Text>
                        <Text style={[styles.boxtext, {fontSize: 38, marginLeft: 8}]}>Mat A Rapport</Text>
                    </OrangeBox>
                </TouchableOpacity>
            </ScrollView>
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
    boxtext: {
        fontFamily: 'RegRoboto'
    },
    circle: {
        top: -70,
        marginBottom: 15,
        width: 10,
        height: 10,
        borderRadius: 10/2,
        backgroundColor: '#FFB12B',
        alignSelf: 'center'
    }
  });