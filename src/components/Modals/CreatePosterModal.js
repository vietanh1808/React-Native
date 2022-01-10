import React, { useState } from 'react'
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
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { stylePoster, others } from '../../constants/StylePoster'
import StylePostFlatView from '../ScrollView/StylePostFlatView'

export default function CreatePosterModal({ visible, onPress, user }) {
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
    <Modal visible={visible} onRequestClose={onPress}>
      {/* ---------------- HEAER -------------- */}
      <View style={styles.headerView}>
        <Text
          style={{
            fontWeight: '700',
            color: '#1c1e21',
            fontSize: 20,
          }}
        >
          Tạo vào viết
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
          }}
          onPress={onPress}
        >
          <Icon
            name="times"
            size={20}
            color="#606770"
            style={styles.ExitIcon}
          />
        </TouchableOpacity>
      </View>
      {/* --------------- TITLE ---------------- */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <Image
          source={require('../../assets/Avatar.jpg')}
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
      />
      <FlatList
        style={{ borderTopWidth: 1 }}
        data={others}
        renderItem={renderOther}
      />

      <Button title="ĐĂNG" onPress={onPress}></Button>
    </Modal>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#e5e5e5',
  },
  ExitIcon: {
    backgroundColor: '#e4e6eb',
    padding: 10,
    borderRadius: 30,
    paddingHorizontal: 14,
  },
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
