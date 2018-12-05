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
      nome: "",
      email: "",
      senha: "",
      cidade: "",
      telefone: "",
      idade: ""
      };
  }

  componentDidMount(){
    const { currentUser } = firebase.auth();
    if (currentUser){console.log("Estou logado: ", currentUser.uid)
    }
  }
  
  render() {
    return (
 
<View>              
    <ImageBackground style={styles.backgroundStyle} source={require('../../Images/background3.png')}/>
    <Text style={styles.titleText}>Voce está no Cadastro</Text>
   
    <ScrollView> 
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({nome: text})}
          placeholder="Ex: Nathan Gabriel"
          value={this.state.nome}
          placeholderTextColor='rgba(0,0,0,0.75)'
        />

        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({email: text})}
          placeholder="Ex: Desafiobeestart@gmail.com"
          value={this.state.email}
          placeholderTextColor= 'rgba(0,0,0,0.75)'
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({senha: text})}
          placeholder="Senha aqui"
          secureTextEntry
          value={this.state.senha}
          placeholderTextColor='rgba(0,0,0,0.75)'
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({cidade: text})}
          placeholder="Ex: Belo Horizonte"
          value={this.state.cidade}
          placeholderTextColor='rgba(0,0,0,0.75)'
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({telefone: text})}
          placeholder="Ex: (31) 99999=9999"
          value={this.state.telefone}
          placeholderTextColor='rgba(0,0,0,0.75)'
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text) => this.setState({idade: text})}
          placeholder="Ex: 19 anos"
          value={this.state.idade}
          placeholderTextColor='rgba(0,0,0,0.75)'
        />
      
        <TouchableOpacity onPress={()=> this.askRegister()} style={styles.buttonTexto} >
          <Text style={styles.caixaButton}>Realizar Cadastro   </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> this.voltaParaLogin()} style={styles.buttonTexto} >
            <Text style={styles.caixaButton}>Voltar ao Login</Text>
        </TouchableOpacity>
 
    </ScrollView>
</View> 
  );
}

    voltaParaLogin(){
        Actions.login();
     }

//firabase

askRegister(){
    Alert.alert(
      'Registrar',
      'Confirma o seu registo?',
      [
        {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => this.registerUser(this.state.email, this.state.senha, this.state.nome, this.state.cidade, this.state.telefone, this.state.idade)
        },
      ],
      { cancelable: false }
    )
  }
  
  registerUser (email, password, nome, cidade, telefone, idade) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((currentUser) => {
      firebase.database().ref("Users/"+currentUser.user.uid).update({
        uid: currentUser.user.uid,
        email: email,
        nome: nome,
        cidade: cidade,
        telefone: telefone,
        idade: idade
      });
      Alert.alert("Sucesso!", "Usuário criado");
      Actions.pop();
    })
    .catch((error) => { 
      console.log("firebase error: " + error);
      Alert.alert("Email incorreto ou senha fraca", error.code)
    });
  }

  confirmRegister () {
    const userData = {
      nome: this.state.nome,
      email: this.state.email,
      cidade: this.state.cidade,
      telefone: this.state.telefone,
      idade: this.state.idade,
      altura: 170,
    }
      firebase.database().ref("Shops/").push(userData)
      .then((snapshot) => {
        Alert.alert("Sucesso!", "Usuário criado");
        Actions.pop();
      })
      .catch((error) =>{
        console.log("Error: ", error);
        Alert.alert("Errou na persistência!", error.code)
      })
      
  }
//fim firebase
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
    margin: 10,
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
    alignContent: 'center'
}, 
  titleText:{
    fontSize: 30,
    alignItems: 'center',
    textAlign: 'center',
    color: "#EBAD1E",
    borderColor: "black"
},
  backgroundStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    width: '100%',
    height: '100%',
},
  inputStyle:{
    height: height * 0.06, 
    width: width * 0.85, 
    borderBottomColor: 'rgba(0,0,0,0.75)', 
    borderBottomWidth: 1,
    margin: width * 0.04,
    color:"rgba(0,0,0,0.75)",    
},
  buttonText:{
    color: "white",
},
  caixaButton: {
    color: "white",
    height: 50,
    borderColor: 'white',
    padding: 15,
    borderRadius: 25,
    textAlign: 'center',
    margin: 13,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:'rgba(0,0,0,0.35)',
    fontSize: 15,
},
  buttonTexto:{
    color:'white',
    fontSize: 15,
 },
});
