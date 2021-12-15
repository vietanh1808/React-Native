import React, { useState, memo, useMemo } from 'react';
import { View, RefreshControl, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import CustomRow from './CustomRow';
import ModalDetailUser from './ModalDetailUser';

function CustomListview ({ users, readItemFromStorage }) {
    const [refreshing, setRefreshing] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [visibleModal, setVisibleModal] = useState(false)
    
    const onRefresh = () => {
        setRefreshing(true)
        const readStorage = readItemFromStorage()
        readStorage.then(() => setRefreshing(false))
        readStorage.catch(() => {
            setRefreshing(false)
            Alert.alert("Reload thất bại...")
        })
    }

    const renderItem = ({ item, index, separators }) => {
        return (
            <View key={item.toString()}>
                <TouchableOpacity 
                    key={item.toString()}
                    style={styles.item}
                    onPress={() => handlePressItem(item)}
                >
                    <CustomRow key={item.toString()} title={item[0]} body={item[1]} />
                </TouchableOpacity>
            </View>
        )
    }

    const handlePressItem = (item) => {
        setUsername(item[0])
        setPassword(item[1])
        setVisibleModal(!visibleModal)
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={users}
                ListHeaderComponent={<Text style={{fontSize: 20, textAlign:'center'}}>Danh Sách User</Text>}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                refreshControl={
                    <RefreshControl 
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            <ModalDetailUser 
                username={username}
                password={password}
                isVisible={visibleModal}
                onBack={() => setVisibleModal(false)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
       borderBottomWidth:1,
        margin:5,
        padding:10,
        fontSize: 30
    }
});

export default memo(CustomListview);