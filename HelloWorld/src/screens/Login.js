import React, { forwardRef, useState, useEffect, memo } from 'react';
import {  Alert, Button, StyleSheet, Text, View, TextInput, AsyncStorage, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Modal, ScrollView } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';


function Login({ navigation, route }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userKeys, setUserKeys] = useState([])
    const [users, setUsers] = useState([])

    const handleLogin = () => {
        if (!userKeys.includes(username) && !users.includes([username, password])) {
            Alert.alert("Tài khoản không đúng!")
            return
        }

        setUsername('')
        setPassword('')

        return navigation.navigate({
          name: 'Main',
          params: { users: users }
        })
    }
    
    useEffect(() => {
        readItemFromStorage();
        return () => {
          setUsers([])
        }
    }, []);

    useEffect(() => {
      if (route.params?.post) {
        setUsers(route.params?.post)
        console.log(route.params?.post);
      }
      return () => {
        
      }
    }, [route.params?.post])
    
    const readItemFromStorage = async () => {
        console.log("Read Storage!");
        try {
            const usernameKeys = await AsyncStorage.getAllKeys();
            setUserKeys(...userKeys, usernameKeys)
            let values = await AsyncStorage.multiGet(usernameKeys)
            let list = []
            values.map((value, index) => (
                list.push(value)
            ))
            setUsers(list)
        } catch(e) {
          // read error
        }
    };

    return (
          <View style={styles.container}>
            <Text style={styles.title}>
                FORM ĐĂNG NHẬP
             </Text>
            <TextInput 
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Nhập username..."
            />
             <TextInput 
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Nhập password..."
            />
            <Text 
                style={styles.textRegister}
                onPress={() => navigation.navigate('Register')}
            >
                Đăng ký tài khoản
            </Text>
            <Button 
                title="Đăng nhập"
                onPress={handleLogin}
            />
            <ScrollView style={{padding: 10}}>
              {users.map((user, index) => (
                <Text key={index} style={{fontSize: 20}}>User {index}:     {user[0]} - {user[1]}</Text>
              ))}
            </ScrollView>
            
          </View>
    
)}
  
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
       borderWidth: 1,
       height: 40,
       margin: 10,
       padding: 10
    },
    textRegister: {
        textDecorationLine: "underline",
        textDecorationColor: "blue",
        margin: 10,
        color: "blue",
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      padding: 10,
    },
  });

export default (Login)