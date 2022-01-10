import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native'
import React, { useState } from 'react'

import Header from './Header'
import TabBarNavigation from './TabBarNavigation'

function Main() {
  return (
    <>
      <Header />
      <TabBarNavigation />
    </>
  )
}

const styles = StyleSheet.create({})

export default Main
