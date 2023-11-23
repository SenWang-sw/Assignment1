import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import History from '../screens/history';
import Result from '../screens/result';
import Category from '../screens/category';
import Art from '../screens/art';
import Animal from '../screens/animal';
import Vehicle from '../screens/vehicle';
import Loginscreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Loginscreen} 
      options={{headerShown: false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} 
      options={{headerShown: false}}/>
      <Stack.Screen name="History" component={History} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Result" component={Result} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Category" component={Category} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Art" component={Art} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Animal" component={Animal} 
      options={{headerShown: false}}/>
      <Stack.Screen name="Vehicle" component={Vehicle} 
      options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default MyStack;