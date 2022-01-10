import React from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'

export default function ModePostModal({ visible, onPress }) {
  return (
    <Modal visible={visible} onRequestClose={onPress}>
      <Text>Modal</Text>
    </Modal>
  )
}

const styles = StyleSheet.create({})
