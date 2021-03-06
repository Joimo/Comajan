import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Platform,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import { TextInputMask } from 'react-native-masked-text';

import * as firebase from 'firebase';

//import auth from '@react-native-firebase/auth';
//import firebase from '@react-native-firebase';
import logo from '../assets/logo.png';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
    isAuthenticated: false,
  };

  handleLogin = async () => {
    const {email, password} = this.state;

    const user = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        if (error.code == 'auth/wrong-password') {
          this.setState({
            errorMessage: 'Senha Inválida.',
          });
        }
        if (error.code == 'auth/invalid-email') {
          this.setState({
            errorMessage: 'Email Inválido.',
          });
        }
        if (this.state.email == '' || this.state.password == '') {
          this.setState({
            errorMessage: 'Campos obrigatórios.',
          });
        }
      });

    //this.state.isAuthenticated ? this.props.navigation.navigate('Logged',email) : null;
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          //keyboardType='decimal-pad'
          placeholderTextColor="#999"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          keyboardType="decimal-pad"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.textLinhas}>
          <Text style={styles.registerText}> Esqueceu suas credenciais?</Text>
          <Text
            style={styles.registerTextClick}
            onPress={() => this.props.navigation.navigate('Register')}>
            {' '}
            Clique Aqui!
          </Text>
        </View>

        <View style={styles.linhas}>
          <View style={styles.linha} />
          <Text>OU</Text>
          <View style={styles.linha} />
        </View>

        <View style={styles.textLinhas}>
          <Text style={styles.registerText}> Não possui uma conta?</Text>
          <Text
            style={styles.registerTextClick}
            onPress={() => this.props.navigation.navigate('Register')}>
            {' '}
            Clique Aqui!
          </Text>
        </View>

        <KeyboardAvoidingView style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </KeyboardAvoidingView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 250,
    height: 150,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 30,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#95C213',
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 72,
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    textAlign: 'center',
  },
  textLinhas: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linhas: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  linha: {
    borderBottomColor: '#911f23',
    borderBottomWidth: 0.3,
    width: '35%',
    margin: 10,
  },
  registerText: {
    marginTop: 10,
    color: '#333333',
    fontSize: 10,
  },
  registerTextClick: {
    marginTop: 10,
    color: '#95C213',
    fontSize: 10,
  },
});
