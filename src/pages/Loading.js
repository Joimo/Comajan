import React from 'react';
import {
  View,
  Platform,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import * as firebase from 'firebase';

import AlertPro from 'react-native-alert-pro';

import {db} from '../routes';
import logo from '../assets/logo.png';

export default class Loading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Logged' : 'Home');
    });
    //this.props.navigation.navigate("Home");

    <AlertPro
      ref={ref => {
        this.AlertPro = ref;
        this.props.AlertPro.close();
      }}
    />;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#f5f5f5"
          translucent={false}
        />
        <Image source={logo} style={styles.logo} />
        <ActivityIndicator size="large" color="#95C213" />
      </View>
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
});
