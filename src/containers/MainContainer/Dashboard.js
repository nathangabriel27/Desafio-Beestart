import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert, Dimensions, TouchableOpacity, TextInput,ImageBackground,ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from "firebase"

var {height, width} = Dimensions.get('window');


type Props = {};
export default class SignUp extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      deviceWidth: width,
      deviceHeight: height,
      };
  }
  render() {
    return (
 
      <View style={styles.container}>
          
      <ImageBackground style={styles.backgroundStyle} source={require('../../Images/background2.png')}/>

      <Text style={styles.titleText}>Voce está no login</Text>

      <TouchableOpacity onPress={()=> this.voltaParaLogin()} style={styles.registerButton} >
        <Text style={styles.buttonCadastro}>Sair e voltar ao menu </Text>
      </TouchableOpacity>

      </View>
 
    );
  }

  voltaParaLogin(){
    Actions.login();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
  registerButton: {
    borderRadius: 10,
    padding: 10,
    margin: 20,
    width: width * 0.8,
    alignItems: 'center',
    },
  buttonCadastro:{
    color: "white",
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 25,
    borderRadius: 25,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:'rgba(0,0,0,0.45)'
  }, 
  titleText:{
    fontSize: 40,
    alignItems: 'center',
    textAlign: 'center',
    color: "rgba(0,0,0,0.75)"
  },
  backgroundStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  }
});
