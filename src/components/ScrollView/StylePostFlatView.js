import React from 'react'
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native'

export default function StylePostFlatView({ data }) {
  return (
    <ScrollView style={{ flex: 1 }} horizontal={true}>
      {data.map((item, index) => {
        const checkImage = item.img !== ''
        return (
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: item.color,
              borderRadius: 10,
              marginLeft: 20,
              borderWidth: checkImage ? 0 : 1,
              elevation: 10,
            }}
          >
            {checkImage && (
              <Image
                resizeMode="stretch"
                source={{ uri: item.img }}
                style={{ borderRadius: 10, width: 40, height: 40 }}
              />
            )}
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
