import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { NEW_FEEDS } from '../constants/Data'
import PosterItem from './PosterItem'

export default function NewFeeds() {
  const renderItem = (item) => {
    return (
      <PosterItem
        header={item.item.header}
        content={item.item.content}
        interaction={item.item.interaction}
      />
    ) // render props item poster
  }

  return (
    <View>
      <FlatList
        data={NEW_FEEDS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
