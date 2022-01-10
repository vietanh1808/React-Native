import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { STORIES } from '../constants/Data'
import Story from './Story'

export default function StoryList() {
  const renderItem = ({ item }) => {
    return (
      <Story
        id={item.id}
        name={item.name}
        avatar={item.avatar}
        image={item.image}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={STORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#fff',
    marginVertical: 12,
    paddingVertical: 5,
  },
})
