import React from 'react';
import { View, Platform, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';

import logo from '../assets/logo.png';



export default class Loading extends React.Component {
     
    componentDidMount() {               
        console.log("Hello 1");        
        firebase.auth().onAuthStateChanged(user => {
            console.log("Hello 2");
            this.props.navigation.navigate(user ? "Logged" : "Home");
            console.log("Hello 3 ");
            
        });
       //this.props.navigation.navigate("Home");
    }
   
    
    render() {
        return(               
            <View style={styles.container}>  
                <Image source={logo} style={styles.logo}/> 
                <ActivityIndicator size="large" color="#95C213"/>
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
});