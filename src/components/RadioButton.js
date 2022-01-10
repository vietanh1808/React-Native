import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function RadioButton({
  items,
  selected,
  horizonal = false,
  onChangeSelect,
}) {
  return (
    <View
      style={[
        {
          flexDirection: horizonal ? 'row' : 'column',
        },
        styles.container,
      ]}
    >
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onChangeSelect(item, index)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: horizonal ? 10 : 0,
            marginTop: horizonal ? 0 : 10,
          }}
        >
          <Icon name="circle" size={20} solid={index === selected} />
          <Text style={{ fontSize: 15, paddingLeft: 10 }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
})
