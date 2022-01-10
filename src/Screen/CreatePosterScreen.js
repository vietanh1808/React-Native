import { NavigationContext } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  Touchable,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { stylePoster, others } from '../constants/StylePoster'

export default function CreatePosterScreen() {
  const navigation = React.useContext(NavigationContext)
  const [modePost, setModePost] = useState('Mọi người')

  const renderPoster = ({ item }) => {
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
            source={{ uri: item.img }}
            style={{ flex: 1, borderRadius: 10 }}
            width={40}
            height={40}
          />
        )}
      </TouchableOpacity>
    )
  }

  const renderOther = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1 }}
      >
        <Icon name={item.icon} size={25} style={{ width: 35 }} />
        <Text style={{ paddingLeft: 10 }}>{item.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ backgroundColor: '#fff' }}>
      {/* ---------------- HEADER -------------- */}

      {/* --------------- TITLE ---------------- */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Image
          source={require('../assets/Avatar.jpg')}
          style={styles.avatarImg}
        />
        <View>
          <Text style={{ fontWeight: '600', fontSize: 17, marginBottom: 3 }}>
            Dang Nguyen
          </Text>
          <TouchableOpacity style={styles.positionPosterButton}>
            <Icon name="user-friends" size={15} />
            <Text style={{ paddingHorizontal: 8, fontWeight: '700' }}>
              Bạn bè
            </Text>
            <Icon name="caret-down" size={15} />
          </TouchableOpacity>
        </View>
      </View>
      {/* --------------- CONTENT -------------- */}
      <TextInput
        placeholder="Bạn đang nghĩ gì vậy, Nguyen?"
        autoFocus={false}
        numberOfLines={5}
        multiline={true}
        scrollEnabled={true}
        style={{
          fontSize: 20,
          padding: 10,
          textAlignVertical: 'top',
        }}
      />
      <FlatList
        data={stylePoster}
        renderItem={renderPoster}
        horizontal={true}
        style={{ marginBottom: 20 }}
      />
      <FlatList
        style={{ borderTopWidth: 1 }}
        data={others}
        renderItem={renderOther}
        style={{ marginBottom: 20 }}
      />

      <Button title="ĐĂNG" onPress={() => navigation.goBack()}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  avatarImg: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 10,
  },
  positionPosterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e4e6eb',
    padding: 8,
    borderRadius: 10,
  },
})
