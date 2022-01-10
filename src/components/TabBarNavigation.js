import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
  HomePageScreen,
  WatchScreen,
  StoreScreen,
  GamingScreen,
  NotificationScreen,
  MenuScreen,
} from '../Screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialTopTabNavigator()

export default function TabBarNavigation() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomePageScreen"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          title: 'Hello World',
          tabBarStyle: styles.navigator,
          tabBarShowLabel: false,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomePageScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="home-outline" size={25} color={color} />
            },
          }}
        />
        <Tab.Screen
          name="Watch"
          component={WatchScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="play-outline" size={25} color={color} />
            },
          }}
        />
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="home-outline" size={25} color={color} />
            },
          }}
        />
        <Tab.Screen
          name="Gaming"
          component={GamingScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name="game-controller-outline"
                  size={25}
                  color={color}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={color}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return <Ionicons name="menu-outline" size={25} color={color} />
            },
          }}
        />
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  navigator: {
    //
  },
})
