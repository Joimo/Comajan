import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './pages/Home';
import Login from './pages/Login';
import Loading from './pages/Loading';
import Register from './pages/Register';
import Logged from './pages/Logged';
import * as firebase from 'firebase';

var firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyBuJfRSltCDirhTADs6MTShhAN3GegEbB0",
    authDomain: "comajan-a17a4.firebaseapp.com",
    databaseURL: "https://comajan-a17a4.firebaseio.com",
    projectId: "comajan-a17a4",
    storageBucket: "",
    messagingSenderId: "1090336328516",
    appId: "1:1090336328516:web:a2adee311bdbd60461e511"
  };
  

  // Initialize Firebase
=======
  apiKey: 'AIzaSyBuJfRSltCDirhTADs6MTShhAN3GegEbB0',
  authDomain: 'comajan-a17a4.firebaseapp.com',
  databaseURL: 'https://comajan-a17a4.firebaseio.com',
  projectId: 'comajan-a17a4',
  storageBucket: '',
  messagingSenderId: '1090336328516',
  appId: '1:1090336328516:web:a2adee311bdbd60461e511',
};

// Initialize Firebase
>>>>>>> 8f4135ac871a4af740c3b877df173067f7a280c9
firebase.initializeApp(firebaseConfig);



const AppStack = createSwitchNavigator({
  Home: Home,
});

const LoggedApp = createSwitchNavigator({
  Loged: Logged,
});

const Auth = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0, //para ios
        backgroundColor: '#f5f5f5',
      },
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0, //para ios
        backgroundColor: '#f5f5f5',
      },
    },
  },
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      Logged: LoggedApp,
      Auth: Auth,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);
