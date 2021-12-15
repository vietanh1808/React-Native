import React, { useEffect, useState, memo } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Register({ navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [users, setUsers] = useState([])
    const [userKeys, setUserKeys] = useState([])

    const readItemFromStorage = async () => {
        let values
        try {
            const usernameKeys = await AsyncStorage.getAllKeys();
            setUserKeys(...userKeys, usernameKeys)
            values = await AsyncStorage.multiGet(usernameKeys)
            let list = []
            values.map((value, index) => (
                list.push(value)
            ))
            setUsers(list)
        } catch(e) {
          // read error
        }
    };

    const writeItemToStorage = async newValue => {
        const isExist = userKeys.includes(username)
        if (isExist) {
            Alert.alert("Tài khoản đã tồn tại!")
            return
        }
        if (rePassword !== password) {
            Alert.alert("Mật khẩu không đúng!")
            return
        }

        try {
            await AsyncStorage.multiSet([[username, password]]);
            setUsers(prev => {
                return [...prev, [username, password]]
            })
            
        } catch (error) {
            console.log('Error t Write Storage!', error);
        }

        setUsername('')
        setPassword('')
        setRePassword('')
        show()
    };

    const show = () => {
        
        Alert.alert(
            "Thông báo!", 
            "Bạn đã đăng ký thành công...",
            [
                {
                    text: 'OK',
                    onPress: () => 
                        navigation.navigate({
                            name: 'Login',
                            params: { post: users },
                            merge: true,
                            sortBy: 'latest'
                        })
                }
            ]
        )
    }

    useEffect(() => {
        readItemFromStorage();
        return () => {
            // setUsers([])
        }
    }, []);

    return (
        <View>
            <TextInput 
                value={username}
                onChangeText={(text) => setUsername(text)}
                style={styles.input}
                placeholder="Tên đăng nhập..."
            />
            <TextInput 
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder="Mật khẩu..."
            />
            <TextInput 
                value={rePassword}
                onChangeText={(text) => setRePassword(text)}
                style={styles.input}
                placeholder="Nhập lại mật khẩu..."
            />
            <View style={styles.button}>
                <Button
                    style={styles.button}
                    title="ĐĂNG KÝ"
                    onPress={() => writeItemToStorage()}
                />
                <Button 
                    title="CLEAR"
                    color="#f194ff"     
                    onPress={() => AsyncStorage.clear()}     
                />
                <Button 
                    title="BACK"
                    onPress={() => navigation.goBack()}
                />
            </View>
            {users.map((user, index) => (
                <Text key={index}>{index}, {user}</Text>
            ))}
            
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})

export default memo(Register)