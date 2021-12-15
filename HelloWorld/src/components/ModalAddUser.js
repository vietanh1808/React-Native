import React, { PureComponent, useEffect, useState } from 'react'
import { Alert, Button, Image, Modal, Pressable, StyleSheet, TextInput, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function ModalAddUser ({ onBack, isVisible, navigation }) {

    const [modalVisible, setModalVisible] = useState(true)
    const [newUsername, setNewUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [userKeys, setUserKeys] = useState([])

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const handleAddNewUser = async() => {
        if (userKeys.includes(newUsername)) {
            Alert.alert("Tài khoản đã tồn tại!")
            return
        }

        try {
            await AsyncStorage.multiSet([[newUsername, newPassword]])
            Alert.alert(
                'Thông báo!',
                `Tạo user: ${newUsername} thành công...`,
                [
                    {
                        text: 'OK',
                        onPress: () => onBack()
                    }
                ])
            
        } catch (error) {
            Alert.alert(`Tạo user: ${newUsername} thất bại!`)
            console.log('Error to Add New User...', error);
        }

        setNewUsername('')
        setNewPassword('')
    }

    const getKeysUser = async() => {
        try {
            const keys = await AsyncStorage.getAllKeys()
            setUserKeys(keys)
        } catch (error) {
            
        }
    }
    
    useEffect(() => {
        getKeysUser()
        return () => {
        }
    }, [])

    return (
        <Modal 
            animationType="fade"
            visible={isVisible}
            onRequestClose={onBack}
        >
            <View style={styles.container}>
                <Image 
                    style={styles.imageView}
                    source={{
                        uri: 'https://icons.iconarchive.com/icons/aha-soft/free-large-boss/128/Admin-icon.png',
                        height: 150,
                        width: 150
                    }}
                />
                <TextInput 
                    style={styles.textInputView}
                    placeholder="Tên đăng nhập..."
                    value={newUsername}
                    onChangeText={(text) => setNewUsername(text)}
                />
                <TextInput 
                    style={styles.textInputView}
                    placeholder="Mật khẩu..."
                    value={newPassword}
                    onChangeText={(text) => setNewPassword(text)}
                />
                <View style={styles.buttonViewGroup}>
                    <Button 
                        title="TẠO"
                        onPress={handleAddNewUser}
                    />
                    <Button 
                        title="QUAY LẠI"
                        onPress={onBack}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textInputView: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    buttonViewGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    imageView: {
        alignSelf: 'center'
    }
})

export default ModalAddUser