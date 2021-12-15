import React, { useRef, useEffect, useState, useMemo } from 'react'
import { Modal, Alert, Button, Image, Keyboard, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function ModalDetailUser({ username, password, onBack, isVisible }) {
    
    const [newUsername, setNewUsername] = useState(username)
    const [newPassword, setNewPassword] = useState(password)

    useEffect(() => {
        setNewUsername(username)
        setNewPassword(password)
        return () => {
            setNewUsername(username)
            setNewPassword(password)
        }
    }, [username])
        
    const handleEditUser = async() => {
        try {
            const userMerge = [username, newPassword]
            await AsyncStorage.multiMerge([userMerge])
            Alert.alert(
                'Thông báo!',
                `Cập nhật user: ${newUsername} thành công...`,
                [
                    {
                        text: 'OK',
                        onPress: () => onBack()
                    }
                ]
            )
        } catch (error) {
            Alert.alert(`Cập nhật user: ${newUsername} thất bại!`)
            console.log('Error to Add New User...', error);
        }
    }

    const handleDeleteUser = () => {
        Alert.alert(
            "Warning!",
            `Bạn có muốn xóa user ${username} không?`,
            [
                {
                    text: 'OK',
                    onPress: () => deleteUser()
                },
                {
                    text: 'CANCEL'
                }
            ],
            {
                cancelable: true,
            }
        )
    }   

    const deleteUser = async() => {
        try {
            await AsyncStorage.removeItem(username, (error) => {
                if (error !== null) return
                else {
                    Alert.alert(
                        "Thông báo",
                        "Xóa thành công!",
                        [
                            {
                                text: 'OK',
                                onPress: () => onBack()
                            }
                        ]
                    )
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

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
                    <View style={styles.EditUserGroupView}>
                        <Text style={styles.textView}>Username: </Text>
                        <TextInput 
                            style={styles.textInputView}
                            placeholder="Tên đăng nhập..."
                            value={newUsername}
                            onChangeText={(text) => setNewUsername(text)}
                            editable={false}
                        />
                    </View>
                    <View style={styles.EditUserGroupView}>
                        <Text style={styles.textView}>Password: </Text>
                        <TextInput 
                            style={styles.textInputView}
                            placeholder="Mật khẩu..."
                            value={newPassword}
                            onChangeText={(text) => setNewPassword(text)}
                            onBlur={() => console.log("On Blur")}
                            onEndEditing={() => console.log("On EndEditing!")}
                        />
                    </View>

                <View style={styles.buttonViewGroup}>
                    <Button 
                        title="CẬP NHẬT"
                        onPress={handleEditUser}
                    />
                    <Button 
                        title="Xóa"
                        onPress={handleDeleteUser}
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
        padding: 10,
        paddingLeft: 20,
        fontSize: 20,
        paddingRight: 40,
    },
    textView: {
        padding: 10,
        fontSize: 20
    },
    buttonViewGroup: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 10,
    },
    imageView: {
        alignSelf: 'center'
    },
    EditUserGroupView: {
        flexDirection: 'row',
        marginHorizontal: 30,
        margin: 10
    }
})

export default (ModalDetailUser);