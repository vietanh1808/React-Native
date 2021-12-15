import { StyleSheet, Button, Text, View, TouchableOpacity, Modal } from "react-native"
import React, { PureComponent } from 'react'

export default function ModalTest ({
    message,
    title,
    visible,
    onConfirm,
  }) {
    return (
      <Modal animationType="fade" visible={visible} >
        <View style={styles.container}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.messageText}>{message}</Text>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.confirmButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 16,
      margin: 16,
      borderRadius: 14,
    },
    titleText: {
      fontSize: 20,
    },
    messageText: {
      fontSize: 14,
      marginTop: 4,
    },
    confirmButton: {
      alignSelf: 'center',
      backgroundColor: '#2a9d8f',
      paddingVertical: 8,
      paddingHorizontal: 24,
      marginTop: 16,
      borderRadius: 8,
    },
    confirmButtonText: {
      color: '#fff',
    },
  });