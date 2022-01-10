import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Header from './src/components/Header'
import HeaderBarCreatePoster from './src/components/HeaderBarCreatePoster'
import Main from './src/components/Main'
import CreatePosterScreen from './src/Screen/CreatePosterScreen'
import Login from './src/Screen/Login'
import Register from './src/Screen/Register'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="CreatePoster"
          component={CreatePosterScreen}
          options={({ route, navigation }) => ({
            headerShown: true,
            title: 'Tạo bài viết',
            headerTitle: (props) => {
              return (
                <HeaderBarCreatePoster
                  title={props.children}
                  navigation={navigation}
                />
              )
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
