import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
//import { TextInputMask } from 'react-native-masked-text';

import * as firebase from 'firebase';

import {db} from '../routes';

import logo from '../assets/logo.png';

export default class Login extends React.Component {
  state = {
    email: '',
    name: '',
    place: '',
    password: '',
    errorMessage: '',
    isOk: true,
  };

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        if (error.code == 'auth/email-already-in-use') {
          this.setState({errorMessage: 'Este Email já está em uso.'});
          //Alert.alert(this.state.errorMessage);
          this.setState({isOk: false});
        }
        if (error.code == 'auth/invalid-email') {
          this.setState({errorMessage: 'Email Inválido.'});
          this.setState({isOk: false});
        }
        if (error.code == 'auth/weak-password') {
          this.setState({errorMessage: 'Senha Fraca.'});
          this.setState({isOk: false});
        }
      });
    if (this.state.isOk == false) {
      db.collection('users')
        .doc(this.state.email)
        .set({
          name: this.state.name,
          place: this.state.place,
        })
        .then(function() {
          console.log('Document successfully written!');
        })
        .catch(function(error) {
          console.error('Error writing document: ', error);
        });
      //.catch(error => this.setState({errorMessage: error.message}))
    }
  };

  // SAVE USER DATA IN FIRESTORES
  /*
            .set({
                name: this.state.name,
                place: this.state.place
             })
             .then(function() {
                 console.log("Document successfully written!");
             })
             .catch(function(error) {
                 console.error("Error writing document: ", error);
             });
            //.catch(error => this.setState({errorMessage: error.message}))
            */

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
          placeholder="Digite seu Nome"
          placeholderTextColor="#999"
          value={this.state.name}
          onChangeText={name => this.setState({name})}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Endereço"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={place => this.setState({place})}
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

        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
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
    padding: 15,
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    textAlign: 'center',
  },
});
