import React, { useState } from 'react'
import {
  Button,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

export default function Login({ navigation }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    navigation.navigate('Main')
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/facebook_con.png')}
        style={styles.image}
      />
      <TextInput
        placeholder="Email or Phone"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.input}
        placeholderTextColor="#93a2c1"
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
        placeholderTextColor="#93a2c1"
      />
      <TouchableOpacity style={styles.pressable} onPress={handleLogin}>
        <Text
          style={{
            color: '#b1bbd0',
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>

      <Text
        onPress={() => navigation.navigate('Register')}
        style={[styles.linkText, { marginTop: 100 }]}
      >
        Sign Up for Facebook
      </Text>
      <Text onPress={() => console.log('Press Link')} style={styles.linkText}>
        Forgot Password?
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    backgroundColor: '#3b5998',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: '40%',
    borderRadius: 6,
    marginBottom: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#93a2c1',
    color: '#fff',
    width: 300,
    height: 60,
    fontSize: 17,
  },
  pressable: {
    backgroundColor: '#4e69a2',
    width: 300,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    paddingBottom: 30,
  },
})
