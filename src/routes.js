import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/Home'
import Login from './pages/Login'
import Loading from './pages/Loading'
import Register from './pages/Register'
import Logged from './pages/Logged'


import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBuJfRSltCDirhTADs6MTShhAN3GegEbB0",
    authDomain: "comajan-a17a4.firebaseapp.com",
    databaseURL: "https://comajan-a17a4.firebaseio.com",
    projectId: "comajan-a17a4",
    storageBucket: "",
    messagingSenderId: "1090336328516",
    appId: "1:1090336328516:web:a2adee311bdbd60461e511"
  };


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createSwitchNavigator({
    Home: Home,
    
})

const LoggedApp = createSwitchNavigator({
    Loged: Logged
})

const AuthStack = createStackNavigator({
    Login: Login,    
    Register: Register
})

export default createAppContainer(
    createSwitchNavigator(
    {
        Loading: Loading,
        Logged: LoggedApp,
        Home: AppStack,        
        Auth: AuthStack,
    },{
        initialRouteName: "Loading"
    }
    
    )

);