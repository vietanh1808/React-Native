import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function CustomRow ({ title, body }) {
    return (
        <View>
            <Text style={styles.textView}>{title}</Text>
            <Text style={styles.textView}>{body}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textView: {
        fontSize: 25
    }
})

export default CustomRow;