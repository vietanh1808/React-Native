import { NavigationContext } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  Button,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native'
import CreatePosterModal from './Modals/CreatePosterModal'

export default function HeaderHomePage() {
  const navigation = React.useContext(NavigationContext)

  const [visible, setVisible] = useState(false)
  const handleVisibleModal = () => {
    setVisible(false)
  }

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <CreatePosterModal visible={visible} onPress={handleVisibleModal} />
        <Image
          source={require('../assets/Avatar.jpg')}
          style={styles.imgAvatar}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('CreatePoster')} // STUCK HEARRR
          // onPress={() => setVisible(true)}
          style={styles.TouchableOpacity}
        >
          <Text>Bạn đang nghĩ gì?</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.container2]}>
        <TouchableOpacity style={styles.pressableContainer2}>
          <Image
            style={styles.imgContainer2}
            source={require('../assets/icons/camera_icon.png')}
          />
          <Text style={styles.textPressable}>Phát trực tiếp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressableContainer2}>
          <Image
            style={[styles.imgContainer2, { width: 25, height: 25 }]}
            source={require('../assets/icons/gallary_icon.png')}
          />
          <Text style={styles.textPressable}>Ảnh </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pressableContainer2}>
          <Image
            style={styles.imgContainer2}
            source={require('../assets/icons/camera_icon.png')}
          />
          <Text style={styles.textPressable}>Check-in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    paddingVertical: 5,
  },
  imgAvatar: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 10,
  },
  TouchableOpacity: {
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
    padding: 7,
    paddingLeft: 20,
    paddingRight: '40%',
  },
  container2: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 5,
    borderTopWidth: 1,
    paddingVertical: 8,
  },
  imgContainer2: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  pressableContainer2: {
    flexDirection: 'row',
  },
  textPressable: {
    fontSize: 12,
  },
})
