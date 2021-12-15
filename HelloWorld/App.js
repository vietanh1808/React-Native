import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {  Button, StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container} >
    //   <Login />
    // </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 30,
    fontSize: 30,
  }
});
