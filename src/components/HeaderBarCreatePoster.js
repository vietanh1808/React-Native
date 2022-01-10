import React, { useContext } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function HeaderBarCreatePoster({ title, navigation }) {
  return (
    <View style={styles.headerView}>
      <Text
        style={{
          fontWeight: '700',
          color: '#1c1e21',
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <TouchableOpacity
        style={{ marginLeft: Dimensions.get('screen').width - 260 }}
        onPress={() => navigation.navigate('Main')}
      >
        <Text
          style={{
            color: '#fff',
            padding: 10,
            backgroundColor: '#1b74e4',
            fontWeight: '700',
            borderRadius: 10,
          }}
        >
          ĐĂNG
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
