import React ,{ useState, useEffect, useMemo } from "react";
import { Text, StyleSheet, View, Button, FlatList, ScrollView, Modal, Alert, TextInput, RefreshControl, Pressable, Image } from "react-native";
import CustomListview from "../components/CustomListView";
import ModalAddUser from "../components/ModalAddUser";
import ModalDetailUser from "../components/ModalDetailUser";
import { DATA, NEW_DATA } from '../constants/data.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Main({ route, navigation }) {
    
    const [users, setUsers] = useState([])
    const [showModalAdd, setShowModalAdd] = useState(false)

    useEffect(() => {
        readItemFromStorage()
        return () => {
        }
    }, [])

    const readItemFromStorage = async () => {
        try {
            const usernameKeys = await AsyncStorage.getAllKeys();
            let values = await AsyncStorage.multiGet(usernameKeys)
            let list = []
            values.map((value, index) => (
                list.push(value)
            ))
            setUsers(list)
        } catch(e) {
            // read error
            console.log("Read Storage", error);
        }
    };

    return (
   
        <View style={styles.container}>

            <ModalAddUser 
                onBack={() => setShowModalAdd(false)}
                isVisible={showModalAdd}
                navigation={navigation}
            />

            <CustomListview 
                readItemFromStorage={() => readItemFromStorage()}
                users={users}
            />

            <View style={styles.buttonView}>
                <Pressable 
                    onPress={() => setShowModalAdd(true)}
                    accessibilityHint="Hello"
                    style={styles.pressable}
                >
                    <Image 
                        style={styles.logoAdd}
                        source={require('../asserts/material-icon-g58ecc7c3a_1280.png')}
                    />
                </Pressable>
              
            </View>
        </View>
     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        padding:5,
    },
    buttonView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 10,
        
    },
    pressable: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoAdd: {
        width: 50,
        height: 50
    },  
})

export default (Main)
