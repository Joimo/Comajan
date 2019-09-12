import React from 'react';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
//import { TextInputMask } from 'react-native-masked-text';

import logo from '../assets/logo.png';

export default class Login extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView
                behavior="padding"
                enabled={Platform.OS === 'ios'}
                style={styles.container}
            > 
                
                <Image source={logo} style={styles.logo}/> 
                
                <TextInput  
                style={styles.input} 
                placeholder="Digite seu Email"
                //keyboardType='decimal-pad'            
                placeholderTextColor="#999"
                />            

                <TextInput  
                style={styles.input} 
                placeholder="Digite seu Nome"            
                placeholderTextColor="#999"
                />

                <TextInput  
                style={styles.input} 
                placeholder="Digite seu Endereço"            
                placeholderTextColor="#999"
                />

                <TextInput  
                style={styles.input} 
                placeholder="Digite sua senha"
                keyboardType='decimal-pad' 
                placeholderTextColor="#999"
                secureTextEntry={true}   
                />

                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}>Enviar</Text>    
                </TouchableOpacity>

            </KeyboardAvoidingView>        
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
        fontWeight:'bold',
        fontSize: 16,
    },
});