import React, { Component } from 'react'
import {
  View,
  StatusBar,
} from 'react-native'

import { Scene, Router } from 'react-native-router-flux';

import Login from './containers/AuthContainer/Login'
import Dashboard from './containers/MainContainer/Dashboard'
import Cadastro from './containers/AuthContainer/Cadastro'

class RouterComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }

  render () {
    return (
      <View style={styles.container}>
        <Router>
          <Scene key='app'>
            <Scene key='auth' initial hideNavBar>
              <Scene key='login'
                component={Login}
                initial />
              <Scene
                  key='dashboard'
                  component={Dashboard} />
              <Scene
                key='cadastro'
                component={Cadastro} />
            </Scene>
          </Scene>
        </Router>
      </View>
    )
  };
}

const styles = {
  container: {
    flex: 1
  },
  sceneStyle: {
    backgroundColor: '#F5F6F7'
  },
  navigationBarStyle: {
    elevation: 10,
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOpacity: 0.7,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  titleStyle: {
    color: '#FFFFFF',
    letterSpacing: 1,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: -30,
  }
}

export default RouterComponent
