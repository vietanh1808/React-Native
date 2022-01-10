import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

function MenuScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text> This is Menu Screen </Text>
      <TouchableOpacity
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#888',
          width: 100,
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={{ color: '#fff' }}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})

export default MenuScreen
