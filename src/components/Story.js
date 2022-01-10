import React, { useState } from 'react'
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default function Story({ id, name, avatar, image }) {
  const [createStory, setCreateStory] = useState()

  return (
    <View style={styles.container}>
      <Pressable>
        <ImageBackground
          source={{ uri: image }}
          borderRadius={12}
          style={styles.imageBackround}
        >
          <Image
            source={{ uri: avatar }}
            style={id === '0' ? styles.imageFirst : styles.imageAvatar}
          />
          <Text style={styles.text}>{name}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  imageBackround: {
    width: 100,
    height: 180,
    marginRight: 6,
    padding: 10,
    borderRadius: 10,
  },
  imageAvatar: {
    width: 32,
    height: 32,
    borderWidth: 4,
    borderColor: '#3578e5',
    borderRadius: 50,
  },
  text: {
    fontSize: 10,
    fontFamily: 'sans-serif',
    position: 'absolute',
    bottom: 7,
    left: 7,
    color: '#fff',
  },
  imageFirst: {
    width: 32,
    height: 32,
    borderRadius: 50,
    position: 'absolute',
    top: '50%',
    left: '45%',
  },
})
