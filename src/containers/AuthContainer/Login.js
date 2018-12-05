import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Image, Dimensions, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements'
import firebase from "firebase";

var {height, width} = Dimensions.get('window');

type Props = {};
export default class Login extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        senha: "",
        email: "",
        deviceWidth: width,
        deviceHeight: height
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundStyle} source={require('../../Images/background3.png')}/> 
        <Image style={styles.logoStyle} source={require('../../Images/logo.png')}/>
    
        <Text style={styles.titleText}>Bem vindo ao desafio</Text>
        <Text style={styles.titleText}>BeeStart</Text>

        <View style={styles.viewInput}> 
            <Icon style={styles.icon}  name='person'/>
            
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({email: text})}
                placeholder=" Ex: desafiobeestar@gmail.com"
                value={this.state.email}
                placeholderTextColor={"white"}
                underlineColorAndroid='transparent'
            />
        </View>

        <View style={styles.viewInput}> 

            <Icon style={styles.icon}  name='lock'/>
             
            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({senha: text})}
                placeholder="Senha"
                secureTextEntry
                value={this.state.senha}
                placeholderTextColor={"white"}
                underlineColorAndroid='transparent'
            />
        </View>
               
        <TouchableOpacity onPress={()=> this.logar(this.state.email,this.state.senha)} style={styles.askButton} >
          <Text style={styles.buttonText}>Acessar sistema</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.openCadastro()} style={styles.askButton} >
          <Text style={styles.buttonText}>     Cadastrar-se     </Text>
        </TouchableOpacity>

      </View>
    );
  }

  openSignup(){
    Actions.signup();
  }
  openCadastro(){
    Actions.cadastro();
  }
  logar(email,senha){
    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((dadosUsuario)=>{
      Actions.dashboard();
    }
    )
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert(' Atenção!!! ','Você digitou a "Senha" ou o "Email" invalido');
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButton:{
    backgroundColor: "black",
  },
  textButton: {
    color: "white",
    margin: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  askButton: {
    color: "white",
    height: 45,
    borderColor: 'white',
    borderWidth: 1,
    padding: 15,
    borderRadius: 25,
    textAlign: 'center',
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:'rgba(0,0,0,0.45)',
  },
  buttonText:{
    color:'white',
    fontSize: 15,
  },
  logoStyle: {
    width: width * 0.35,
    height: width * 0.50,
    top : 0,
    position: "relative"
  },
    backgroundStyle:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  titleText:{
    alignItems: 'center',
    fontSize: 25,
    textAlign: 'center',
    color: "rgba(0,0,0,0.40)",
    borderColor:"white"
  },
  viewInput:{
    margin:10,
    flexDirection:'row',
    alignItems:"center"  
  },
  input:{
    width: width -55,
    height: 45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:35,
    backgroundColor:'rgba(0,0,0,0.40)',
    color:"white",
    marginHorizontal:-27
  },
  icon:{
    position:'absolute',
    top:8,
    left:10,
    color: "red",
  },
});
