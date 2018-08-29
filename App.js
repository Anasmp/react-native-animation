 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator} from 'react-navigation'
import LoginScreen from './Screens/Login'
import OtpScreen from './Screens/Otpscreen'
import Home from './Screens/Home'

export default class App extends Component {
  render() {
    return (
   <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  LoginScreen:{ screen: LoginScreen},
  OtpScreen:{ screen: OtpScreen},
  Home:{ screen: Home}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
