import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase';

import Router from './Router';

const customTextProps = {
  style: {
    fontFamily: 'roboto-regular'
  }
};

console.disableYellowBox = true;

class App extends Component {
  componentWillMount () {
    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyCC-JRuVStDBZ4lb71v-nYdE27OpLV3Tds",
        authDomain: "desafiobeestart.firebaseapp.com",
        databaseURL: "https://desafiobeestart.firebaseio.com",
        projectId: "desafiobeestart",
        storageBucket: "desafiobeestart.appspot.com",
        messagingSenderId: "849868957430"
      })
    }
  }

  render() {
    return (
      <Router></Router>
    );
  }
}

export default App