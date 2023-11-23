import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import History from './screens/history';
import Art from './screens/art';
import Animal from './screens/animal';
import Vehicle from './screens/vehicle';
import Result from './screens/result';
import Category from './screens/category';
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/SignUp"
import firebase from 'firebase/app';
import "firebase/auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const firebaseConfig = {
    apiKey: "AIzaSyBa68FLwHEcI0LLSkbGOvr87nd7JQfxCYw",
    authDomain: "quizapp-70d36.firebaseapp.com",
    projectId: "quizapp-70d36",
    storageBucket: "quizapp-70d36.appspot.com",
    messagingSenderId: "514587814630",
    appId: "1:514587814630:web:5b125be550a8508b462927"
  };

  //Checking if firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  return(

      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});