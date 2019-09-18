import React from 'react';
import { View, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';

import * as firebase from 'firebase';

import {db} from '../routes';

import logo from '../assets/logo.png';


export default class Logged extends React.Component {
    state = {
        email: '',
        name: '',                
        print: '',        
    };

    componentDidMount() {
        const email = firebase.auth().currentUser;                     
        this.setState(email);                                
        this.getItems();
    }

    getItems = async () => {

    }
  
    
    signOutUser = () => {
        firebase.auth().signOut();   
    };
    
    render () {
        return(
            <View style={styles.container}>
                <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#f5f5f5"
                translucent={false}
                />               

                <Text> Email: {this.state.email} </Text>    
                <Text> Name: {this.state.name} </Text>                  
                <Text> print: {this.state.print} </Text>                                 

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