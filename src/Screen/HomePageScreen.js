import React, { Component } from 'react'
import {
  Dimensions,
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'
import HeaderHomePage from '../components/HeaderHomePage'
import NewFeeds from '../components/NewFeeds'
import StoryList from '../components/StoryList'

function HomePageScreen() {
  return (
    <ScrollView>
      <HeaderHomePage />
      <StoryList />
      <NewFeeds />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default HomePageScreen
