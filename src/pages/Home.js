import React from 'react';
import { View, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png';



export default class Home extends React.Component {
   // function handleLogin(){
   //     navigation.navigate('Login');
   // }
    render () {
        return(
            <View style={styles.container}>
                
                <Image source={logo} style={styles.logo}/> 

                <TouchableOpacity onPress={()  => this.props.navigation.navigate("Login")} style={styles.button}> 
                    <Text style={styles.buttonText}>Acessar</Text>    
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}>Cadastrar</Text>    
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