import React from 'react';
import { View, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';

import * as firebase from 'firebase';

export default class Logged extends React.Component {
    state = {
        email: '',    
    };

    componentDidMount() {
        const email = firebase.auth().currentUser;
        
        this.setState(email);        
    }

    signOutUser = () => {
        firebase.auth().signOut();   
    };
    render () {
        return(
            <View style={styles.container}>
                <Text> Email: {this.state.email} </Text>                  

                <TouchableOpacity style={styles.button} onPress={this.signOutUser}>
                   <Text style={styles.buttonText}>Sair</Text> 
                </TouchableOpacity>                        
            </View>
        )
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding:30,
    },
    logo: {
        width: 250,
        height: 150,
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
        fontWeight:'bold',
        fontSize: 16,
    },
});